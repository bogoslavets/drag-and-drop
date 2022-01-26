<template>
  <div>Photo</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PhotoCard extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped></style>
