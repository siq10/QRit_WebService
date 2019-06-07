import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
    menuchoice:0,
    bearer_token:"",
    current_user:{},
    qr:{}
    }
const getters= {
    getCurrentUser: state => {
        return state.current_user;
    },
}

const mutations = {
    redirect (state,choice) {
        // mutate state
        state.menuchoice=choice
        //console.log(choice);
      },
    setToken (state,token)
    {
        if(token!="")
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
        else
            delete axios.defaults.headers.common["Authorization"]
    },
    setUser (state,user)
    {
        state.current_user = user
    },
    setQr(state,qr)
    {
        state.qr = qr
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations
})

