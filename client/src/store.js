import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {menuchoice:0,type:""}
const mutations = {
    redirect (state,choice) {
        // mutate state
        state.menuchoice=choice
        //console.log(choice);

              },

    changeType(state,userType){
        state.type=userType
        console.log(userType);
    }          
}

export default new Vuex.Store({
    state,
    mutations
    //type,setType
})