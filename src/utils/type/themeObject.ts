export interface themeObject {
  preview: Preview
  IMG: Img
  UL: Ul
  OL: Ol
  BLOCKQUOTE: Blockquote
  P: P
  PRE: Pre
  CODE: Code
}

export interface Preview {
  "background-color": string
}

export interface Img {
  width: string
  margin: string
}

export interface Ul {
  "list-style-position": string
}

export interface Ol {
  "list-style-position": string
}

export interface Blockquote {
  background: string
  "padding-left": string
  "margin-bottom": string
}

export interface P {
  width: string
}

export interface Pre {
  width: string
  "border-radius": string
  "box-shadow": string
  display: string
  "align-items": string
  "padding-left": string
  "margin": string
  position: string
}

export interface Code {
  "margin-top": string
  width: string
  "overflow-x": string
}


export interface dotStyleCtx {
  width: string
  height: string
  "border-radius": string
  "margin-right": string
}

export interface fristTierStyleCtx {
  height: string;
  width: string;
  'background-color': string;
  'border-top-left-radius': string;
  'border-top-right-radius': string;
  position: string;
  top: number;
  left: number;
  'overflow-x': string;
  'padding-left': string;
  display: string;
  'flex-direction': string;
  'justify-content': string;
  'align-items': string;
  "box-shadow": string
}
