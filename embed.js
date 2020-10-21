window.addEventListener('message', ({source, origin}) => {
  // Send the height of the frame back to the source window
  source.postMessage(document.body.scrollHeight, origin);
});
