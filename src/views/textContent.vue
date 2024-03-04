<script lang="ts" setup>
import { marked } from 'marked';
import { ref, onMounted, } from 'vue'
import { defaultTheme } from '../utils/theme/default'
import type { themeObject } from '../utils/type/themeObject'
import setPreStyle from '@/utils/setPreStyle'

marked.use({
  async: true,
  pedantic: false,
  gfm: true
})

onMounted(() => {
  const preview: HTMLElement | null = document.getElementById('preview')
  preview!.style.backgroundColor = defaultTheme['preview']['background-color']
})

let editor = ref<HTMLElement | null>(null)
async function editorInput(event: InputEvent): Promise<void> {
  const preview: HTMLElement | null = document.getElementById('preview')
  preview ? editor.value ? preview.innerHTML = await marked(editor.value.innerText) : '' : ''
  setStyle(preview?.childNodes as NodeList, defaultTheme)
}

const setStyle = (nodeList: NodeList, theme: themeObject) => {
  for (const node of nodeList) {
    let nodeELement = node as HTMLElement
    for (const [themeNodeName, style] of Object.entries(theme)) {
      if (nodeELement.nodeName === themeNodeName) {
        let cssStyle: string = ''
        for (const [cssKey, cssValue] of Object.entries(style)) {
          cssStyle += `${cssKey}: ${cssValue}; `
        }
        nodeELement.style.cssText = cssStyle

        // when nodeElement === "BLOCKQUOTE" or "P"
        nodeELement.nodeName === 'BLOCKQUOTE' || nodeELement.nodeName === 'P' ? setStyle(nodeELement.childNodes, theme) : ''
      }
    }
    if (nodeELement.nodeName === "PRE") {
      setPreStyle(nodeELement)
      setStyle(nodeELement.childNodes, theme)
    }
  }
}



</script>

<template>
  <div class="textContent">
    <div class="edit">
      <!-- <textarea id="editeor" v-model="inputContent" placeholder="输入.."></textarea> -->
      <div id="editeor" contenteditable="true" @input="editorInput" ref="editor"></div>
    </div>
    <div class="preview">
      <div id="preview">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.textContent {
  width: 100%;
  height: calc(100vh - 40px);
  padding: 0 15px 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .edit,
  .preview {
    width: 49%;
    height: 100%;
    padding: 8px 5px;
  }

  .edit {
    background-color: rgb(234, 250, 255);
  }

  .preview {
    background-color: #fff;
  }

  #editeor {
    width: 100%;
    height: 100%;
    line-height: 25px;
    background-color: transparent;
    resize: none;
    padding: 5px;
    overflow-y: auto;

    &:focus {
      outline: none;
    }
  }

  #preview {
    width: 100%;
    height: 100%;
    display: inline-block;
    line-height: 25px;
    padding: 5px;
    overflow: auto;
    word-wrap: break-word;
    overflow-y: auto;

    li {
      color: red;
    }
  }
}
</style>
