import type { dotStyleCtx, fristTierStyleCtx } from '../utils/type/themeObject'
const createPre = (target: HTMLElement) => {
  setFristTierStyle(target)
}

const setFristTierStyle = (target:HTMLElement) => {
  const fristTierStyle:fristTierStyleCtx = {
    "height": "25px",
    "width": "100%",
    "background-color": "#e9faff",
    "border-top-left-radius": "5px",
    "border-top-right-radius": "5px",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "overflow-x": "auto",
    "padding-left": "15px",
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "flex-start",
    "align-items": "center",
    "box-shadow": "0 -2px 3px 0 rgba(0, 0, 0, .1)",
  }
  const fristTier: HTMLElement = document.createElement('div')
  let fristTierAllStyle:string = ''
  for(const [fristTierKey, fristTierValue] of Object.entries(fristTierStyle)){
    fristTierAllStyle += `${fristTierKey}: ${fristTierValue};`
  }
  fristTier.style.cssText = fristTierAllStyle
  setDotStyle(fristTier)
  target.appendChild(fristTier)
}

const setDotStyle = (target:HTMLElement) => {
  const dotColor: string[] = ['#ff6058', '#ffbc35', '#00c844']
  const dotStyle: dotStyleCtx = {
    "width": "10px",
    "height": "10px",
    "border-radius": "5px",
    "margin-right": "8px",
  }
  for (const color of dotColor) {
    let dotAllStyle: string = ''
    const secondTier: HTMLElement = document.createElement('div')
    for (const [dotKey, dotValue] of Object.entries(dotStyle)) {
      dotAllStyle += `${dotKey}: ${dotValue};`
    }
    dotAllStyle += `background-color: ${color}`
    secondTier.style.cssText = dotAllStyle
    target.appendChild(secondTier)
  }
}

export default createPre
