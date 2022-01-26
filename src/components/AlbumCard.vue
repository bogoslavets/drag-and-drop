<template>
  <div
    v-if="album"
    class="flex justify-center"
    @drop="onDrop($event, album)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      class="group w-3/4 relative bg-white border border-gray-200 hover:border-gray-300 rounded-lg flex flex-col overflow-hidden"
    >
      <div class="aspect-w-3 aspect-h-2">
        <img
          draggable="false"
          class="object-cover shadow-md rounded-lg max-h-64 w-full"
          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
          alt=""
        />
      </div>
      <div class="p-4 space-y-2">
        <h3 class="text-sm font-medium text-gray-900">
          <a href="#">
            <span aria-hidden="true" class=""></span>
            {{ album.id }}
          </a>
        </h3>
        <p class="text-sm text-gray-500">
          {{ album.title }}
        </p>
        <ul
          v-if="photos"
          style="min-height: 20px"
          class="grid grid-cols-3 rounded-md bg-gray-50"
        >
          <li v-for="photo in photos" :key="photo.id" class="col-span-1">
            <PhotoCard :photo="photo"></PhotoCard>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Album, Photo } from "@/types/elements.types";
@Component({
  components: {
    PhotoCard: async () => import("./PhotoCard.vue"),
  },
})
export default class AlbumCard extends Vue {
  @Prop({ default: {} })
  album: Album;

  @Prop({
    default: () => [],
  })
  photos: Photo[];

  onDrop(event: any, album: Album): void {
    const photoId: Photo = event.dataTransfer.getData("photoId");
    this.$emit("change-album", photoId, album.id);
  }
}
</script>

<style scoped></style>
