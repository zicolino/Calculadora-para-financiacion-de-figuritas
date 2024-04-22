let dinero = prompt(`Cuanta plata tenés?`)

if ((dinero >= 0) && (dinero <= 235)){
    alert("Te puedo ofrecer 2 caramelos.")
}

if ((dinero >= 236) && (dinero <= 500)){
    alert("Estas cerca, pero no puedo fiarte, vuelve mañana.")
}

if (dinero >= 501){
    alert("Aquí tiene sus figuritas del mundial.")
}
