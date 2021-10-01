type TagNames = keyof HTMLElementTagNameMap;
function assertElement <TagName extends TagNames> (element: HTMLElement, tagName: TagName): element is HTMLElementTagNameMap[TagName] {
  if (element.tagName === tagName.toUpperCase()) {
    return true
  } else {
    throw new Error(`Element ${element} is not ${tagName}`)
  }
}

export function safeGetElement (id: string): HTMLElement
export function safeGetElement <TagName extends TagNames>(id: string, assertType: TagName): HTMLElementTagNameMap[TagName]
export function safeGetElement <TagName extends TagNames>(id: string, assertType?: TagName) {
  const element = document.getElementById(id)

  if (element === null) {
    throw new Error(`Cannot find element with id: ${id}`)
  }

  if (assertType !== undefined && assertElement(element, assertType)) {
    return element as HTMLElementTagNameMap[TagName]
  }

  return element as HTMLElement
}