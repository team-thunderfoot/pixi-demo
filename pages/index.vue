<template>
    <div>
        <main>
        <v-hero-a />
        </main>
    </div>
</template>

<script>
// SCL 
// Services
// ! Empty for now
// Components
import heroA from "~/components/hero/heroA.vue";
// Libraries
import transition from '@/mixins/transition.js';

export default {
    mixins: ['transition'],
    layout: 'home',
    data: () => {
        return {
        };
    },
    components: {
        "v-hero-a": heroA,
    },
    mounted() {
        if (process.client) {
            
        }
    },
};
</script>
<style lang="scss">
// include foundation
@import "@/sass/framework/foundation/foundation.scss";

// include utilities
@import "@/sass/framework/utilities/utilities.scss";

/* Components */

// block text
@import "@/sass/framework/components/block-text/b--bt-a.scss";

// brand
@import "@/sass/framework/components/brand/b--brand-a.scss";

// icon
@import "@/sass/framework/components/icon/b--icon-a.scss";

// section
@import "@/sass/framework/components/section/b--section-b.scss";

// language-selector
@import "@/sass/framework/components/language-selector/b--lang-select-a.scss";

// hero
@import "@/sass/framework/components/hero/b--hero-a.scss";

// cards
@import "@/sass/framework/components/card/b--card-a.scss";

// preloader
@import "@/sass/framework/components/preloader/b--preloader-a.scss";

// pill
@import "@/sass/framework/components/pill/b--pill-a.scss";

// header
@import "@/sass/framework/components/header/b--header-a.scss";

// footer
@import "@/sass/framework/components/footer/b--footer-a.scss";

// social
@import "@/sass/framework/components/social/b--social-a.scss";

// scroll
@import "@/sass/framework/components/scroll/b--scroll-a.scss";
</style>
