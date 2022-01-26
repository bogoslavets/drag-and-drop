<template>
  <section
    aria-labelledby="album-heading"
    class="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
  >
    <h2 id="album-heading" class="sr-only">Albums</h2>

    <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3 p-4">
      <div v-for="album in albums" :key="album.id" class="col-span-1">
        <AlbumCard
          :album="album"
          :photos="getAlbumItems2(album.id)"
        ></AlbumCard>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from "axios";
import { Album, Photo } from "@/types/elements.types";
@Component({
  components: {
    AlbumCard: async () => import("../components/AlbumCard.vue"),
  },
})
export default class Home extends Vue {
  public albums: Album[] = [];
  public photos: Photo[] = [];

  mounted(): void {
    console.log("hi");
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => (this.albums = response.data.slice(0, 3)));
    console.log(this.albums);
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => (this.photos = response.data));
    console.log(this.photos);
  }

  getAlbumItems(albumId: number): Photo[] {
    console.log(albumId);
    if (this.albums.length > 0 && this.photos.length > 0) {
      const photos = this.photos.filter((photo) => {
        albumId == photo.albumId;
      });
      console.log("photos");
      console.log(photos);
      return photos;
    } else return [];
  }

  getAlbumItems2(albumId: number): Photo[] {
    const result: Photo[] = [];
    if (this.albums.length > 0 && this.photos.length > 0) {
      this.photos.forEach((photo) => {
        if (photo.albumId === albumId) {
          result.push(photo);
        }
      });
    }
    return result.splice(0, 6);
  }
}
</script>
