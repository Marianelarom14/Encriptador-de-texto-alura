const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const munheco = document.getElementById("munheco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");


// e-enter
// i-imes
// a-ai
// o-ober
// u-ufat

let remplazar =[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    munheco.classList.add("oculto");
    // ingresoTexto.value = "";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block"; 
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

}

// const reset = () => {
//     mensajeFinal.innerHTML = "";
//     munheco.classList.remove("oculto");
//     rightInfo.style.display = "block";
//     botonCopiar.style.display = "none"; 
//     right.classList.remove("ajustar");
//     mensajeFinal.classList.remove("ajustar");
//     ingresoTexto.focus();
// }


botonEncriptar.addEventListener("click", () => {
const texto = ingresoTexto.value;
    let txt = texto.normalize("NFD").replace(/[$\.´´¿\?~!\A-Z¡@#%^&*()_|}\{[\]>\<:"`+;,\u0300-\u036f']/g, " ")


    if(texto == ""){
        swal({
            title: "Oops!",
            text: "No hay texto para encriptar.",
            icon: "warning",
            button: "Ok",
        })
    }

    else if (texto !== txt){
        swal({
        title: "ERROR",
        text: "El texto no debe contener mayúsculas, acentos ni caracteres especiales",
        icon: "error",
        button: "Ok",
      });
       mensajeFinal= "";

    }
      
    function encriptar(newText) {
        for(let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][0])) {
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                };          
        };
        return newText;
    }
    remplace (encriptar(texto)) 


});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value;
    let txt = texto.normalize("NFD").replace(/[$\.´´¿\?~!\A-Z¡@#%^&*()_|}\{[\]>\<:"`+;,\u0300-\u036f']/g, " ")


    if(texto == ""){
        swal({
            title: "Oops!",
            text: "No hay texto para desencriptar",
            icon: "warning",
            button: "Ok",
        })
    }

    else if (texto !== txt){
        swal({
        title: "ERROR",
        text: "El texto no debe contener mayúsculas, acentos ni caracteres especiales",
        icon: "error",
        button: "Ok",
      });
       mensajeFinal= "";

    }  
    
    function desencriptar(newText){
        for ( let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return newText;
    };
    
    remplace(desencriptar(texto));
    
});


botonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    // navigator.clipboard.writeText(texto.value);
   texto.select();
   document.execCommand("copy")
   alert("texto copiado");
   mensajeFinal.innerHTML = "";
   munheco.classList.remove("oculto");
   rightInfo.style.display = "block";
   botonCopiar.style.display = "none";
   right.classList.remove("ajustar");
   mensajeFinal.classList.remove("ajustar");
   ingresoTexto.focus();
})