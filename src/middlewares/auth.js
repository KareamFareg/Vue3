export default function (next,store) {
    if(!store.state.isLoggedIn){
        next("/");
        store.commit("setIsLoginOpen",true);
    }else {
        next();
    }
}