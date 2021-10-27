<template>
    <div class="m-auto container" style="width: 600px">
        <div class="text-center"  style="width: 600px">
        <h2 class="text-2xl text-center" style="margin-bottom: 50px;color: #42b983"> My Calendar</h2>
        <section class="mx-2 flex-container ">
            <h4 style="font-weight: bold;margin-right: 390px;">{{currentMonthName}}</h4>
            <h4 class="mx-2" style="font-weight: bold;float: right">{{currentYear}}</h4>
        </section>
        <section class="flex-container my-2">
            <p class="text-center" style="width: 14.28%;font-weight: bold" v-for="day in days" :key="day">
                {{day}}
            </p>
        </section>
        <section class="flex-container flex-wrap " style="flex: content">
            <p class="text-center" style="width: 14.28%" v-for="num in startDay()" :key="num">
            </p>
            <p class="text-center" style="width: 14.28%" v-for="num in daysinMonth(currentYear,currentMonth)" :key="num">
              <span v-if="currentDayClass(num)" style="font-weight: bold;color: white;background-color: red;padding: 4px;border-radius: 50%">{{num}}</span>
                <span v-else>{{num}}</span>
            </p>
        </section>
        <section class="flex justify-between my-2">
            <button class="prev" @click="prevMonth()">Prev</button>
            <button class="next" @click="nextMonth()">Next</button>
        </section>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Calendar",
        data () {
            return{
                currentMonth: new Date().getMonth(),
                currentYear: new Date().getFullYear(),
                days:["Sun","Mon",'Tus','Wen','Thr','Fri','Sut'],
                currentDay:String( new Date().getDate()).padStart(2, '0'),

        }
        },
        methods:{
            daysinMonth(year,month){
                return new Date(year,month+1,0).getDate();
            },
            startDay(){
                return new Date(this.currentYear,this.currentMonth,1).getDay();
            },
            prevMonth(){
                if(this.currentMonth == 0){
                    this.currentMonth = 11
                    this.currentYear--
                }else {
                    this.currentMonth--
                }
            },
            nextMonth(){
                if(this.currentMonth == 11) {
                    this.currentMonth = 0
                    this.currentYear++
                }else {
                    this.currentMonth++
                }
            },
            currentDayClass(num){
               const currentDaay = new Date(this.currentYear,this.currentMonth,num).toDateString();
               const calendarDay =  new Date().toDateString();
               return currentDaay == calendarDay;

            }
        },
        computed:{
            currentMonthName(){
               return  new Date(this.currentYear,this.currentMonth).toLocaleDateString('default',{month:"long"});
            },
        }
    }
</script>

<style scoped>
    .flex-container{
        display: flex;
        flex-direction: row;
    }
     .prev{
        float: left;
        padding: 10px;
        background-color: #42b983;
        color: white;
        border-radius: 20%;
    }
    .next{
        float: right;
        padding: 10px;
        background-color: #42b983;
        color: white;
        border-radius: 20%;
    }
</style>