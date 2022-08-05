export default function Preload(asset) {
    return new Promise(function(resolve, reject){
        var vElement = document.createElement('video');
        vElement.autoplay = true;
        vElement.muted = true;
        vElement.loop = true;
        vElement.playsinline = true;
        vElement.playsInline = true;
        vElement.src = asset;
        vElement.controls = true;
        vElement.name = asset;
        vElement.className="b--hero-a__video"; 
        vElement.id="HeroVideo"
        vElement.load();
        document.body.append(vElement);

        vElement.addEventListener('canplaythrough', function(){
            console.log(asset);
            resolve(vElement);
            
        });

        vElement.addEventListener('error', function(){
            reject(vElement);
        });

    })
}

