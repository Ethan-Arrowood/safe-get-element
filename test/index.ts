import tap from 'tap'
import { JSDOM } from 'jsdom'
import { tagNames } from './tagNames'
import { safeGetElement } from '../src/index'

tap.before(() => {
  const html = tagNames.reduce((acc, tag) => {
    return acc += `\n<${tag} id='${tag}-id'></${tag}>`
  }, '<!DOCTYPE html>')
  const dom = new JSDOM(html)
  global.document = dom.window.document
})

tap.test('safeGetElement', t => {
  t.throws(() => safeGetElement('does-not-exist'))
  // t.throws(() => safeGetElement('button', 'input'))
  tagNames.forEach(tag => {
    t.doesNotThrow(() => safeGetElement(`${tag}-id`, tag))
  })
  t.end()
})