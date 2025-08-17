console.log("Emii Shion");

document.querySelector("meta[name='theme-color']").setAttribute("content", "#fed962");
document.querySelector("meta[name='msapplication-TileColor']").setAttribute("content", "#fed962");
document.querySelector("meta[name='msapplication-navbutton-color']").setAttribute("content", "#fed962");
document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']").setAttribute("content", "#fed962");

function loadVer(nme) {
  let ajx = new XMLHttpRequest();
  ajx.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { document.querySelector("div[versionDetailer]").innerHTML = this.responseText; }
  };
  ajx.open("GET", `/emiishion/assets/ajx_txt/EmiiShion/Emii_ver/${nme}.txt`, true);
  ajx.send();
  return;
}