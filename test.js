import { readFileSync } from 'fs'
import test from 'tape'

test('babel-tape-runner', t => {
  let file = readFileSync(__filename, 'utf8')
  t.ok(/hello/gim.flags, 'gim')
  t.ok(/^import/.test(file))
  t.end()
})
