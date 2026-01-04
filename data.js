const nama= "annajmi nahtip";
let usia = 25;

const biodata = document.getElementById(`biodata`);

function generatebiodata() {
    let golongan;

    if (usia > 10 && usia < 18) {
      golongan = "golongan remaja";
    } 
    else if (usia > 18 && usia < 30 ) {
      golongan = "golongan dewasa";
    }
    else if (usia >= 30){  
      golongan = "golongan tua";
    }
    else if (usia > 2 && usia < 10) {
      golongan = "golongan anak-anak";
    }
    else {
      golongan = "golongan bayi";
    }
    return biodata.innerHTML = golongan;
}

console.log(nama);
console.log(usia);

generatebiodata();  