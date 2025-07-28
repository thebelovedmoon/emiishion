let vtuber = new URLSearchParams(window.location.search).get("vtuber");

function designateVTuber() {
  let ajx = new XMLHttpRequest();
  ajx.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { document.getElementById("replaceScreen").innerHTML = this.responseText; }
  };
  ajx.open("GET", `/emiishion/assets/text/${isVTuber(vtuber)}.txt`, true);
  ajx.send();
  return;
}

function isVTuber(nm) {
  let fvc = document.createElement("link");
  fvc.rel = "icon";
  fvc.type = "image/x-icon";
  switch (nm) {
    case "EmiiShion":
      document.title = "Emii Shion (絵美紫苑)👑🐣";
      fvc.href = "/emiishion/assets/images/icon/pfp_Emii.png";
      document.head.appendChild(fvc);
      return nm;
    case "LeidramCh":
      document.title = "Arthur Regina Leidram (アーサー王)👑🐣";
      fvc.href = "/emiishion/assets/images/icon/pfp_Leidram.png";
      document.head.appendChild(fvc);
      return nm;
    default: return null;
  }
}