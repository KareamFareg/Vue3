import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

export default createStore({

    state(){
        return{
            isLoggedIn:false,
            isLoginOpen:false,
            isSignUpOpen:false,
            authUser:{}
        };


    },
    plugins: [
        createPersistedState()
    ],
    mutations:{
        setIsLoggedIn(state,payload){
            state.isLoggedIn=payload
        },
        setIsLoginOpen(state,payload){
            state.isLoginOpen=payload
        },
        setIsSignUpOpen(state,payload){
            state.isSignUpOpen=payload
        },
        setAuthUser(state,payload){
            state.authUser=payload
        }

    },
     getters : {
        StateUser: state => state.authUser
    }

});
