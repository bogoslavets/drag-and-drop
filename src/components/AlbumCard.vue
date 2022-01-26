<template>
  <div class="flex justify-center">
    <div
      class="group w-3/4 relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
    >
      <div class="aspect-w-3 aspect-h-2">
        <img
          class="object-cover shadow-md rounded-lg max-h-64 w-full"
          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
          alt=""
        />
      </div>
      <div class="flex-1 p-4 space-y-2 flex flex-col">
        <h3 class="text-sm font-medium text-gray-900">
          <a href="#">
            <span aria-hidden="true" class=""></span>
            {{ album.id }}
          </a>
        </h3>
        <p class="text-sm text-gray-500">
          {{ album.title }}
        </p>
        <div class="grid grid-cols-3">
          <PhotoCard
            v-for="photo in photos"
            :key="photo.id"
            :photo="photo"
          ></PhotoCard>
        </div>
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
  album!: Album;

  @Prop({ default: [] })
  photos!: Photo[];
}
</script>

<style scoped></style>
