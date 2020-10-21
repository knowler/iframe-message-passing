const embed = document.createElement('iframe');

embed.src = 'embed.html';

// Initial embed styles
embed.style.border = 0;
embed.style.minWidth = '0px';
embed.style.flexBasis = '360px';
embed.style.flexShrink = 1;

// Lazy selector
document.querySelector('script').insertAdjacentElement('beforebegin', embed);

const requestHeight = () => embed.contentWindow.postMessage('Height please');

// Only start asking for stuff on load
embed.addEventListener('load', () => {
  requestHeight();

  const requestHeightOnResize = new ResizeObserver(() => {
    requestHeight();
  });

  requestHeightOnResize.observe(embed);
});

// Set the height when the embed frame responds with it
window.addEventListener('message', ({data: height}) => {
  embed.style.border = '1px solid black';
  embed.style.height = `${height}px`;
});
