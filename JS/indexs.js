/* Triangle*/
function calculate() {
  var num1 = parseInt(document.getElementById("pedestal").value);
  var num2 = parseInt(document.getElementById("high").value);
  if (true) {
    document.getElementById("result").value = (1 / 2) * num1 * num2;
    console.log("berhasil");
  } else {
    console.log("tidak berhasil");
  }
  event.preventDefault();
  }

  function hapus() {
    document.getElementById("FormSegitiga").reset();
  }

/* Triangle*/
function Kelilingsegitiga()
  {
    var num4 = parseInt(document.getElementById("sideA").value);
    var num5 = parseInt(document.getElementById("sideB").value);
    var num6 = parseInt(document.getElementById("sideC").value);
    if (true) {
        document.getElementById("rsult").value = num4 + num5 + num6;
        console.log("berhasil");
    } else {
        console.log("tidak berhasil")
    }
    event.preventDefault();
  }

  function hilang() {
    document.getElementById("KelilingSg").reset();
  }

  function luasJG() {
    var num7 = parseInt(document.getElementById("alas").value);
    var num8 = parseInt(document.getElementById("tinggi").value);
    if (true) {
      document.getElementById("reslt").value = num7 * num8;
      console.log ("berhasil");
    } else {
      console.log("tidak berhasil")
    }
event.preventDefault();
  }

  function cler() {
    document.getElementById("formluasJG").reset();
  }

function kelilingJG() {
  var num9 = parseInt(document.getElementById("sidea").value);
  var num10 = parseInt(document.getElementById("sideb").value);
  if (true) {
    document.getElementById("hasil").value = (2*num9) + (2*num10) 
    console.log ("berhasil")
  } else {
    console.log ("tidak berhasil")
  }
  event.preventDefault()
}

function clr() {
  document.getElementById("formkelilingJG").reset();
}