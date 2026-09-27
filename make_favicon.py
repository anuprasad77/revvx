from PIL import Image

def create_favicon():
    img = Image.open('images/IMG_0499.webp').convert('RGBA')
    
    # Make it a perfect square
    # IMG_0499.webp is 500x500 which is already square!
    # Google requires multiples of 48px (192 = 48*4)
    img_resized = img.resize((192, 192), Image.Resampling.LANCZOS)
    
    img_resized.save('favicon.png', format='PNG')
    
    icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (192, 192)]
    img_resized.save('favicon.ico', format='ICO', sizes=icon_sizes)
    print('Favicons created successfully from IMG_0499.webp!')

if __name__ == '__main__':
    create_favicon()
