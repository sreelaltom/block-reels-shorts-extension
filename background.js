const redirectUrls = [
  "https://www.youtube.com/watch?v=X4nGU4DZUwE",
  "https://www.youtube.com/watch?v=26U_seo0a1g",
  "https://www.youtube.com/watch?v=QkCa--fyGjA",
  "https://www.youtube.com/watch?v=mK8XBV85_g4",
  "https://www.youtube.com/watch?v=xyWKAlCvC28",
  "https://www.youtube.com/watch?v=3B2hVhSHd-s",
  "https://www.youtube.com/watch?v=kxvUi7MBLf8",
  "https://www.youtube.com/watch?v=-tu9APXXq0E",
  "https://www.youtube.com/watch?v=dDs8Kgvqt4U",
  "https://www.youtube.com/watch?v=6TYWQbh-1-g",
  "https://www.youtube.com/watch?v=H-sZ8wfjy1A",
];

function getRandomRedirect() {
  const index = Math.floor(Math.random() * redirectUrls.length);
  return redirectUrls[index];
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    (tab.url.includes("instagram.com/reels") ||
      tab.url.includes("youtube.com/shorts"))
  ) {
    const redirectUrl = getRandomRedirect();
    chrome.tabs.update(tabId, { url: redirectUrl });
  }
});
