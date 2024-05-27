import { bst } from "./dependencies.js";
import Postre from "../models/Postre.js";

let btn = document.getElementById('btn-add')

btn.addEventListener("click", () =>{
    let nombre = document.getElementById('nombre').value;
    let cantidad = document.getElementById('cantidad').value;
    let sabor = document.getElementById('sabor').value;
    let postre = new Postre(nombre, cantidad, sabor);
    
    if(bst.add(postre)){
        console.log("Verdadero")
    }

    else{
        console.log("False")
    }
    console.log(bst);

    document.getElementById('nombre').value   = "";
    document.getElementById('cantidad').value = "";
    document.getElementById('sabor').value    = "";
});

let btn_buscar = document.getElementById('btn-search');

btn_buscar.addEventListener("click",()=>{
    let nombre = document.getElementById('searchPostre').value;
    let identifcadorPostre = bst.search(nombre);

    if(identifcadorPostre == null){
        alert('El postre no se escuentra agregado');
    }
    else{
        alert(`El postre sí se encuentra,  ${identifcadorPostre.value.nombre}`);
    }
    document.getElementById('searchPostre').value = "";
});

let btn_findMind = document.getElementById('minValue');

btn_findMind.addEventListener('click', function(){
    let node = bst.minValue();
    alert(`El postre inicial menor es  ${node.value.nombre}`);
})

let btn_findMaxd = document.getElementById('maxValue');

btn_findMaxd.addEventListener('click', function(){
    let node = bst.maxValue();
    alert(`El postre inicial mayor es  ${node.value.nombre}`);
})

let btn_run = document.getElementById('Run')

btn_run.addEventListener('click', () =>{
    const listaRecorrido = document.getElementById("colaDeImpresion");
    listaRecorrido.innerHTML = "";

    const callback = (postre) => {
        const listaPostre = document.createElement("li");
        listaPostre.textContent = `Nombre postre: ${postre.nombre}, cantidad: ${postre.precio}, sabor: ${postre.sabor}`;
        listaRecorrido.appendChild(listaPostre);
    }

    bst.iniciarRecorridoEnOrden(callback);

})