b = 0;

mostrar_texto=(texto)=>{
    obj_resp = document.getElementById("resultado")
    obj_resp.value=texto
    obj_resp.style.display="block"
    
}
cambiar_base=()=>{
    base_obj = document.getElementById("dv_base")
    base_value = base_obj.title
    if(base_value == "base 10"){
        base_obj.innerHTML = 2
        base_obj.title = "base 2"
    }else{
        base_obj.innerHTML = 10
        base_obj.title = "base 10"
    }
    convertir()
}

a_base_dos=(numero)=>{

    nuevo_numero = 0
    numero_inverso = (numero%2).toString()
    r = Math.trunc(numero/2)
    mod = numero%2
    while (r>0) {
        mod=r%2
        numero_inverso+=mod.toString()
        r=Math.trunc(r/2)
    }
    nuevo_numero = numero_inverso.split("").reverse()
    n = ""
    nuevo_numero.forEach(element => {
        n+=element
    });

    mostrar_texto(n)
    
}


a_base_diez=(numero)=>{
    numeros = numero.split("")
    sw = 0
    numeros.forEach(element=>{
        digito = parseInt(element)
        if(digito!=0 & digito!=1){
            sw=1
            console.log(sw)
        }
    })

    if(sw==0){
        console.log("numero->"+numero)
        exponente = numero.length - 1
        console.log("exponente: "+exponente)
        nuevo_numero = 0

        numeros.forEach(element=>{
            nuevo_numero+=parseInt(element)*(2**exponente)
            exponente-=1
            console.log("exponente: "+exponente)
        })
        mostrar_texto(nuevo_numero)
    }else{
        mostrar_texto("Este no es un numero binario")
    }

}


convertir=()=>{
    numero = document.getElementById("inp_numero").value
    base_actual= document.getElementById("dv_base").title
    if(numero){
        if(base_actual == "base 10"){
            a_base_dos(numero)
        }else{
            a_base_diez(numero)
        }
    }else{
        obj_resp = document.getElementById("resultado")
        obj_resp.style.display = "none"
    }
}
function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}
enviar_mensaje=()=>{
    movil = isMobile()
    if(movil){
        window.location.replace("https://wa.me/573158331891")
    }else{
        window.open("https://web.whatsapp.com/send?phone=573158331891")
    }

} 