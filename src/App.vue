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
  <footer class=" text-center text-lg-start">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Links</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Links</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2023 Copyright:
      <a href="#">MeStesso.io</a>
    </div>
  </footer>
</template>

<style lang="scss" ></style>
