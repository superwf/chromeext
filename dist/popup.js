const changeColor = document.getElementById('changeColor')
changeColor.onclick = function(element) {
  const color = element.target.value
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.backgroundColor = "' + color + '";',
    })
  })
}

const { log, table } = console

document.getElementById('notification').onclick = () => {
  chrome.notifications.create(undefined, {
    type: 'basic',
    title: 'abv',
    message: 'dwef',
    iconUrl: 'images/get_started48.png',
  })
  for (const k in chrome) {
    log(k)
  }
}

document.querySelector('#recordScreen').addEventListener('click', () => {
  const bg = chrome.extension.getBackgroundPage()
  bg.recordScreen()
  // log(chrome.extension.getViews({ type: 'tab' }))
})
