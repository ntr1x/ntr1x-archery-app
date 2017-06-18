// @flow

export type SData = {
  [string]: string
}

export type SPortal = {|
  name: string,
  pages: ?Array<SPage>
|}

export type SPage = {
  name: string,
  root: SWidget,
  props: ?Array<SProp>,
  events: ?Array<SEvent>,
  propsData: ?SData,
  eventsData: ?SData,
}

export type SProp = {
  name: string,
  type: string,
  value: string,
}

export type SEvent = {
  name: string,
  value: string,
}

export type SWidget = {
  component: string,
  container: ?SWidget,
  propsData: ?SData,
  eventsData: ?SData,
  children: ?Array<SWidget>
}
