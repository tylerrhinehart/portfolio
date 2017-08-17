<template>
    <div class="skills" id="skills">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <h3>Skills</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <h3>Front-End</h3>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                            style="width: 60%">
                            <p>HTML <i class="fa fa-html5" aria-hidden="true"></i></p>
                            <span class="sr-only">60% Complete</span>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                            style="width: 50%">
                            <p>CSS <i class="fa fa-css3" aria-hidden="true"></i></p>
                            <span class="sr-only">50% Complete</span>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                            style="width: 50%">
                            <p>Javascript</p>
                            <span class="sr-only">50% Complete</span>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6">
                    <h3>Back-End</h3>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                            style="width: 50%">
                            <p>Node.js</p>
                            <span class="sr-only">50% Complete</span>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                            style="width: 50%">
                            <p>C#</p>
                            <span class="sr-only">50% Complete</span>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                            style="width: 50%">
                            <p>Language 3</p>
                            <span class="sr-only">50% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'skills',
        data() {
            return {

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .skills {
        text-align: center;
        background-color: rgba(255, 255, 255, 0.8);
        height: 100vh;
        padding-left: 5vw;
        padding-right: 5vw;
    }
</style>