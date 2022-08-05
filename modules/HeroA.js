import video from "@/static/video/hero-video.mp4";
import Preload from "@/modules/Preload";
class HeroA {
    constructor(payload) {
        this.canvas = payload.background;
        
        this.app = new PIXI.Application({
            resizeTo: window,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            antialias: true,
        });
        
        this.canvas.appendChild(this.app.view);
        this.loaded = false;
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



        this.loaded = true;
        return this.loaded;
    }

   

   

    centerElement(element) {
        element.position.set(
            this.canvas.offsetWidth * 0.5,
            this.canvas.offsetHeight * 0.5
        );
    }


}
export default HeroA;
