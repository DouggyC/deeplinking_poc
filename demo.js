const status = document.getElementById("status");
const ul = document.getElementById("installedApps");

window.addEventListener("load", () => {
  console.log(navigator.userAgent);

  if (navigator.userAgent.includes("Android")) {
    console.log("Android");
    window.location.href =
      "https://play.google.com/store/apps/details?id=au.com.medinet.mypractice";
  } else if (window.navigator.userAgent.includes("iPhone")) {
    window.location.href =
      "https://apps.apple.com/au/app/mypractice/id1542728412";
  } else if (window.navigator.userAgent.includes("Safari")) {
    console.log("Safari");
    window.location.href =
      "https://apps.apple.com/au/app/mypractice/id1542728412";
  } else if (navigator.userAgent.includes("iPhone")) {
    document.location.href =
      "https://apps.apple.com/au/app/mypractice/id1542728412";
  } else if (navigator.userAgent.includes("Safari")) {
    console.log("Safari");
    window.location.href =
      "https://apps.apple.com/au/app/mypractice/id1542728412";
  }

  console.log(
    "🚀 ~ file: demo.js ~ line 15 ~ navigator.getInstalledRelatedApps ~ relatedApps",
    relatedApps
  );
});
