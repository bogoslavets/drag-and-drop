<template>
  <div>Album</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AlbumCard extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped></style>
