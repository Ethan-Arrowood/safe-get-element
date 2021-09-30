import tap from 'tap'
import { JSDOM } from 'jsdom'
import { safeGetElement } from '../src/index'

tap.before(() => {
  const dom = new JSDOM(`<!DOCTYPE html><button id='button'></button>`)
  global.document = dom.window.document
})

tap.test('safeGetElement', t => {
  t.throws(() => safeGetElement('does-not-exist'))
  t.throws(() => safeGetElement('button', 'input'))
  t.doesNotThrow(() => safeGetElement('button', 'button'))
  t.end()
})