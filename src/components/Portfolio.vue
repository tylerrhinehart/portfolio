<template>
    <v-container grid-list-md text-xs-center id="portfolio">
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-text>
                        <p class=" headline text-xs-center">Portfolio</p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-media src="../static/images/Tattoo-me.png" height="200px">
                    </v-card-media>
                    <v-card-title>
                        <div class="headline">Tattoo-Me</div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn href="//tattoo-me.herokuapp.com" flat class="orange--text">View</v-btn>
                        <v-btn href="//github.com/tylerrhinehart/tattoo-me" flat class="orange--text">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-media src="../static/images/Keepr.png" height="200px">
                    </v-card-media>
                    <v-card-title>
                        <div class="headline">Keepr</div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn href="//tyler-keepr.herokuapp.com" flat class="orange--text">View</v-btn>
                        <v-btn href="//github.com/tylerrhinehart/keepr-nodejs" flat class="orange--text">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-media src="../static/images/Kanban.png" height="200px">
                    </v-card-media>
                    <v-card-title>
                        <div class="headline">Kanban</div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn href="//tyler-austin-kanban.herokuapp.com" flat class="orange--text">View</v-btn>
                        <v-btn href="//github.com/tylerrhinehart/vue-kanban" flat class="orange--text">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-media src="../static/images/Music.png" height="200px">
                    </v-card-media>
                    <v-card-title>
                        <div class="headline">Music Finder</div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn href="//music-checkpoint.herokuapp.com" flat class="orange--text">View</v-btn>
                        <v-btn href="//github.com/tylerrhinehart/vue-music-checkpoint" flat class="orange--text">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
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
        }
    }

</script>

<style>
    #name {
        margin-top: 25vh;
    }

    #portfolio {
        /* height: 90vh; */
        padding-top: 10vh;
        padding-bottom: 5vh;
    }
</style>