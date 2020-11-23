import { checkIsLogged } from './utils/loginState.js'

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