<template>
  <div
    class="border rounded-md hover:border-gray-300 hover:bg-gray-200 p-2 m-1"
    draggable="true"
    @dragstart="onDrag($event, photo)"
  >
    <div class="flex justify-center">
      <div class="relative">
        <img
          draggable="false"
          class="w-20 rounded-lg h-30 media-object-image"
          :src="photo.url"
          alt="avatar"
        />
      </div>
    </div>
    <span>{{ photo.title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Photo } from "@/types/elements.types";
@Component({
  components: {},
})
export default class PhotoCard extends Vue {
  @Prop({ default: {} })
  photo: Photo;

  onDrag(event: any, photo: Photo): void {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("photoId", photo.id);
  }
}
</script>

<style scoped></style>
