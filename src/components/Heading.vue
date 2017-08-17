<template>
    <div class="heading">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <h1>Tyler Rhinehart</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-4 col-xs-offset-4 dividing-line">
                    <h2>Developer</h2>
                    <!-- <h3>Miles above the rest</h3>  -->
                </div>
            </div>
            <div class="row header-buttons">
                <div class="col-xs-12 col-md-2 col-md-offset-3 header-button-spacing">
                    <a href="#skills"><button type="button" class="btn btn-defualt btn-primary">Skills</button></a>
                </div>
                <div class="col-xs-12 col-md-2 header-button-spacing">
                    <a href="#portfolio"><button type="button" class="btn btn-defualt btn-primary">Portfolio</button></a>
                </div>
                <div class="col-xs-12 col-md-2">
                    <a href="https://tylerrhinehart.github.io/resume/"><button type="button" class="btn btn-defualt btn-primary">Resume</button></a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'heading',
        data() {
            return {

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .heading {
        height: 69vh;
        text-align: center;
        margin-top: 15%;
    }

    h1 {
        font-size: 4.5rem;
    }

    .dividing-line {
        border-bottom: 2px solid black;
    }

    .header-buttons {
        margin-top: 3vh;
    }

    .header-button-spacing {
        margin-bottom: 1vh;
    }
</style>