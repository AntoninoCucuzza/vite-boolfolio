<script >

export default {
    name: "App",
    components: {
    },

    data() {
        return {

        }
    },



}

</script>

<template>
    <header>
        <nav class="nav justify-content-center ">
            <router-link class="nav-link" to="/about">About</router-link>

            <router-link class="nav-link" to="/Projects">Projects</router-link>

            <router-link class="nav-link active" to="/" aria-current="page">Home <span
                    class="visually-hidden">(current)</span></router-link>

            <router-link class="nav-link" to="/contacts">Contacts</router-link>

        </nav>
    </header>
    <main>
        <router-view></router-view>

    </main>
    <footer>
        <h1>footer</h1>
    </footer>
</template>

<style lang="scss" >
body {
    background-color: #0F0F0F;

}
</style>
