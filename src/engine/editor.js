import uniqid from 'uniqid'

// export const distance({ x, y }, )

export const outerBounds = (editor) => {
  const rect = editor.getBoundingClientRect()
  return {
    top: rect.top,
    left: rect.left,
    bottom: rect.bottom,
    right: rect.right
  }
}

export const innerBounds = (editor, content) => {
  const rect1 = editor.getBoundingClientRect()
  const rect2 = content.getBoundingClientRect()
  return {
    top: Math.max(rect1.top + 20, rect2.top),
    left: Math.max(rect1.left + 20, rect2.left),
    bottom: Math.min(rect1.bottom - 20, rect2.bottom),
    right: Math.min(rect1.right - 20, rect2.right)
  }
}

export const closestPositions = (positions, cursor) => {

  let v = { p: null, d: 0 }
  let h = { p: null, d: 0 }

  if (cursor) {
    let d

    for (let p of positions) {
      switch (p.type) {
        case 'top':
        case 'bottom':
          d = Math.abs(cursor.y - p.top)
          h = (h.p !== null)
            ? (h.d < d ? h : { p, d })
            : { p, d }
          break
        case 'left':
        case 'right':
          d = Math.abs(cursor.x - p.left)
          v = (v.p !== null)
            ? (v.d < d ? v : { p, d })
            : { p, d }
          break
      }
    }
  }

  return { v, h }
}

function calcPositions ({ area, mode, children }) {
  switch (mode) {
    case 'row': return calcPositionsRow({ area, mode, children })
    case 'column': return calcPositionsColumn({ area, mode, children })
    default: return []
  }
}

function calcPositionsRow ({ area, mode, children }) {
  const positions = []
  for (const curr of children) {
    positions.push({ type: 'left', top: area.top, left: curr.left - 1, width: 0, height: area.bottom - area.top })
    positions.push({ type: 'right', top: area.top, left: curr.right - 1, width: 0, height: area.bottom - area.top })
  }
  return positions
}

function calcPositionsColumn ({ area, mode, children }) {
  const positions = []
  for (const curr of children) {
    positions.push({ type: 'top', top: curr.top - 1, left: area.left, width: area.right - area.left, height: 0 })
    positions.push({ type: 'bottom', top: curr.bottom - 1, left: area.left, width: area.right - area.left, height: 0 })
  }
  return positions
}

function calcPrimaryPosition (areas, cursor) {
  if (!areas || !cursor) {
    return null
  }
  const primary = {
    v: null,
    h: null
  }
  for (let area of areas) {
    const closest = closestPositions(area.positions, cursor)
    primary.v = primary.v || (closest.v.p ? closest.v : null)
    primary.h = primary.h || (closest.h.p ? closest.h : null)
    if (primary.v && primary.h) {
      break
    }
  }
  if (primary.v.p && !primary.h.p) return primary.v.p
  if (primary.h.p && !primary.v.p) return primary.h.p
  return (primary.v.d < primary.h.d)
    ? primary.v.p
    : primary.h.p
}

export const dropAreas = (element, cursor) => {

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

  const areas = stack.map(([element, mode]) => {
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
    const area = {
      id: uniqid(),
      mode,
      area: { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left },
      children
    }
    area.positions = calcPositions(area)
    return area
  })

  const primary = calcPrimaryPosition(areas, cursor)
  if (primary) primary.primary = true
  return areas
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
