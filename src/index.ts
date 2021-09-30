type TagNames = 'button' | 'input' | 'select' | 'textarea' | 'tbody';

type TagNameMap<TagName extends TagNames> =
  TagName extends 'button' ? HTMLButtonElement
    : TagName extends 'input' ? HTMLInputElement
    : TagName extends 'select' ? HTMLSelectElement
    : TagName extends 'textarea' ? HTMLTextAreaElement
    : TagName extends 'tbody' ? HTMLTableSectionElement
    : never

function assertElement <TagName extends TagNames> (element: HTMLElement, tagName: TagName): element is TagNameMap<TagName> {
  if (element.tagName === tagName.toUpperCase()) {
    return true
  } else {
    throw new Error(`Element ${element} is not ${tagName}`)
  }
}

export function safeGetElement (id: string): HTMLElement
export function safeGetElement <TagName extends TagNames>(id: string, assertType: TagName): TagNameMap<TagName>
export function safeGetElement <TagName extends TagNames>(id: string, assertType?: TagName) {
  const element = document.getElementById(id)

  if (element === null) {
    throw new Error(`Cannot find element with id: ${id}`)
  }

  return assertType !== undefined && assertElement(element, assertType)
    ? element as TagNameMap<TagName>
    : element as HTMLElement
}