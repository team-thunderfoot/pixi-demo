<template>
    <div class="f--container" :class="createContainer">
        <slot></slot>
    </div>
</template>

<script>
/**
 *  global component
 *  
 */
export default {
    name: 'VContainer',
    props:{
        fluid : {
            type: Boolean
        },
        customClass: {
            type: String
        }
    },
    computed: {
        createContainer() {
            return [{ 'f--container--fluid': this.fluid }, this.customClass]
        }
    }
}
</script>