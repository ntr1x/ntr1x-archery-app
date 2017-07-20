import uniqid from 'uniqid'

export const clipBounds = (editor, content) => {
  const rect1 = editor && editor.getBoundingClientRect() || null
  const rect2 = content && content.getBoundingClientRect() || null
  return {
    top: Math.max(rect1.top + 20, rect2.top),
    left: Math.max(rect1.left + 20, rect2.left),
    bottom: Math.min(rect1.bottom - 20, rect2.bottom),
    right: Math.min(rect1.right - 20, rect2.right)
  }
}

export const dropAreas = (element) => {

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
      area: { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left },
      children
    }
  })
}

export const selectedEntries = (widget) => {

  if (!widget) {
    return []
  }

  const elements = [...document.querySelectorAll(`[data-component-id="${widget.componentId}"]`)]
  return elements.map((element, index) => {
    const rect = element.getBoundingClientRect()
    return {
      id: uniqid(),
      index,
      title: widget.title || widget.name,
      area: { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left }
    }
  })
}
