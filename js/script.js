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
    ingresoTexto.value = "";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block"; 
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

}

const reset = () => {
    mensajeFinal.innerHTML = "";
    munheco.classList.remove("oculto");
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none"; 
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}

botonEncriptar.addEventListener("click", () =>{
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != "") {
        function encriptar(newTex) {
            for(let i = 0; i < remplazar.length; i++) {
                if (newTex.includes(remplazar[i][0])) {
                    newTex = newTex.replaceAll(remplazar[i][0], remplazar[i][1]);
                };          
            };
            return newTex
        };    
            
    }else{
        alert("Ingrese el texto que desea Encriptar.");
        reset();
    }
        
    // const textoEncriptado = encriptar (texto);
    remplace(encriptar(texto));   
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(newTex){
            for ( let i = 0; i < remplazar.length; i++) {
                if (newTex.includes(remplazar[i][1])) {
                    newTex = newTex.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newTex
        };
    }else{
        alert("Ingrese el texto que desea Desencriptar.");
        reset();
    }   

    // const textoDesencriptado = desencriptar(texto);
    remplace(desencriptar(texto));
});


botonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    // navigator.clipboard.writeText(texto.value);
   texto.select();
   document.execCommand("copy")
   alert("texto copiado");
   reset();
})
