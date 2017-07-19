import uniqid from 'uniqid'

export const dropAreas = (editor, element) => {

  if (!element) {
    return []
  }

  const stack = []
  while (element.parentElement != null) {
    if (element.__area__) {
      stack.push([element, element.__area__.drop])
    }
    element = element.parentElement
  }

  const clip = editor.getBoundingClientRect()
  const bounds = { top: clip.top, right: clip.right, bottom: clip.bottom, left: clip.left }

  return stack.map(([element, mode]) => {
    const rect = element.getBoundingClientRect()
    const children = []
    if (element.children) {
      for (let i = 0; i < element.children.length; i++) {
        const child = element.children[i].getBoundingClientRect()
        children.push({
          top: child.top,
          right: child.right,
          bottom: child.bottom,
          left: child.left
        })
      }
    }
    return {
      id: uniqid(),
      mode,
      bounds,
      area: { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left },
      children
    }
  })
}

export const selectedEntries = (editor, widget) => {

  if (!widget) {
    return []
  }

  const clip = editor.getBoundingClientRect()
  const bounds = { top: clip.top, right: clip.right, bottom: clip.bottom, left: clip.left }

  const elements = [...document.querySelectorAll(`[data-widget-id="${widget.id}"]`)]
  return elements.map((element, index) => {
    const rect = element.getBoundingClientRect()
    return {
      id: uniqid(),
      index,
      title: widget.title || widget.name,
      area: { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left },
      bounds
    }
  })
}
