function clockIn() {
  const url = window.location.href;
  const win = window.open();
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  const iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = url;
  win.document.body.appendChild(iframe);
  window.location.replace("https://google.com"); // Redirects the old tab to Google
}
