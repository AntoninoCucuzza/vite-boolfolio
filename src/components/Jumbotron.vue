<template>
    <div class="jumbotron d-flex align-items-center justify-content-center">
        <div class="background-blur"></div>
        <div class="content text-center container">
            <div>
                <h1 class=" mt-3">ciao sono io</h1>
                <p class="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quos earum ullam. Placeat sed
                    recusandae
                    exercitationem esse sequi incidunt assumenda voluptates vel, eaque numquam vitae, minus eveniet dolore
                    non
                    quam fugit velit eligendi nisi, quisquam architecto perspiciatis vero dolorum similique ea. Sapiente
                    corporis ipsum reprehenderit, molestiae accusantium quod ex tempora neque quos optio doloremque impedit,
                    aliquid similique quam natus placeat deserunt unde praesentium? Temporibus quos provident natus quod
                    molestias doloribus ea, deleniti architecto perspiciatis sint harum eos possimus quis distinctio facere,
                    repudiandae dolor! Fuga, accusamus esse iure odio nobis mollitia quasi rem labore porro, deleniti quis
                    voluptatibus eaque? Aliquid sunt doloremque blanditiis magnam voluptatum obcaecati laborum quasi
                    impedit,
                </p>
            </div>
            <button type="button" class="btn btn-outline-light">
                <router-link :to="{ name: 'About' }"> about</router-link>
            </button>
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
        background-position: center;
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

        .btn-outline-light {
            a {
                color: white;
            }

            &:hover a {
                color: black;
            }
        }


    }
}
</style>
  