window.addEventListener("load", () => {
  // console.log(navigator.userAgent);

  if (navigator.userAgent.includes("Android")) {
    console.log("Android");
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.google.android.youtube";
  } else if (
    navigator.userAgent.includes("iPhone") ||
    navigator.userAgent.includes("iPad")
  ) {
    window.location.href =
      "https://apps.apple.com/au/app/youtube-watch-listen-stream/id544007664";
  } else if (navigator.userAgent.includes("Chrome")) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.google.android.youtube";
  } else if (navigator.userAgent.includes("Safari")) {
    document.location.href =
      "https://apps.apple.com/au/app/youtube-watch-listen-stream/id544007664";
  } else if (navigator.userAgent.includes("Firefox")) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.google.android.youtube";
  }
});
