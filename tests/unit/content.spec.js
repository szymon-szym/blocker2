import { postAddsLogs } from '@/content-scripts/content-script.js'

describe('Logging to db',  () => {
  it('sends post request to the API endpoint', async () => {
  global.fetch = jest.fn(() => {
    Promise.resolve("ok")
  })
  
  const url = 'https://yqibl4m4yj.execute-api.us-west-2.amazonaws.com/prod/logs/'
  const quantity = 12
  const token = 'ABC'

  const res = await postAddsLogs(quantity, token)

  expect(fetch).toBeCalledTimes(1)
  expect(fetch).toBeCalledWith(url, expect.anything())
  expect(fetch).toBeCalledWith(expect.anything(), expect.objectContaining({headers: {
    Authorization: token
  }}))

  })
})
