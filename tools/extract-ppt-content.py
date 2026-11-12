#!/usr/bin/env python3
"""
Bharat AI Forge — Presentation & Booklet Content Extractor (Development Utility)
================================================================================
Scans the repository root for PowerPoint (.pptx) or PDF booklet (.pdf) files,
extracts slide/page titles, paragraphs, tables, and key statistics, and writes
a structured JSON reference file for content updates.

Note: This is a development-only utility. The deployed website is 100% static
HTML5, CSS3, and Vanilla ES6+ JavaScript with zero Python/Node runtime dependencies.

Usage:
    python tools/extract-ppt-content.py
"""

import json
import sys
from pathlib import Path
from zipfile import ZipFile
import xml.etree.ElementTree as ET


def extract_from_pptx(pptx_path: Path) -> dict:
    """Extract slide text directly from a .pptx archive using standard library XML."""
    slides_data = []
    ns = {"a": "http://schemas.openxmlformats.org/drawingml/2006/main"}

    with ZipFile(pptx_path, "r") as archive:
        slide_files = sorted(
            [
                f
                for f in archive.namelist()
                if f.startswith("ppt/slides/slide") and f.endswith(".xml")
            ],
            key=lambda name: int(
                "".join(filter(str.isdigit, Path(name).stem)) or 0
            ),
        )

        for idx, slide_file in enumerate(slide_files, start=1):
            xml_bytes = archive.read(slide_file)
            root = ET.fromstring(xml_bytes)
            paragraphs = []
            for p in root.findall(".//a:p", ns):
                texts = [t.text for t in p.findall(".//a:t", ns) if t.text]
                line = "".join(texts).strip()
                if line:
                    paragraphs.append(line)

            slides_data.append(
                {
                    "slide_number": idx,
                    "title": paragraphs[0] if paragraphs else f"Slide {idx}",
                    "paragraphs": paragraphs[1:] if len(paragraphs) > 1 else [],
                }
            )

    return {
        "source_file": pptx_path.name,
        "format": "pptx",
        "slide_count": len(slides_data),
        "slides": slides_data,
    }


def extract_from_pdf(pdf_path: Path) -> dict:
    """Extract text from a PDF booklet if pypdf/pymupdf is installed, or return metadata."""
    pages_data = []
    try:
        import pypdf  # type: ignore

        reader = pypdf.PdfReader(str(pdf_path))
        for idx, page in enumerate(reader.pages, start=1):
            raw_text = page.extract_text() or ""
            lines = [line.strip() for line in raw_text.splitlines() if line.strip()]
            pages_data.append(
                {
                    "page_number": idx,
                    "title": lines[0] if lines else f"Page {idx}",
                    "lines": lines,
                }
            )
    except ImportError:
        pages_data.append(
            {
                "note": (
                    "Install pypdf (`pip install pypdf`) to re-extract PDF text, "
                    "or inspect data/statistics.js and data/curriculum.js where "
                    "all 15 pages of AI-Job-Ready-Programme-Booklet.pdf are already codified."
                )
            }
        )

    return {
        "source_file": pdf_path.name,
        "format": "pdf",
        "page_count": len(pages_data),
        "pages": pages_data,
    }


def main() -> int:
    repo_root = Path(__file__).resolve().parent.parent
    pptx_files = sorted(repo_root.glob("*.pptx"))
    pdf_files = sorted(repo_root.glob("*.pdf"))

    extracted = {
        "initiative": "Bharat AI Forge",
        "campaign": "India AI Ready 2030",
        "sources_found": [],
    }

    for pptx in pptx_files:
        print(f"[INFO] Extracting PPTX: {pptx.name}")
        extracted["sources_found"].append(extract_from_pptx(pptx))

    for pdf in pdf_files:
        print(f"[INFO] Extracting PDF booklet: {pdf.name}")
        extracted["sources_found"].append(extract_from_pdf(pdf))

    if not extracted["sources_found"]:
        print("[WARN] No .pptx or .pdf files found in project root.")
        return 0

    output_path = repo_root / "tools" / "extracted-presentation.json"
    output_path.write_text(json.dumps(extracted, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"[OK] Saved extracted summary to {output_path.relative_to(repo_root)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
