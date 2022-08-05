<template>
    <div class="b--hero-a" ref="component">
        <div class="b--hero-a__bg-items" ref="background"></div>
        <div class="b--hero-a__ft-items">
            <v-container>
                <v-row class="display--felx justify-content--center">
                    <v-col col="6" tablets="12">
                        <h1
                            ref="title"
                            class="b--hero-a__ft-items__title"
                        >hero title</h1>
                    </v-col>
                </v-row>
                <v-row class="display--felx justify-content--center">
                    <v-col col="10" tablets="12">
                        <h2
                            class="b--hero-a__ft-items__subtitle"
                            ref="subtitle"
                        >
                            hero subtitle
                        </h2>
                        <div class="b--scroll-a">
                            <div class="b--scroll-a__title">Scroll</div>
                            <div class="b--scroll-a__artwork">
                                <svg viewBox="0 0 20 20">
                                    <path
                                        d="M10.3,0.8c-3.1,0-5.6,2.6-5.5,5.7l0.1,7.8c0,3.1,2.6,5.6,5.7,5.5s5.6-2.6,5.5-5.7L16,6.3C16,3.2,13.4,0.8,10.3,0.8z
											M14.9,14.2c0,2.5-1.9,4.5-4.4,4.5s-4.5-1.9-4.5-4.4L6,6.4C5.9,4,7.9,2,10.4,1.9c2.5,0,4.5,1.9,4.5,4.4L14.9,14.2z"
                                    ></path>
                                    <path
                                        class="b--scroll-a__artwork__item"
                                        d="M10.5,5.7c-0.3,0-0.6,0.3-0.6,0.6v2.6c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6V6.3C11,6,10.8,5.7,10.5,5.7z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
import HeroA from "@/modules/HeroA";
export default {
    async mounted() {
        if (process.client) {
            if(this.$store.state.enableWebglHero){
                var config = {
                    component: this.$refs.component,
                    background: this.$refs.background,
                    title: this.$refs.title,
                    subtitle: this.$refs.subtitle,
                };
                var heroA = new HeroA(config);
                if(heroA.init()){
                    this.$nuxt.$emit('heroLoaded');
                }
            }
        }
    },
};
</script>
