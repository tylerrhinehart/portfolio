<template>
    <v-container grid-list-md text-xs-center id="skills">
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-text>
                        <p class=" headline text-xs-center">Skills</p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-title>
                        <div class="headline text-xs-center">FrontEnd</div>
                    </v-card-title>
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs6>
                                <p><i class="icon-javascript fa-5x" aria-hidden="true"></i></p>
                            </v-flex>
                            <v-flex xs6>
                                <v-progress-circular v-bind:size="100" v-bind:width="15" v-bind:rotate="360" v-bind:value="90" class="primary--text">
                                    90
                                </v-progress-circular>
                            </v-flex>
                            <v-flex xs6>
                                <p><i class="icon-html5-alt fa-5x" aria-hidden="true"></i></p>
                            </v-flex>
                            <v-flex xs6>
                                <v-progress-circular v-bind:size="100" v-bind:width="15" v-bind:rotate="360" v-bind:value="90" class="primary--text">
                                    90
                                </v-progress-circular>
                            </v-flex>
                            <v-flex xs6>
                                <p><i class="icon-css3-alt fa-5x" aria-hidden="true"></i></p>
                            </v-flex>
                            <v-flex xs6>
                                <v-progress-circular v-bind:size="100" v-bind:width="15" v-bind:rotate="360" v-bind:value="60" class="primary--text">
                                    60
                                </v-progress-circular>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-title>
                        <div class="headline">BackEnd</div>
                    </v-card-title>
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs6>
                                <p><i class="icon-nodejs fa-5x"></i></p>
                            </v-flex>
                            <v-flex xs6>
                                <v-progress-circular v-bind:size="100" v-bind:width="15" v-bind:rotate="360" v-bind:value="90" class="primary--text">
                                    90
                                </v-progress-circular>
                            </v-flex>
                            <v-flex xs6>
                                <p><i class="icon-csharp fa-5x"></i></p>
                            </v-flex>
                            <v-flex xs6>
                                <v-progress-circular v-bind:size="100" v-bind:width="15" v-bind:rotate="360" v-bind:value="60" class="primary--text">
                                    60
                                </v-progress-circular>
                            </v-flex>
                            <v-flex xs6>
                                <h4>.NET</h4>
                                <h4>Core</h4>
                            </v-flex>
                            <v-flex xs6>
                                <v-progress-circular v-bind:size="100" v-bind:width="15" v-bind:rotate="360" v-bind:value="60" class="primary--text">
                                    60
                                </v-progress-circular>
                            </v-flex>
                        </v-layout>
                    </v-container>
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

    #skills {
        /* min-height: 100vh; */
        padding-top: 10vh;
        padding-bottom: 15vh;
    }
</style>