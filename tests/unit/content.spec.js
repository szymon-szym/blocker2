import { postAddsLogs } from '@/content-scripts/content-script.js'

describe('Logging to db',  () => {
  it('sends post request to the API endpoint', async () => {
  global.fetch = jest.fn(() => {
    Promise.resolve("ok")
  })
  global.browser = jest.fn(() => {
    Promise.resolve("ok")
  })
  const quantity = 12
  const token = 'ABC'

  const res = await postAddsLogs(quantity, token)

  expect(fetch).toBeCalledTimes(2)
  expect(fetch).toBeCalledWith('ABC')

  })
})
