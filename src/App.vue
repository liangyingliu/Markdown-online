<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, watch, type VNodeRef } from 'vue'
import { marked } from 'marked';

marked.use({
  async: true,
  pedantic: false,
  gfm: true
})

let inputContent = ref<string>('')

watch(inputContent, async (): Promise<void> => {
  const showContent: HTMLElement | null = document.getElementById('showContent'),
   nodeResult: Promise<string> | string = await marked.parse(inputContent.value)
  console.log(nodeResult)
  showContent? showContent.innerHTML = nodeResult : ''
})


</script>

<template>
  <div class="page">
    <div class="articleList">
      <div class="titleBox" v-for="item in 10">
        <div class="title">
          <p>test</p>
        </div>
        <img src="../public/齿轮.svg" alt="" style="width: 18px; height: 18px;">
      </div>
      <div class="addArticle">
        <img src="../public/add.svg" alt="" style="width: 22px; height: 22px;">
        <div>
          <p>新增文章</p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="header"></div>
      <div class="content">
        <div class="editor" style="background-color: azure;">
          <textarea id="editor" cols="30" v-model="inputContent" placeholder="输入"></textarea>
        </div>
        <div class="preview" style="background-color: white;">
          <div id="showContent">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <RouterView /> -->
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.page {
  width: 100vw;
  min-width: 1500px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.articleList {
  min-width: 180px;
  width: 250px;
  height: 100%;
  padding: 10px 10px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.articleList::-webkit-scrollbar {
  width: 8px;
  background-color: rgb(255, 255, 255);
  border-left: 1px solid rgb(203, 203, 203);
  border-right: 1px solid rgb(203, 203, 203);
}

.articleList::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgb(203, 203, 203);
}

.titleBox {
  width: 100%;
  height: 60px;
  padding: 0 15px 0 10px;
  border-radius: 10px;
  box-shadow: 0 6px 6px 0px rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 255, 255);
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.titleBox:hover {
  position: relative;
  top: -1px;
  box-shadow: 0 8px 6px 0px rgba(0, 0, 0, 0.2);
}

.title {
  width: 85%;
}

.title p {
  font-size: 18px;
  color: #333;
}

.addArticle {
  width: 90%;
  height: 40px;
  margin: 0 auto;
  padding: 0 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 8px 6px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
}

.addArticle:hover {
  box-shadow: 0 8px 6px 0px rgba(0, 0, 0, 0.2);
}

.addArticle div {
  width: 65px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #333;
}

.addArticle div p {
  font-size: 16px;
  color: #666;
}

.main {
  width: calc(100vw - 250px);
  min-width: 1250px;
  height: 100%;
}

.header {
  width: 100%;
  height: 35px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 5;
  background-color: white;
}

.content {
  width: 100%;
  height: calc(100vh - 35px);
  padding: 0px 15px 8px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.editor,
.preview {
  width: 49.4%;
  height: 100%;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 8px 6px 0px rgba(0, 0, 0, 0.1);
  /* overflow-y: scroll;
  overflow-x: hidden; */
}

.editor::-webkit-scrollbar,
.preview::-webkit-scrollbar {
  width: 8px;
  border-radius: 4px;
}

.editor::-webkit-scrollbar-thumb,
.preview::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgb(203, 203, 203);
}

#editor {
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: transparent;
  font-size: 18px;
  color: #333;
  resize: none;
  outline: none;
}

#editor:focus {
  outline: none;
}

#showContent {
  width: 100%;
  height: 100%;
  padding: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  font-size: 16px;
}

#showContent::-webkit-scrollbar {
  width: 8px;
}

#showContent::-webkit-scrollbar-thumb {
  background-color: rgb(203, 203, 203);
}
</style>
