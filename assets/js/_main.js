let vtuber = new URLSearchParams(window.location.search).get("vtuber");

function designateVTuber() {
  let ajx = new XMLHttpRequest();
  ajx.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { document.body.innerHTML = this.responseText; }
  };
  ajx.open("GET", `/assets/ajx_txt/${isVTuber(vtuber)}/_page.txt`, true);
  ajx.send();
  return;
}

function isVTuber(nm) {
    scrpt = document.createElement("script"),
    importCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
  scrpt.type = "text/javascript";
  switch (nm) {
    case "EmiiShion":
      document.title = "Emii Shion (絵美紫苑)🐣";
      document.querySelector(`link[rel="icon"]`).setAttribute("href", "/assets/images/icon/pfp_Emii.png");
      document.querySelector(`link[rel="apple-touch-icon"]`).setAttribute("href", "/assets/images/icon/pfp_Emii.png");
      scrpt.src = `/assets/js/vtuber/${nm}.js`;
      document.head.appendChild(scrpt);
      importCSS(`@import url("/assets/css/vtuber/${nm}.css");`);
      // document.body.onload = () => { vtuberInit(); };
      modelNm = nm;
      return nm;
    case "LeidramCh":
      document.title = "Arthur Regina Leidram (アーサー王)👑";
      document.querySelector(`link[rel="icon"]`).setAttribute("href", "/assets/images/icon/pfp_Leidram.png");
      document.querySelector(`link[rel="apple-touch-icon"]`).setAttribute("href", "/assets/images/icon/pfp_Leidram.png");
      scrpt.src = `/assets/js/vtuber/${nm}.js`;
      document.head.appendChild(scrpt);
      importCSS(`@import url("/assets/css/vtuber/${nm}.css");`);
      // document.body.onload = () => { vtuberInit(); };
      modelNm = nm;
      return nm;
    default: return event.preventDefault();
  }
}