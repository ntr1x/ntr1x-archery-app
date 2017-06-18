// @flow

export type RPropsData = {
  [string]: any
}

export type REventsData = {
  [string]: Function
}

export type RPortal = {|
  uniqueId: string,
  name: string,
  pages: Array<RPage>
|}

export type RPage = {
  uniqueId: string,
  name: string,
  root: RWidget,
  propsData: ?RPropsData,
  eventsData: ?REventsData,
}

export type RWidget = {
  uniqueId: string,
  container: ?RWidget,
  propsData: ?RPropsData,
  eventsData: ?REventsData,
  children: ?Array<RWidget>
}

export type RContext = {
  page: ?Object,
  portal: ?Object,
  storage: ?Object
}
