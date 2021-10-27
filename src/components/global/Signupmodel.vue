<template>
    <div v-if="isSignUpOpen">
        <section
                @click="close"
                class="bg-black position-fixed w-100 h-100 top-0  opacity-50" >
        </section>
        <div class="position-absolute inset-0" style="left: 440px;top: 150px">
            <div class="flex h-100">
                <div class="z-30 m-auto bg-white p-2 rounded shadow w-10/12 md:w-1/3">
                    <div class="p-2 border">
                        <h1 class="text-2xl text-center">
                            Sign Up
                        </h1>
                        <form class="p-2 my-2"
                              @submit.prevent="signup"
                        >

                            <div class="my-4">
                                <label class="float-md-start my-2">Email </label>
                                <input
                                        v-model="email"
                                        class="rounded shadow p-2 w-100 border-light border-top-0"
                                        placeholder="Enter your email "
                                        autocomplete="false"
                                />
                            </div>
                            <div class="my-4">
                                <label class="float-md-start my-2">Password</label>
                                <input
                                        v-model="password"
                                        class="rounded shadow p-2 w-100 border-light border-top-0"
                                        type="password"
                                        placeholder="*********"
                                        autocomplete="false"
                                />
                            </div>
                            <div class="my-4">
                                <button
                                        type="submit"
                                        class="w-100 p-2 bg-primary"
                                >
                                    <span>Join</span>
                                </button>
                            </div>
                        </form>
                        <div>
                            <p class="text-center">Or</p>
                            <google-login @close-login-from-google="close"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "../../store/firebase";
    import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
    import GoogleLogin from "../Login/GoogleLogin";

     const auth = getAuth();
    export default {
        components: {GoogleLogin},
        computed: {
            isSignUpOpen() {
                return this.$store.state.isSignUpOpen;
            },
        },
        data() {
            return {
                email: "",
                password: "",
                isLoading:false,
            };
        },
        // mounted() {
        //     this.$refs.emailRef.focus();
        // },
        methods: {
            signup() {
                createUserWithEmailAndPassword(auth , this.email, this.password)
                    .then(()=> {
                        // Signed in
                        this.email = "";
                        this.password = "";
                        this.isLoading = false;
                        this.close();
                    })
                    .catch((e) => {
                        console.log(e);
                        this.isLoading = false;
                    });
             },

            close(){
                this.$store.commit("setIsSignUpOpen",false)
            }
        },
    };
</script>

<style></style>
