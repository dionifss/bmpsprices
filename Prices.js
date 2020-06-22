function boom() {
  console.log("bananan");

  let recomended = document.getElementById("recomended").value;
  let discount = document.getElementById("discount").value;
  sellprice(recomended, discount);
}

function sellprice(recomended, discount) {
  discount = discount / 100;
  let normal;
  let lownormal;
  let lastsell;
  let ultima;
  let cuesta = Math.floor((recomended / 2) * (1 - discount) * 100) / 100;
  if (recomended > 50) {
    normal = Math.min(recomended * 0.9, recomended * (1 - discount + 0.2));
    lownormal = Math.floor(recomended * (1 - discount - 0.08) * 10) / 10;
    lastsell = Math.floor(recomended * (1 - discount - 0.18) * 10) / 10;
    ultima = Math.floor(recomended * (1 - discount - 0.25) * 10) / 10;
  } else if (recomended > 15) {
    normal =
      Math.floor(
        Math.min(recomended * 0.95, recomended * (1 - discount + 0.2)) * 100
      ) / 100;
    lownormal = Math.floor(recomended * (1 - discount - 0.07) * 10) / 10;
    lastsell = Math.floor(recomended * (1 - discount - 0.16) * 10) / 10;
    ultima = Math.floor(recomended * (1 - discount - 0.23) * 10) / 10;
  } else {
    normal =
      Math.floor(
        Math.min(recomended, recomended * (1 - discount + 0.2)) * 100
      ) / 100;
    lownormal = Math.floor(recomended * (1 - discount) * 100) / 100;
    lastsell = Math.floor(recomended * (1 - discount - 0.05) * 100) / 100;
    ultima = Math.floor(recomended * (1 - discount - 0.1) * 100) / 100;
  }
  document.getElementById(
    "answer"
  ).innerHTML = `- Nos cuesta ${cuesta} - con IVA ${
    Math.floor(cuesta * 1.21 * 100) / 100
  }.  
`;
  document.querySelector(".pvp").innerHTML = `${recomended}€`;
  document.querySelector(".discount").innerHTML = `${discount * 100}%`;
  document.querySelector(".salida").innerHTML = `${normal}€`;
  document.querySelector(".tope").innerHTML = `${lownormal}€`;
  document.querySelector(".last").innerHTML = `${lastsell}€`;
}
