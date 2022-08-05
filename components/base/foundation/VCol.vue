<template>
    <div :class="cols">
        <slot></slot>
    </div>
</template>

<script>
/**
 *  global component
 *  
 */
export default {
    name: 'VCol',
    props: {
        col : {
            type: [Number,String]
        },
        offset : {
            type: [Number,String]
        },
        order: {
            type: [Number, String]
        },
        desktop : {
            type: [Number,String]
        },
        offsetDesktop : {
            type: [Number,String]
        },
        orderDesktop: {
            type: [Number, String]
        },
        laptop : {
            type: [Number,String]
        },
        offsetLaptop : {
            type: [Number,String]
        },
        orderLaptop: {
            type: [Number, String]
        },                      
        tabletl:{
            type: [Number,String]
        },
        offsetTabletl: {
            type: [Number, String]
        },
        tabletm:{
            type: [Number,String]
        },
        offsetTabletm: {
            type: [Number, String]
        },
        orderTabletm: {
            type: [Number, String]
        }, 
        tablets:{
            type: [Number,String]
        },
        offsetTablets: {
            type: [Number, String]
        },
        orderTablets: {
            type: [Number, String]
        }, 
        mobile:{
            type: [Number,String]
        },
        offsetMobile: {
            type: [Number, String]
        },
        orderMobile: {
            type: [Number, String]
        },
        customClass: {
            type: String
        }             
    },
    computed: {
        cols() {
            return [
                this.col ? `f--col-${this.col}` : false, 
                this.offset ? `f--offset-${this.offset}` : false,
                this.order ? `f--order-${this.order}` : false,
                this.desktop ? `f--col-desktop-${this.desktop}` : false,
                this.offsetDesktop ? `f--offset-desktop-${this.offsetDesktop}` : false,
                this.orderDesktop ? `f--order-desktop-${this.orderDesktop}` : false,
                this.laptop ? `f--col-laptop-${this.laptop}` : false, 
                this.offsetLaptop ? `f--offset-laptop-${this.offsetLaptop}` : false,
                this.orderLaptop ? `f--order-laptop-${this.orderLaptop}` : false,
                this.tabletl ? `f--col-tabletl-${this.tabletl}` : false, 
                this.offsetTabletl ? `f--offset-tabletl-${this.offsetTabletl}` : false,
                this.orderTabletl ? `f--order-tabletl-${this.orderTabletl}` : false,
                this.tabletm ? `f--col-tabletm-${this.tabletm}` : false, 
                this.offsetTabletm ? `f--offset-tabletm-${this.offsetTabletm}` : false,
                this.orderTabletm ? `f--order-tabletm-${this.orderTabletm}` : false,
                this.tablets ? `f--col-tablets-${this.tablets}` : false, 
                this.offsetTablets ? `f--offset-tablets-${this.offsetTablets}` : false,
                this.orderTablets ? `f--order-tablets-${this.orderTablets}` : false,
                this.mobile ? `f--col-mobile-${this.mobile}` : false, 
                this.offsetMobile ? `f--offset-mobile-${this.offsetMobile}` : false,
                this.orderMobile ? `f--order-mobile-${this.orderMobile}` : false,
                this.customClass
            ]
        }
    }
}
</script>