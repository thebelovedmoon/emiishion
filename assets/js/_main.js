let vtuber = new URLSearchParams(window.location.search).get("vtuber");

function designateVTuber() {
  let ajx = new XMLHttpRequest();
  ajx.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { document.body.innerHTML = this.responseText; }
  };
  ajx.open("GET", `/emiishion/assets/ajx_txt/${isVTuber(vtuber)}/_page.txt`, true);
  ajx.send();
  return;
}

function isVTuber(nm) {
  let fvc = document.createElement("link"),
    scrpt = document.createElement("script"),
    importCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
  fvc.rel = "icon";
  fvc.type = "image/x-icon";
  scrpt.type = "text/javascript";
  switch (nm) {
    case "EmiiShion":
      document.title = "Emii Shion (絵美紫苑)🐣";
      fvc.href = "/emiishion/assets/images/icon/pfp_Emii.png";
      document.head.appendChild(fvc);
      scrpt.src = `/emiishion/assets/js/vtuber/${nm}.js`;
      document.head.appendChild(scrpt);
      importCSS(`@import url("/emiishion/assets/css/vtuber/${nm}.css");`);
      // document.body.onload = () => { vtuberInit(); };
      modelNm = nm;
      return nm;
    case "LeidramCh":
      document.title = "Arthur Regina Leidram (アーサー王)👑";
      fvc.href = "/emiishion/assets/images/icon/pfp_Leidram.png";
      document.head.appendChild(fvc);
      scrpt.src = `/emiishion/assets/js/vtuber/${nm}.js`;
      document.head.appendChild(scrpt);
      importCSS(`@import url("/emiishion/assets/css/vtuber/${nm}.css");`);
      // document.body.onload = () => { vtuberInit(); };
      modelNm = nm;
      return nm;
    default: return event.preventDefault();
  }
}