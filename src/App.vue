<script setup lang="ts">
import articleList from './views/articleList.vue';
import mainContent from './views/mainContent.vue';

</script>

<template>
  <div class="page">
    <articleList/>
    <mainContent/>
  </div>
</template>

<style lang="scss">
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.page{
  width: 100vw;
  min-width: 1400px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
