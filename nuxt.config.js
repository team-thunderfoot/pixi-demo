import en from "./locales/en.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    target: 'static',
    router: {
      base: '/pixi-demo'
    },
    generate: {
        routes: ['/']
    },
    head: {
        title: "Pixi Demo",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "./favicon.png" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // '~/sass/framework/foundation/foundation.scss',
    ],
    styleResources: {
        scss: [
            "~/sass/framework/_vars/vars.scss",
            "~/sass/framework/_mixins/mixins.scss",
        ],
    },
    // loading: '~/components/preloader/Preloader.vue',
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/pixi.js", mode: "client" },
        { src: "~/plugins/jsutil.js", ssr: false },
        { src: '~/plugins/preloader.js', ssr: false },
        { src: '~/plugins/stats.js', ssr: 'client' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    // components: true,
    components: [
        // Equivalent to { path: '~/components' }
        "~/components",
        { path: "~/components/base/foundation", extensions: ["vue"] },
        { path: "~/components/base/components", extensions: ["vue"] },
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        "@nuxtjs/device",
        "nuxt-gsap-module",
    ],

    gsap: {
        extraPluggins: {
            pixi: true,
        },
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "@nuxtjs/style-resources", 
        "@nuxtjs/i18n",
        [
            "nuxt-lazy-load",
            {
              directiveOnly: true,
              loadingClass: "b--lazy-a--is-loaded",
              loadedClass: "b--lazy-a--is-loading",
            },
          ],
    ],
    i18n: {
        locales: [
            {
                code: "en",
                name: "English",
            },
            {
                code: "fr",
                name: "Français",
            },
            {
                code: "es",
                name: "Español",
            },
        ],
        defaultLocale: "en",
        vueI18n: {
            fallbackLocale: "en",
            messages: {
                en,
                fr,
                es,
            },
        },
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config) {
            config.module.rules.push({
                test: /\.frag|vert|glsl$/,
                loader: "glsl-shader-loader",
            });
        },
        vendor: ["vue-tiny-slider"],
    },
};
