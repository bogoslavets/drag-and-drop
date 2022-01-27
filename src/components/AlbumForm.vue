<template>
  <form class="mb-2 space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 sm:space-y-5">
      <div class="py-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div class="space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              for="albumId"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Album ID
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                v-model="albumId"
                type="number"
                name="albumId"
                id="albumId"
                class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="albumTitle"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Album Title
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                v-model="albumTitle"
                type="text"
                name="albumTitle"
                id="albumTitle"
                class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="cover-photo"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Photos
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div
                class="flex justify-center max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="w-12 h-12 mx-auto text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple="multiple"
                        @change="previewImage"
                        class="form-control-file"
                        id="file-upload"
                        name="file-upload"
                      />
                    </label>
                  </div>

                  <p class="pl-1">or drag and drop</p>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  <template v-if="previewList.length">
                    <div v-for="(item, index) in previewList" :key="index">
                      <img :src="item" alt="" class="img-fluid" />
                      <p class="mb-0">file name: {{ imageList[index].name }}</p>
                      <p>size: {{ imageList[index].size / 1024 }}KB</p>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      id="addAlbum"
      @click="addAlbum"
      type="submit"
      class="inline-flex justify-center w-full col-span-2 p-2 mt-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-span-1 sm:col-start-1 sm:text-sm"
    >
      Save
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Album, Photo } from "@/types/elements.types";

@Component({
  components: {
    PhotoCard: async () => import("./PhotoCard.vue"),
  },
})
export default class AlbumForm extends Vue {
  public albumId = 1;
  public albumTitle = "";
  public userId = 1;

  public previewList: any[] = [];
  public imageList: any[] = [];

  public newPhotos: Photo[] = [];

  previewImage(event: any) {
    var input = event.target;
    console.log(input.files);
    var count = input.files.length;
    var index = 0;
    if (input.files) {
      while (count--) {
        var reader = new FileReader();
        reader.onload = (e) => {
          if (e.target)
            try {
              const obj = e.target; //e.target.result;
              this.previewList.push(e.target.result);
              console.log(obj);
              //this.previewList.push(obj);
            } catch (e) {
              console.log(e);
            }
        };
        this.imageList.push(input.files[index]);
        reader.readAsDataURL(input.files[index]);
        index++;
      }
    }
  }

  async addAlbum(): Promise<void> {
    const newAlbum: Album = {
      id: this.albumId,
      title: this.albumTitle,
      userId: this.userId,
    };
    this.$emit("save-album", newAlbum, this.newPhotos);
  }
}
</script>

<style scoped></style>
