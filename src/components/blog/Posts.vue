<template>
    <div class="posts">
        <h2>{{title}}</h2>
        <span class="views">{{views}}</span>
        <div class="content">
            <span class="date">{{date}}</span>
            <p>{{content}}</p>
            <span class="author">{{author}}</span>
            <span class="cat">{{uppercase(category)}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            "title",
            "date",
            "views",
            "content",
            "author",
            "category"
        ],
        name:'Posts',
        computed: {
            uppercase() {
                return (v) => {
                    return v.toUpperCase()
                }
            }
        }
    }
</script>

<style scoped>
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    .posts{
        margin-top: 10px;
        background-color: #42b983;
        padding: 10px;
        border-radius: 20px;
        box-sizing: border-box;
        justify-content: center;
        overflow: hidden;
    }
    .posts h2{
        position: relative;
        top: 0px;
        right: 270px;
        color: white;
        direction:ltr;
    }
    .views{
        position: relative;
        top: -46px;
        left: 333px;
        background-color: red;
        border-radius: 33%;
        padding: 4px;
    }
    .posts .date{
        position: relative;
        top: -33px;
        right: 300px;
        color: #d6d6d6;
    }
    .posts p{

    }
    .posts .author{
        float: left;
        margin-top: 30px;
        margin-left: 30px;
        color: black;
        padding: 10px;
        background-color: wheat;
        border-radius: 20%;
    }
    .posts .cat{
        float: right;
        margin-top: 30px;
        margin-right: 30px;
        padding: 10px;
        color: black;
        background-color: wheat;
        border-radius: 20%;
    }

</style>