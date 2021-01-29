window.addEventListener("load", () => {
  console.log(navigator.userAgent);

  if (navigator.userAgent.includes("Android")) {
    console.log("Android");
    window.location.href =
      "https://play.google.com/store/apps/details?id=au.com.medinet.mypractice";
  } else if (
    navigator.userAgent.includes("iPhone") ||
    navigator.userAgent.includes("iPad")
  ) {
    window.location.href =
      "https://apps.apple.com/au/app/mypractice/id1542728412";
  } else if (navigator.userAgent.includes("Chrome")) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=au.com.medinet.mypractice";
  } else if (navigator.userAgent.includes("Safari")) {
    document.location.href =
      "https://apps.apple.com/au/app/mypractice/id1542728412";
  } else if (navigator.userAgent.includes("Firefox")) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=au.com.medinet.mypractice";
  }
});
