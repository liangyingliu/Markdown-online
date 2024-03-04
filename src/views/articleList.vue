<script lang="ts" setup>

</script>
<template>
    <div id="articleList">
      <div class="addArticle">
        <img src="../../public/add.svg" alt="" style="width: 22px; height: 22px;">
        <div>
          <p>新增文章</p>
        </div>
      </div>
      <div class="titleBox" v-for="item in 20">
        <div class="title">
          <p>test</p>
        </div>
        <img src="../../public/齿轮.svg" alt="" style="width: 18px; height: 18px;">
      </div>
    </div>
</template>
<style scoped lang="scss">
#articleList{
  width: 250px;
  height: 100vh;
  padding: 10px;
  margin-right: 5px;
  overflow: auto;

  &::-webkit-scrollbar{
    width: 8px;
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 4px;
    background-color: rgba($color: #000000, $alpha: .15);
  }

  .addArticle{
    width: 90%;
    height: 30px;
    padding: 0 40px;
    margin: 0 auto;
    margin-bottom: 18px;
    border-radius: 20px;
    box-shadow: 0px 5px 5px 0px rgba($color: #000000, $alpha: .1), 0px -1px 3px 0px rgba($color: #000000, $alpha: .1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;

    &:hover{
      position: relative;
      top: -1px;
      box-shadow: 0px 5px 7px 0px rgba($color: #000000, $alpha: .2), 0px -1px 2px 0px rgba($color: #000000, $alpha: .1);
    }
  }

  .titleBox{
    width: 100%;
    height: 60px;
    padding: 0 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0px 5px 5px 0px rgba($color: #000000, $alpha: .1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:hover{
      position: relative;
      top: -1px;
      box-shadow: 0px 5px 7px 0px rgba($color: #000000, $alpha: .2), 0px -1px 2px 0px rgba($color: #000000, $alpha: .1);
    }

    .title{
      width: 75%;
      overflow: hidden;
    }
  }
}
</style>
