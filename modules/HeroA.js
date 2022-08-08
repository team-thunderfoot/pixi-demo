import video from "@/static/video/hero-video.mp4";
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
            backgroundColor: 0x1099bb,
        });
        this.canvas.appendChild(this.app.view);
        this.loaded = false;
        this.events();
    }

    async init() {
        // Add video
        this.videoElement = await Preload(video);
        this.videoSprite = new PIXI.Sprite.from(this.videoElement);
        this.videoSprite.width = this.app.screen.width;
        this.videoSprite.height = this.app.screen.height;
        this.videoSprite.anchor.set(0.5);
        this.centerVideoSprite(this.videoSprite)
        this.app.stage.addChild(this.videoSprite);

        // Add top elements
        this.bg = new PIXI.Sprite();
        this.bg.width = this.app.screen.width * 0.2;
        this.bg.height = this.app.screen.height * 0.8 ;

        this.titleText = this.createText({title:this.titleTextRef.innerText,styles:this.titleStyles});
        this.subtitleText = this.createText( {title:this.subtitleTextRef.innerText,styles:this.subtitleStyles});

        this.textContainer = new PIXI.Container();
        this.textContainer.addChild(this.bg,this.titleText, this.subtitleText);
        this.textContainer.filters = [new RadialBlurFilter(
            50, // angle
            [
                this.canvas.offsetWidth * 0.5,
                this.canvas.offsetHeight * 0.5 + this.offsetY,
            ], // posititon
            50, // kernelSize
            window.innerWidth //radius
        )];
        this.centerText(this.titleText, 0, 80);
        this.centerText(this.subtitleText, 0, -25);
        this.app.stage.addChild(this.textContainer);

        this.loaded = true;
        return this.loaded;
    }

    events() {
        window.addEventListener(
            "resize",
            this.debounce(() => {
                this.centerVideoSprite(this.videoSprite);
                this.updateCenterBlob()
            }, 150)
        );
    }

    placeItems() {
        this.centerElement(this.videoSprite);
    }

    debounce(callback, wait) {
        let timeout;
        return (...args) => {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => callback.apply(context, args), wait);
        };
    }



    createText(payload) {
        this.textStyle = new PIXI.TextStyle({
            fontFamily: payload.styles.fontFamily,
            fill: payload.styles.color,
            align: payload.styles.textAlign,
            fontWeight: payload.styles.fontWeight,
        });
        const text = new PIXI.Text(payload.title, this.textStyle);
        text.style.fontSize = payload.styles.fontSize;
        return text;
    }

    setFontSize(pixiText, fontSize) {
        pixiText.style.fontSize = fontSize;
    }
    // center Video
    centerVideoSprite(element) {
        element.position.set(
            this.canvas.offsetWidth * 0.5,
            this.canvas.offsetHeight * 0.5
        );
    }

    // "Space for Filter"
    updateCenterBlob(){
        this.bg.width = this.app.screen.width * 0.2;
        this.bg.height = this.app.screen.height * 0.8;
    }

    centerText(text, offsetWidth, offsetHeight) {
        text.anchor.set(0.5);
        text.position.set(
            this.canvas.offsetWidth * 0.5 - offsetWidth,
            this.canvas.offsetHeight * 0.5 - offsetHeight
        );
    }


}
export default HeroA;