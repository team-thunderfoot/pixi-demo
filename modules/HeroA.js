import video from "@/static/video/hero-bunny-2.mp4";
import Preload from "@/modules/Preload";
class HeroA {
    constructor(payload) {
        this.canvas = payload.background;
        this.component = document.getElementById(payload.component);
        this.titleTextRef = payload.title;
        this.subtitleTextRef = payload.subtitle;

        this.titleStyles = getComputedStyle(this.titleTextRef);
        this.subtitleStyles = getComputedStyle(this.subtitleTextRef);

        this.offsetY = - 90;

        this.app = new PIXI.Application({
            resizeTo: window,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            antialias: true,
        });
        
        this.canvas.appendChild(this.app.view);
        this.loaded = false;
        this.events();
    }

    async init() {
        this.videoElement = await Preload(video);
        // aspect rato is not used
        // this.aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
        this.videoSprite = new PIXI.Sprite.from(this.videoElement);
        this.videoSprite.width = this.app.screen.width;
        this.videoSprite.height = this.app.screen.height;
        this.videoSprite.anchor.set(0.5);
        this.centerElement(this.videoSprite)
        this.app.stage.addChild(this.videoSprite);

        // this.titleText = this.createText(
        //     this.titleTextRef.innerText,
        //     this.titleStyles
        // );
        // this.subtitleText = this.createText(
        //     this.subtitleTextRef.innerText,
        //     this.subtitleStyles
        // );

        // this.textContainer = new PIXI.Container();
        // this.textContainer.alpha = 0.7;

        // this.bg = new PIXI.Sprite();

        // this.textContainer.addChild(this.bg, this.titleText, this.subtitleText);
        // this.app.stage.addChild(this.textContainer);

        // this.addBlurr();

        // this.placeItems();

        this.loaded = true;
        return this.loaded;
    }

    events() {
        window.addEventListener(
            "resize",
            this.debounce(() => {
                this.placeItems();
            }, 150)
        );
    }

    placeItems() {
        // this.centerText(this.titleText, 0, 80);
        // this.centerText(this.subtitleText, 0, -25);
        this.centerElement(this.videoSprite);
        // this.setFontSize(this.titleText, this.titleStyles.fontSize);
        // this.setFontSize(
        //     this.subtitleText,
        //     this.subtitleStyles.fontSize
        // );
        // this.filter.center = [
        //     this.canvas.offsetWidth * 0.5,
        //     this.canvas.offsetHeight * 0.5 + this.offsetY,
        // ];
        this.bg.width = this.app.screen.width;
        this.bg.height = this.app.screen.height;
        this.dimensionVideo();
    }

    debounce(callback, wait) {
        let timeout;
        return (...args) => {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => callback.apply(context, args), wait);
        };
    }



    createText(textRef, styles) {
        this.textStyle = new PIXI.TextStyle({
            fontFamily: styles.fontFamily,
            fill: styles.color,
            align: styles.textAlign,
            fontWeight: styles.fontWeight,
        });

        const text = new PIXI.Text(textRef, this.textStyle);

        text.style.fontSize = styles.fontSize;
        
        return text;
    }

    setFontSize(pixiText, fontSize) {
        pixiText.style.fontSize = fontSize;
    }

    centerElement(element) {
        element.position.set(
            this.canvas.offsetWidth * 0.5,
            this.canvas.offsetHeight * 0.5
        );
    }

    centerText(text, offsetWidth, offsetHeight) {
        text.anchor.set(0.5);
        text.position.set(
            this.canvas.offsetWidth * 0.5 - offsetWidth,
            this.canvas.offsetHeight * 0.5 - offsetHeight
        );
    }

    dimensionVideo() {
        this.videoSprite.width = this.app.screen.width + 300;
        this.videoSprite.height = this.app.screen.height  + 300;
    }

    addBlurr() {
        this.filter = new RadialBlurFilter(
            50, // angle
            [
                this.canvas.offsetWidth * 0.5,
                this.canvas.offsetHeight * 0.5 + this.offsetY,
            ], // posititon
            50, // kernelSize
            window.innerWidth //radius
        );

        this.textContainer.filters = [this.filter];
    }

    raf() {
        let counter = 0;
        this.app.ticker.add((delta) => {
            counter += 0.01;
            this.filter.angle = 120 * Math.sin(counter);
        });
    }
}
export default HeroA;



