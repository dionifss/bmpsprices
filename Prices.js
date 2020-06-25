function boom() {
  let pvp = document.getElementById("recomended").value;
  let discount = document.getElementById("discount").value;
  sellprice(pvp, discount);
}

function sellprice(pvp, discount) {
  discount = discount / 100;
  let normal;
  let lownormal;
  let lastsell;
  let cuesta = Math.floor((pvp / 2) * (1 - discount) * 100) / 100;
  if (pvp > 50) {
    normal = Math.floor(pvp * (1 - 0.375 * discount - 0.025) * 10) / 10;
    lownormal = Math.floor(pvp * (1 - 0.75 * discount - 0.1) * 10) / 10;
    lastsell = Math.floor(pvp * (1 - 0.75 * discount - 0.15) * 10) / 10;
  } else if (pvp > 15) {
    normal = Math.floor(pvp * (1 - 0.35 * discount - 0.01) * 10) / 10;
    lownormal = Math.floor(pvp * (1 - 0.625 * discount - 0.075) * 10) / 10;
    lastsell = Math.floor(pvp * (1 - 0.7 * discount - 0.1) * 10) / 10;
  } else {
    normal = Math.floor(pvp * (1 - 0.25 * discount) * 10) / 10;
    lownormal = Math.floor(pvp * (1 - 0.5 * discount) * 10) / 10;
    lastsell = Math.floor(pvp * (1 - 0.5 * discount - 0.1) * 10) / 10;
  }
  document.querySelector(".pvp").innerHTML = `${pvp}€`;
  document.querySelector(".discount").innerHTML = `${discount * 100}%`;
  document.querySelector(".salida").innerHTML = `${normal}€en porcentaje ${
    Math.floor(((normal / 1.21 - cuesta) / (normal / 1.21)) * 1000) / 10
  }%`;
  //  y ganamos ${Math.floor((normal / 1.21 - cuesta) * 10) / 10}€,

  document.querySelector(".tope").innerHTML = `${lownormal}€  en porcentaje ${
    Math.floor(((lownormal / 1.21 - cuesta) / (lownormal / 1.21)) * 1000) / 10
  }%`;
  //  y ganamos ${ Math.floor((lownormal / 1.21 - cuesta) * 10) / 10}€,

  document.querySelector(".last").innerHTML = `${lastsell}€  en porcentaje ${
    Math.floor(((lastsell / 1.21 - cuesta) / (lastsell / 1.21)) * 1000) / 10
  }%`;

  //y ganamos ${  Math.floor((lastsell / 1.21 - cuesta) * 10) / 10 }€,

  document.querySelector(".cuesta").innerHTML = `${
    Math.floor(cuesta * 1.21 * 100) / 100
  }€`;
}
