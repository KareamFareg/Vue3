<template>
  <section class="mt-5 text-center">
    <button class="border px-2 rounded" @click="loginWithGoogle">
      Login With Google
    </button>
  </section>
</template>

<script>
import  "../../store/firebase";
import { getAuth,signInWithPopup, GoogleAuthProvider} from "firebase/auth";

// var provider = new GoogleAuthProvider();
const auth = getAuth();
export default {
  name:"google-login",
  methods: {
    loginWithGoogle(){
      let  provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
              .then(() => {
                this.$emit("close-login-from-google");
              })
    },

  },
};
</script>

<style></style>
