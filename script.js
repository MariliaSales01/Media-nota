const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault();

    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const n3 = document.getElementById('n3').value;
    const n4 = document.getElementById('n4').value;

    const media = ((Number(n1) + Number(n2) +Number(n3)+ Number(n4))/4) 

    const value = document.getElementById('value');
    let description = ''

    
    document.getElementById('infos').classList.remove('hidden');

    if(media >= 7){
        description = 'Você foi aprovado'
        value.classList.add('normal')
    }

    else{
        description = 'Você foi reprovado'
        value.classList.remove('normal')
        value.classList.add('atencao')
    }

    value.textContent = media
    document.getElementById('description').textContent = description;
})