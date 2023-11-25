<template>
    <div class="jumbotron">
        <div class="background-blur"></div>
        <div class="content">
            <h1 class="text-center">ciao</h1>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.jumbotron {
    height: 400px;
    position: relative;

    .background-blur {
        height: 100%;
        background-image: url('../assets/img/Jumbotron.png');
        background-size: 100%;
        background-repeat: no-repeat;
        filter: blur(10px) brightness(69%) saturate(420%);
        position: absolute;
        width: 100%;
        z-index: -1;
        transition: all 600ms ease-in-out;

    }

    &:hover .background-blur {
        background-size: 110%;
        background-position: center;
    }

    .content {
        position: relative;
        z-index: 1;
    }
}
</style>
  