<template>
    <div class="headers" style="margin: 0;background-color: #138298;">
        <div id="nav" >
            <router-link
                    v-for="item in list"
                    :key="item.to"
                    :to="item.to"
                    class="mx-2">{{item.title}}
            </router-link>
            <button
                    v-if="isLoggedIn"
                    class="mx-2"
                    @click="logout">Logout</button> <!--on click create event ( open login form ) -->
            <button
                    v-else class="mx-2"
                    @click="openLogin()">Login</button> <!--on click create event ( open login form ) -->
            <button
                    class="mx-2"
                    @click="openSignUp()">Sign Up</button> <!--on click create event ( open signup form ) -->

        </div>
    </div>
</template>

<script>
    import "../../store/firebase";
    import { getAuth, signOut } from "firebase/auth";
    const auth = getAuth();
    export default {
        name:'app-header',
        data(){
            return{
                list:[
                    {title:"Home",to:"/"},
                    {title:"Blog",to:"/blog"},
                    {title:"Calendar",to:"/calendar"},
                    {title:"Slider",to:"/slider"},
                    {title:"DcHeros",to:"/dcheros"},
                    {title:"Chat",to:"/chat"},

                ]
            }
        },
        computed:{
            isLoggedIn(){
                return this.$store.state.isLoggedIn
            }
        },
        methods:{
            logout(){
                       signOut(auth);
                this.$store.commit("setIsLoggedIn",false);
                this.$store.commit("setAuthUser",{});

            },
            openLogin(){
                this.$store.commit("setIsLoginOpen",true)
            },
            openSignUp(){
                this.$store.commit("setIsSignUpOpen",true)
            }
        }

    }
</script>
<style scoped>
    button{
        color: white;
        background-color: transparent;
        border: none;
    }
</style>