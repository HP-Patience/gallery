async function handleRequest(request) {
  const url = new URL(request.url);
  // 检查路径中是否包含被编码的中括号
  if (url.pathname.includes('%5B') || url.pathname.includes('%5D')) {
    // 把 %5B 还原回 [ , %5D 还原回 ]
    url.pathname = url.pathname.replace(/%5B/g, '[').replace(/%5D/g, ']');
    // 用修正后的路径去回源
    return fetch(url.toString(), request);
  }
  return fetch(request);
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});