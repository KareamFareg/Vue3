<template>
    <div class="flex flex-wrap w-100 position-relative overflow-hidden ">
        <div class="position-absolute w-100 " v-for="(slider, index) in sliders" :key="slider">
            <transition name="fade">
                <div
                        v-if="currentSlide == index"
                        :class="slider"
                        style="height:350px"
                ></div>
            </transition>
        </div>
        <div class="w-100" style="height:340px">
            <div class="position-absolute bottom-0 w-100 flex flex-wrap justify-center pointers">
                <div
                        v-for="(slider, index) in sliders"
                        :key="slider"
                        @click="makeActive(index)"
                        :class="currentSlide == index ? 'bg-info' : 'bg-white'"
                        style="width:20px ;height: 20px;"
                        class="m-2 y-2 mx-2 my-2 rounded-circle shadow  cursor-pointer shadow-lg"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"another-slider",
        data() {
            return {
                currentSlide: 1,
                sliders: ['bg-danger','bg-success','bg-black'],
                interval: "",
                isTitleShowing: true,
            };
        },
        methods: {
            makeActive(index) {
                this.currentSlide = index;
            },
        },
        mounted() {
            this.interval = setInterval(() => {
                this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
            }, 2000);
        },
        beforeUnmount() {
            clearInterval(this.interval);
        },
    };
</script>

<style scoped>
    .pointers{
        justify-content: center;
        display: flex;
        flex-direction: row;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: all 1s ease;
    }

    .fade-enter-from {
        opacity: 0;
        transform: translateX(-100%);
    }
    .fade-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
</style>
