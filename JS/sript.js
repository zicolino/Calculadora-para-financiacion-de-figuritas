let dinero = prompt(`Cuanto dinero tenés?`)

if ((dinero >= 0) && (dinero <= 20)){
    alert("Te puedo ofrecer 2 caramelos")
}

if ((dinero >= 21) && (dinero <= 49)){
    alert("Estas cerca, pero no puedo fiarte, vuelve mañana.")
}

if (dinero >= 50){
    alert("Aquí tienes tus figuritas del mundial")
}