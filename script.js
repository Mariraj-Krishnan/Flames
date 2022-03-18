function get() {
  var tfName = document.querySelector("#fName").value;
  var tsName = document.querySelector("#sName").value;
  if (!(tfName && tsName)) return;
  const specify = {
    F: "Friends",
    L: "Lovers",
    A: "Affection",
    M: "Marriage",
    E: "Enemy",
    S: "Sister",
  };
  var flames = "FLAMES";
  var fName = Array.from(tfName.replace(/ /g, ""));
  var sName = Array.from(tsName.replace(/ /g, ""));
  var lLength = fName.length > sName.length ? fName.length : sName.length;
  var sLength = fName.length < sName.length ? fName.length : sName.length;
  var fcounter = lLength + sLength;
  for (var i = 0; i < lLength; i++) {
    for (var j = 0; j < sLength; j++) {
      if (fName[i] === sName[j]) {
        sName[j] = "$";
        fcounter = fcounter - 2;
        break;
      }
    }
  }
  var tfcounter = fcounter;
  var fLength = 6;
  while (fLength != 1) {
    fcounter = tfcounter;
    if (fcounter > fLength) {
      fcounter = fcounter % fLength;
      if (fcounter == 0) {
        fcounter = fLength;
      }
    }
    flames =
      flames.substring(fcounter, flames.length) +
      flames.substring(0, fcounter - 1);
    fLength = fLength - 1;
  }
  document.querySelector(".result").textContent = specify[flames];
}
