import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function getWindowSize() {
    return {
        height: window.innerHeight,
        width: window.innerWidth,
        resized: null,
    }
}

const state = {
    windowSize: getWindowSize()
}

const getters = {
    windowSize(state) {
        return state.windowSize
    },
}

const actions = {
    windowResized({commit},payload) {
        commit("WINDOW_RESIZED",payload)
    },
}

const mutations = {
    WINDOW_RESIZED(state, payload) {
        let widthOrHeight = null
        if(state.windowSize.width != window.innerWidth && state.windowSize.height != window.innerHeight)
            widthOrHeight = 'both'
        else if(state.windowSize.width != window.innerWidth)
            widthOrHeight = 'width'
        else if(state.windowSize.height != window.innerHeight)
            widthOrHeight = 'height'
        state.windowSize = Object.assign(getWindowSize(),{ resized: widthOrHeight })
    },
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});