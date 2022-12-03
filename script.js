const btn = document.getElementById('btn')
btn.addEventListener('click', verificar)
AOS.init({
    duration: 1000,
    once: true,
    
});

function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados novamente')
    } else {
        // Não funcionou com const, mas funcionou com var
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = " "
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = "homem"  
            if (idade >= 0 && idade <10 ){
                //crinaça
                img.setAttribute('src', 'foto-bebe-m.png')
                img.setAttribute('data-aos',"fade-right")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
                img.setAttribute('data-aos',"fade-right")
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                img.setAttribute('data-aos',"fade-right")
            }
            else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                img.setAttribute('data-aos',"fade-right")
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade <10 ){
                //crinaça
                img.setAttribute('src', 'foto-bebe-f.png')
                img.setAttribute('data-aos',"fade-right")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
                img.setAttribute('data-aos',"fade-right")
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                img.setAttribute('data-aos',"fade-right")
            }
            else {
                // idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                img.setAttribute('data-aos',"fade-right")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=(`Detectamos o gênero ${genero} com idade ${idade} anos.`)
        res.appendChild(img)
    }
}


