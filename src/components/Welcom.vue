<template>
    <div class="container">
        <h1>This Header For TESTING</h1>
        <p>paragraph for testing</p>
    </div>
</template>

<script>
    export default {
        name: 'WelcomVue'
    }
</script>
//scoped for make style on this template only
<style scoped lang="scss">
    $fontSize : 50px;
    .container{
        margin-top: 100px;
    }
    h1{
        font-size: $fontSize;
        color: red;
    }
</style>