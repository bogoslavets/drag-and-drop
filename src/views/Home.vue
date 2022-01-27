<template>
  <div>
    <div class="mt-20">
      <button
        @click="showDialog = !showDialog"
        type="button"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Album
      </button>
    </div>
    <div class="grid grid-cols-1 gap-2 p-4 mt-10 sm:grid-cols-2 xl:grid-cols-3">
      <div v-for="album in albums" :key="album.id" class="col-span-1">
        <AlbumCard
          :album="album"
          :photos="getAlbumItems(album.id)"
          @change-album="changeAlbum"
        >
        </AlbumCard>
      </div>
    </div>
    <Dialog
      title="New Album"
      v-if="showDialog"
      @close-dialog="showDialog = !showDialog"
    >
      <template v-slot:content>
        <AlbumForm @save-album="saveAlbum"></AlbumForm>
      </template>
    </Dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { Album, Photo } from "@/types/elements.types";
@Component({
  components: {
    AlbumCard: async () => import("../components/AlbumCard.vue"),
    AlbumForm: async () => import("../components/AlbumForm.vue"),
    Dialog: async () => import("../components/Dialog.vue"),
  },
})
export default class Home extends Vue {
  public albums: Album[] = [];
  public photos: Photo[] = [];

  public showDialog = false;

  mounted(): void {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => (this.albums = response.data.slice(0, 3)));
    let allPhotos: Photo[] = [];
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(
        (response) => (
          (allPhotos = response.data),
          this.photos.push(
            allPhotos[0],
            allPhotos[1],
            allPhotos[2],
            allPhotos[49],
            allPhotos[50],
            allPhotos[51],
            allPhotos[99],
            allPhotos[100],
            allPhotos[101]
          )
        )
      );
  }

  /*getAlbumItems(albumId: number): Photo[] {
    if (this.albums.length > 0 && this.photos.length > 0) {
      const photos = this.photos.filter((photo) => {
        albumId == photo.albumId;
      });
      return photos; //undefined | []
    } else return [];
  }*/

  getAlbumItems(albumId: number): Photo[] {
    const result: Photo[] = [];
    if (this.albums.length > 0 && this.photos.length > 0) {
      this.photos.forEach((photo) => {
        if (photo.albumId === albumId) {
          result.push(photo);
        }
      });
    }
    return result;
  }

  async changeAlbum(photoId: number, albumId: number): Promise<void> {
    this.photos.forEach((photo) => {
      if (photo.id == photoId) {
        photo.albumId = albumId;
      }
    });

    /*
    const target = this.photos.find((photo) => {
      photo.id === photoId;
    });
    if (target) target.albumId = albumId;
    */
  }

  async saveAlbum(newAlbum: Album, photos: Photo[]): Promise<void> {
    this.showDialog = false;
  }
}
</script>
