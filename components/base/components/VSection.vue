<template>
    <section :class="createSection">
        <slot></slot>
    </section>
</template>

<script>
/**
 *  global component
 *  
 */
export default {
    name: 'VSection',
    props:{
        type: {
            type: String
        },
        customClass: {
            type: String
        }
    },
    computed: {
        createSection() {
            return [this.type ? `b--section-${this.type}` : false, this.customClass]
        }
    }
}
</script>