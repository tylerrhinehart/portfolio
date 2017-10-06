<template>
    <v-container grid-list-md text-xs-center id="home">
        <v-layout>
            <v-flex xs12 id="name">
                <h1>Tyler Rhinehart</h1>
                <h3>Full Stack Web Developer</h3>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    // import router from "../router"
    export default {
        data() {
            return {
                timer: false
            }
        },
        methods: {
            // changePage(event) {
            //     setTimeout(function () {
            //         this.timer = true
            //     }, 1000);
            //     if (event.deltaY > 0 && !this.timer) {
            //         router.push("Skills");
            //         this.timer = false
            //     }
            // }
        },
        mounted() {
            // var page = document.getElementById("home");
            // document.body.addEventListener("wheel", this.changePage)
            
        }
    }

</script>

<style>
    #name {
        margin-top: 25vh;
    }
    #home {
        height: 95vh;
    }
</style>