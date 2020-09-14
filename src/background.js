import { checkIsLogged } from './utils/loginState.js'
// browser.runtime.onMessage.addListener(async function (request) {
//   console.log('Hello from the background')
//   // console.log(request, sender, sendResponse)
//   const msg = JSON.parse(request)
//   // console.log(msg)
//   if (msg.AuthenticationResult != null) {
//     const tokens = msg.AuthenticationResult
//     Object.assign(tokens, { expire_at: `${Date.now() + (3600 * 1000)}`})
//     console.log(JSON.stringify(tokens))
//     await browser.storage.local.set({ tokens })
//     return Promise.resolve('Done')
//     // console.log(`acc token: ${msg.AuthenticationResult.AccessToken}`)
//     // console.log(`refresh token: ${msg.AuthenticationResult.RefreshToken}`)
//   }

//   browser.tabs.executeScript({
//     file: 'content-script.js',
//   });
// })

const checkState = async () => {
    const logged = await checkIsLogged()
    if (!logged) {
        browser.browserAction.setBadgeText({text: '!'});
    } else {
        browser.browserAction.setBadgeText({text: ''});
    }
}

checkState()


browser.runtime.onMessage.addListener(async function (request) {
    console.log(request)
    if (request === 'checkState') { checkState() }
})