<script lang="ts" setup>
import topMenu from './topMenu.vue'
import textContent from './textContent.vue'
</script>
<template>
  <div class="mainContent">
    <topMenu></topMenu>
    <textContent></textContent>
  </div>
</template>
<style lang="scss" scoped>
.mainContent{
  width: calc(100vw - 250px);
  min-width: 1130px;
  height: 100vh;
  background-color: rgb(245, 245, 245);
}
</style>
