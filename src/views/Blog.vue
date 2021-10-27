<template>
    <div class="our-blog">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="blog-posts">
                      <Posts
                              v-for="post in posts"
                              :key="post.id"
                              :title="post.title"
                              :views="post.views"
                              :date="post.date"
                              :author="post.author"
                              :category="post.category"
                              :content="post.content"
                      /> //must have key to loop through it like id
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="blog-sidebar">
                       <Sidebar/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Posts from "../components/blog/Posts.vue";
    import JsonPosts from "../json/blog_posts";
    export default {
        name:'blog',
        data:function () {
            return {
                pageName:'Blog',
                pageHeader:'This Blog Page',
                posts:JsonPosts
            };
        },
        components:{
            Posts,
        }

    };
</script>
