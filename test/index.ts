import tap from 'tap'
import { JSDOM } from 'jsdom'
import { tagNames } from './tagNames'
import { safeGetElement } from '../src/index'
import fs from 'fs'
import path from 'path'

tap.before(() => {
  const html = fs.readFileSync(path.join(__dirname, './index.html'))
  const dom = new JSDOM(html)
  global.document = dom.window.document
})

tap.test('safeGetElement', t => {
  t.throws(() => safeGetElement('does-not-exist'))
  t.throws(() => safeGetElement('button-id', 'div'))
  tagNames.forEach(tag => {
    t.doesNotThrow(() => safeGetElement(`${tag}-id`, tag))
    t.doesNotThrow(() => safeGetElement(`${tag}-id`))
  })
  t.end()
})