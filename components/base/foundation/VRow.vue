<template>
    <div class="f--row" :class="createRow">
        <slot></slot>
    </div>
</template>

<script>
/**
 *  global component
 *  
 */
export default {
    name: 'VRow',
    props:{
        removeGutter : {
            type: [Boolean],
        },
        customClass: {
            type: String
        }
    },
    computed: {
        createRow() {
            return [{'f--row--remove-gutter': this.removeGutter}, this.customClass]
        }
    }
}
</script>
