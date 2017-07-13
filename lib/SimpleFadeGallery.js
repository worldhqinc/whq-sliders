class SimpleFadeGallery {
    constructor (container) {
        this.container = container
        this.slides = null
        this.navigation = null
    }

    init () {
        if (this.container) {
            this.slides = this.container.querySelectorAll('[data-slide]')
            this.navigation = this.container.querySelectorAll('[data-to]')

            for (let i = 0; i < this.navigation.length; i++) {
                const element = this.navigation[i]

                element.addEventListener('click', () => {
                    const index = element.dataset.to
                    this.activateSlide(index)
            })
            }
        }
    }

    activateSlide (index) {
        for (let i = 0; i < this.slides.length; i++) {
            const element = this.slides[i]

            if (element.dataset.slide === index) {
                element.classList.add('active')
            } else {
                element.classList.remove('active')
            }
        }

        for (let i = 0; i < this.navigation.length; i++) {
            const element = this.navigation[i]

            if (element.dataset.to === index) {
                element.classList.add('active')
            } else {
                element.classList.remove('active')
            }
        }
    }
}

export default SimpleFadeGallery
