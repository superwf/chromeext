var port = chrome.runtime.connect({ name: 'knockknock' })
port.postMessage({ joke: 'Knock knock' })
port.onMessage.addListener(function(msg) {
  console.log(msg)
  if (msg.question == "Who's there?") port.postMessage({ answer: 'Madame' })
  else if (msg.question == 'Madame who?')
    port.postMessage({ answer: 'Madame... Bovary' })
})

// const script = document.createElement('script')
// script.onload = () => {
//   document.body.removeChild(script)
// }

// script.src = chrome.extension.getURL('inject.js')
// document.body.appendChild(script)

const { log, table } = console

for (const k in chrome) {
  log(k)
}
// chrome.bookmarks.getRecent(4, log)
