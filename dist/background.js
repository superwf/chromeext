const { log } = console

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: '#3aa757' }, () => {
    console.log('The color is green.')
  })
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.baidu.com' },
          }),
        ],
        // actions: [new chrome.declarativeContent.ShowPageAction()],
        actions: [
          new chrome.declarativeContent.RequestContentScript({
            js: ['inject.js'],
          }),
        ],
      },
    ])
  })

  // chrome.webNavigation.onCommitted.addListener(function(e) {
  //   log(e)
  //   fetch('http://localhost:3000/api/user/create', {
  //     body: e.url,
  //     method: 'POST',
  //   }).then(log)
  // })
  // console.log(chrome.webNavigation.onCommitted.hasListeners())

  // console.log(Notification.permission)
  // new Notification('Hi there!')

  chrome.identity.getProfileUserInfo(u => log(u.email))
  chrome.bookmarks.getRecent(4, log)

  console.table(Object.keys(chrome))

  var views = chrome.extension.getViews({ type: 'popup' })
  // log(chrome.extension.getViews)
  // log(chrome.runtime.getViews)
  if (views.length > 0) {
    log(views[0].location.href)
  }

  log(chrome.runtime.getViews)
})

function recordScreen() {
  return new Promise((resolve, reject) => {
    chrome.desktopCapture.chooseDesktopMedia(['screen', 'window'], id => {
      if (id) {
        resolve(
          navigator.mediaDevices.getUserMedia({
            video: {
              mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: id,
                minWidth: 1280,
                maxWidth: 1280,
                minHeight: 720,
                maxHeight: 720,
              },
            },
          }),
        )
        console.log(chrome.extension.getViews())
        // .then(stream => {
        //   // log(stream)
        //   // log(URL.createObjectURL(stream))
        // })
      }
      reject()
    })
  })
}
