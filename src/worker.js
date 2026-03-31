export function parseMessage(body) {
  if (!body?.message) {
    throw new Error('No message received')
  }
  const data = Buffer.from(body.message.data, 'base64').toString('utf-8')
  return data
}