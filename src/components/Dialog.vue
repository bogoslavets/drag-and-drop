<template>
  <div
    class="fixed inset-0 z-10 overflow-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        aria-hidden="true"
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="inline-block overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:my-6 sm:align-middle sm:max-w-xl sm:w-full sm:p-6"
      >
        <div>
          <div class="mt-3 text-center">
            <h3
              class="text-lg font-medium leading-6 text-gray-900"
              id="modal-title"
            >
              {{ title }}
            </h3>
            <div class="px-2 mt-2">
              <slot name="content"></slot>
              <button
                @click="$emit('close-dialog')"
                type="button"
                class="inline-flex justify-center w-full col-span-2 p-2 mt-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-span-1 sm:col-start-1 sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Dialog extends Vue {
  @Prop({ default: "" })
  title: string;
}
</script>

<style scoped></style>
