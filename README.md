# WHQ Sliders
Simple JavaScript sliders and galleries.

## Installation
```sh
npm install whq-sliders
```

## Simple Fade Gallery
Use this gallery for a simple fade effect. You can fade different elements on the page, no matter where they are. They just need the `data-slide` attribute. For navigation, put the `data-to` attribute on your buttons.

```html
<div class="my-gallery">
    <div class="slide-image active" data-slide="0"></div>
    <div class="slide-image" data-slide="1"></div>
    <div class="slide-image" data-slide="2"></div>
    <div class="gallery-navigation">
        <button class="active" data-to="0"></button>
        <button data-to="1"></button>
        <button data-to="2"></button>
    </div>
    <div class="slide-text active" data-slide="0">...</div>
    <div class="slide-text" data-slide="1">...</div>
    <div class="slide-text" data-slide="2">...</div>
</div>
```
```js
import { SimpleFadeGallery } from 'whq-sliders'

// new SimpleFadeGallery(element)

const element = document.querySelector('.my-gallery')
const myGallery = new SimpleFadeGallery(element)
myGallery.init()
```

## Flashing Gallery
Use this gallery for elements that have auto-swapping images. Give your slides a default background image style, a `data-image` attribute, and a `data-images` attribute that contains the full set of images you want to swap, comma-separated. The first image in this list should match your default image.

```html
<ul class="my-gallery">
    <li style="background-image:url('image-1.jpg');" data-image data-images="image-1.jpg,image-2.jpg"></li>
</ul>
```

```js
import { FlashingGallery } from 'whq-sliders'

// new FlashingGallery(element, transitionSpeed)

const element = document.querySelector('.partners-flashing-gallery')
const myGallery = new FlashingGallery(element, 3000)
myGallery.init()
```