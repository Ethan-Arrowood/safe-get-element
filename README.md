# safe-get-element

⚠️ Incomplete - Currently a proof-of-concept. Next release will contain all available tag names and DOM interfaces. ⚠️

Runtime-based type safety for the commonly used [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) method.

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
```

## API

### `safeGetElement(id: string): HTMLElement`

When used with just an `id`, the API will assert the queried element is not `null` and return it. Otherwise, it throws an error.

### `safeGetElement <TagName extends TagNames>(id: string, assertType: TagName): TagNameMap<TagName>`

When passed an `assertType`, the API asserts the queried element eixsts _and_ its respective `tagName` matches the associated `assertType`. If it does it returns the _element_ as the associated DOM Interface.