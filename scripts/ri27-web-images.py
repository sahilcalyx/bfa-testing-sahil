"""Build web-sized copies of gallery2026 photos used on /register-interest-2027.

Usage: py scripts/ri27-web-images.py audience/36 venue/11 ...
Writes public/assets/img/gallery2026/web/<path>.webp (short side 900px, long side max 1600px).
"""
import os
import sys
from PIL import Image, ImageOps

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "assets", "img", "gallery2026")
SHORT, LONG, QUALITY = 900, 1600, 74

for rel in sys.argv[1:]:
    src = os.path.join(ROOT, rel + ".webp")
    dst = os.path.join(ROOT, "web", rel + ".webp")
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    w, h = im.size
    scale = min(SHORT / min(w, h), LONG / max(w, h), 1)
    if scale < 1:
        im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    im.save(dst, "WEBP", quality=QUALITY, method=6)
    print(f"{rel}: {os.path.getsize(src) // 1024}KB -> {os.path.getsize(dst) // 1024}KB {im.size}")
