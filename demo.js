const status = document.getElementById("status");
const ul = document.getElementById("installedApps");

window.addEventListener("load", () => {
  // Check to see if the API is supported.
  if ("getInstalledRelatedApps" in navigator) {
    const divNotSupported = document.getElementById("notSupported");
    divNotSupported.classList.toggle("hidden", true);
    checkForRelatedApps();
  }
});

function checkForRelatedApps() {
  navigator.getInstalledRelatedApps().then(relatedApps => {
    // status.textContent = `resolved (${relatedApps.length})`;
    // relatedApps.forEach(app => {
    //   const lines = [];
    //   lines.push(`<b>id:</b> <code>${app.id}</code>`);
    //   lines.push(`<b>platform:</b> ${app.platform}`);
    //   lines.push(`<b>url:</b> <a href="${app.url}">${app.url}</a>`);
    //   const li = document.createElement("li");
    //   li.innerHTML = lines.join("<br>");
    //   ul.appendChild(li);
    // });

    console.log(navigator.userAgent);

    if (navigator.userAgent.includes("Android")) {
      console.log("Android");
      window.location.href =
        "https://play.google.com/store/apps/details?id=au.com.medinet.mypractice";
    } else if (navigator.userAgent.includes("Safari")) {
      console.log("iOS");
      window.location.href = "apps.apple.com/au/app/mypractice/id1542728412";
    }

    console.log(
      "🚀 ~ file: demo.js ~ line 15 ~ navigator.getInstalledRelatedApps ~ relatedApps",
      relatedApps
    );
  });
}
