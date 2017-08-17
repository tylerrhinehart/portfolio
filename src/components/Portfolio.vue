<template>
    <div class="portfolio" id="portfolio">
        <div class="row">
            <div class="col-xs-12 portfolio-title">
                <h3>Portfolio</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-3">
                <div class="portfolio-project-box">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="thumbnail">
                                <img src="http://placehold.it/150x200" alt="placeholder">
                                <div class="project-caption">
                                    <h4>Project 1</h4>
                                    <button type="button" class="btn btn-primary">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-3">
                <div class="portfolio-project-box">
                    <h4>Project 2</h4>
                    <a href="#" class="thumbnail"> 
                                        <img src="http://placehold.it/150x200" alt="placeholder">
                                    </a>
                    <div class="row">
                        <div class="col-xs-12">
                            <a class="btn btn-default" href="#" role="button">View</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-3">
                <div class="portfolio-project-box">
                    <h4>Project 3</h4>
                    <div class="row">
                        <div class="col-xs-12">
                            <a href="#" class="thumbnail">
                                        <img src="http://placehold.it/150x200" alt="placeholder">
                                    </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <a class="btn btn-default" href="#" role="button">View</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-3">
                <div class="portfolio-project-box">
                    <h4>Project 4</h4>
                    <div class="row">
                        <div class="col-xs-12">
                            <a href="#" class="thumbnail">
                                        <img src="http://placehold.it/150x200" alt="placeholder">
                                    </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <a class="btn btn-default" href="#" role="button">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'portfolio',
        data() {
            return {

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .portfolio {
        text-align: center;
        background-color: rgba(255, 255, 255, 0);
        height: 100vh;
        margin-top: 5vh;
    }

    .portfolio-project-box {
        background-color: rgba(188, 191, 196, 0.5);
        padding: 1rem;
        margin-bottom: 1vh;
        border-radius: 3%;
        display: flex;
        flex-direction: column;
    }

    .portfolio-title {
        margin-bottom: 3vh;
    }
</style>