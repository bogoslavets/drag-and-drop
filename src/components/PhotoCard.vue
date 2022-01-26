<template>
  <div>
    <div class="flex justify-center">
      <div class="relative">
        <img
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
  photo!: Photo;
}
</script>

<style scoped></style>
