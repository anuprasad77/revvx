import os
from PIL import Image

def optimize_images(directory, max_size=800, quality=75):
    supported_formats = ('.jpg', '.jpeg', '.png')
    count = 0
    saved_bytes = 0

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(supported_formats):
                filepath = os.path.join(root, file)
                orig_size = os.path.getsize(filepath)

                try:
                    with Image.open(filepath) as img:
                        # Convert to RGB if PNG with alpha to save as JPEG safely, 
                        # but we can just save it back in its original format
                        original_format = img.format
                        if img.mode in ("RGBA", "P"):
                            img = img.convert("RGB")
                            original_format = "JPEG" # force to jpeg if it had transparency and we're overwriting a .png
                        
                        # Resize if too large
                        if img.width > max_size or img.height > max_size:
                            img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
                        
                        # Overwrite the original file to avoid breaking paths
                        img.save(filepath, format=original_format if original_format else 'JPEG', quality=quality, optimize=True)
                    
                    new_size = os.path.getsize(filepath)
                    saved_bytes += (orig_size - new_size)
                    count += 1
                    
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")
                    
    print(f"Optimized {count} images. Saved {saved_bytes / 1024 / 1024:.2f} MB!")

if __name__ == '__main__':
    optimize_images('images')
    # Also optimize static/images if any
    optimize_images('static/images')
