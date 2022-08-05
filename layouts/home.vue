<template>
  <div class="b--wrapper-a">
    <v-preloader />
    <Nuxt />
    <v-footer/>
  </div>
</template>
<script>
import Footer from "@/components/footer/Footer.vue";
import Preloader from "@/components/preloader/Preloader.vue";

export default {
    components : {
        'v-footer' : Footer,
        'v-preloader' : Preloader,
    },
    created(){
      this.$nuxt.$on('heroLoaded', (payload) => {
        document.querySelector('.b--preloader-a').classList.add('b--preloader-a--is-hidden');
      })
    },
    methods:{
      animate(){
        this.stats.begin();
        this.stats.end();
        requestAnimationFrame( ()=> this.animate() );
      }
    },
    mounted(){
      this.stats = new this.$Stats({});
      this.stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
      document.body.appendChild( this.stats.dom );


    }  
  
}
</script>

