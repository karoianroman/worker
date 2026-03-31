import { describe, it, expect } from 'vitest'
import { parseMessage } from './worker.js'

describe('parseMessage', () => {
  it('декодує base64 повідомлення', () => {
    const data = Buffer.from('hello world').toString('base64')
    const result = parseMessage({ message: { data } })
    expect(result).toBe('hello world')
  })

  it('кидає помилку якщо message відсутній', () => {
    expect(() => parseMessage({})).toThrow('No message received')
  })

  it('кидає помилку якщо body порожній', () => {
    expect(() => parseMessage(null)).toThrow('No message received')
  })
})