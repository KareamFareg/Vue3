<template>
  <AppHeader />
  <div class="w-100 flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModel/>
    <SignupModel />
  </teleport>
</template>

<script>
  import AppHeader from "./components/global/AppHeader.vue";
  import LoginModel from "./components/global/Loginmodel";
  import "./store/firebase";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import SignupModel from "./components/global/Signupmodel";
  const auth = getAuth();
  export default {
    name:'app',

    mounted(){
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.$store.commit("setIsLoggedIn",true);
          this.$store.commit("setIsLoginOpen",false);
          this.$store.commit("setAuthUser",user);
        } else {
            this.$store.commit("setIsLoggedIn",false);
            this.$store.commit("setAuthUser",{});
        }
      });
    },
    components: {
        SignupModel,
        LoginModel,
        AppHeader
    }

  }
</script>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
