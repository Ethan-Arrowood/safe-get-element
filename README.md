# safe-get-element

Runtime-based type safety for the commonly used [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) method. This method prevents you from having to manually check if a returned element is not `null`, and you can optionally provide a `tagName` that will assert the given element type.

## Quick Start

```
npm i safe-get-element
```

```html
<!DOCTYPE html>
<html>
  <button id='my-button'></button>
</html>
```

```ts
import { safeGetElement } from 'safe-get-element'

const button = safeGetElement('my-button', 'button') // HTMLButtonElement

// without safe-get-element

const button = document.getElementById('my-button')

if (button === null) {
  throw new Error('Cannot find button!')
}

if (button.tagName !== 'BUTTON') {
  throw new Error('Button is not of type HTMLButtonElement')
}
```

## API

### `safeGetElement(id: string)`

Returns: `HTMLElement`

When used with just an `id`, the API will assert the queried element is not `null` and return it. Otherwise, it throws an error.

### `safeGetElement(id: string, assertType: TagName)`

`TagName` is a generic that is constrained to `keyof HTMLElementTagNameMap` from TypeScript's [lib.dom.d.ts](https://github.com/microsoft/TypeScript/blob/main/lib/lib.dom.d.ts).

Returns: `HTMLElementTagNameMap[TagName]`

When passed an `assertType`, the API asserts the queried element eixsts _and_ its respective `tagName` matches the associated `assertType`. If it does, it returns the _element_ as the associated DOM Interface.

## What about `getElementsByTagName`, `querySelector`, or `querySelectorAll`?

These methods already support some level of type safety!

```ts
// getElementsByTagName
const buttons1 = document.getElementsByTagName('button') // HTMLCollectionOf<HTMLButtonElement>
const myButton1 = buttons.find(button => button.id === 'my-button') // HTMLButtonElement

// querySelector
const myButton2 = document.querySelector('button') // HTMLButtonElement | null

if (myButton2 !== null) {
  // HTMLButtonElement
}

// querySelectorAll
const buttons2 = document.querySelectorAll('button') // NodeListOf<HTMLButtonElement>
const myButton3 = buttons.find(button => button.id === 'my-button') // HTMLButtonElement
```