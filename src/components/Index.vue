<template>
    <SolarSystem></SolarSystem>
</template>


<script>
import SolarSystem from './SolarSystem.vue'
import store from '../vuex/store';
import { mapGetters } from 'vuex'


var resizeFunctionPointer = null

export default {
    components: {SolarSystem},
  
    created(){
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        onResize() {
            if(resizeFunctionPointer) clearTimeout(resizeFunctionPointer)
            resizeFunctionPointer = setTimeout(this.resizeHandler, 200)
        },
        resizeHandler() {
            console.log("page resized:",window.innerHeight)
            store.dispatch('windowResized', {})
        },
    },
}
</script>

<style> 
body, html {
    background: #949494;
    padding-left:20px;
}

</style>




