<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <span>hi</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
//import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from "axios";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public albums: [] = [];
  public photos: [] = [];

  mounted(): void {
    console.log("hi");
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => (this.albums = response.data));
    console.log(this.albums);
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => (this.photos = response.data));
    console.log(this.photos);
  }
}
</script>
