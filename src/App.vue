<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <router-link class="navbar-brand mr-5" style="color: #4680ff" to="/">Dashboard</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item mr-3">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item mr-3">
              <router-link class="nav-link" to="/">Orders</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Producs</router-link>
            </li>
          </ul>
        </div>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
    color: #4680ff !important;
  }
  .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
    color: #4680ff !important;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #99abb4 !important;
  }
  nav {
    box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1);
  }
</style>
