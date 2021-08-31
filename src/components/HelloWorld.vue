<template>
  <div class="hello">
    <div class="jumbotron">
      <h1>Hallo Selamat Datang Disitus Webku</h1>
      <p>Perkenalkan saya Muhamad Rifki Maulana. Ini adalah website experiment saya, disini kamu akan melihat experiment yang saya buat. Selain itu pada situs web ini ada berbagai banyak pilihan Video Drakor, Film Movies, Video Anime, Podcast yang menginspirasi, Musik dan masih banyak lagi. Kamu perlu terhubung ke facebook untuk bisa melanjutkan!.</p>
      <div class="form-group mt-4 mb-0" style="margin-left: 50%;">
        <i class="fa fa-youtube-square" style="font-size: 2rem; margin-right: 15px;"></i>
        <i class="fa fa-forward" style="font-size: 2rem; margin-right: 15px;"></i>
        <i class="fa fa-headphones" style="font-size: 2rem; margin-right: 15px;"></i>
        <i class="fa fa-image" style="font-size: 2rem;"></i>
      </div>
    </div>
    <div class="card">
      <div class="form-group">
        <h3>Login</h3>
      </div>
      <div class="form-group">
        <router-link to="/login.facebook.com">        
          <button class="btn btn-primary">Login Facebook</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
