class FlashingGallery {
    constructor (container, transitionSpeed = 500) {
        this.container = container
        this.transitionSpeed = transitionSpeed
        this.images = null
        this.imageCount = null
    }

    init () {
        if (this.container) {
            this.images = this.container.querySelectorAll('[data-image]')
            this.imageCount = this.images.length

            for (let i = 0; i < this.imageCount; i++) {
                this.initImage(i, this.images[i])
            }
        }
    }

    initImage (index, element) {
        const imageOptions = element.dataset.images.split(',')

        setTimeout(() => {
            this.setupImageTransition(element, imageOptions)
        }, (this.transitionSpeed * index))
    }

    setupImageTransition (element, imageOptions) {
        let optionIndex = 1

        setInterval(() => {
            element.style.backgroundImage = `url(${imageOptions[optionIndex]})`
            optionIndex = optionIndex + 1 === imageOptions.length ? 0 : optionIndex + 1
        }, (this.transitionSpeed * this.imageCount))
    }
}

export default FlashingGallery
