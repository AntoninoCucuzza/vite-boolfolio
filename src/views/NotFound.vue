<template>
    <div class="vh-100 ">
        <h1>404 not foound</h1>

        <router-link :to="{ name: 'Home' }">back to home page</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style lang="scss" scoped></style>