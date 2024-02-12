const url = "https://raw.githubusercontent.com/DevPedroAugusto/DevPedroAugusto/main/data/pedro.json"

const caminho = "data/pedro.json"

fetch(caminho).then((response) => {
    response.json().then((pedro) => {
        console.log(pedro)

        const myName = document.getElementById("my-name")
        myName.innerText = pedro.Cabecalho["Meu Nome"]

        const aboutMe = document.getElementById("about-me")
        aboutMe.innerText = pedro.Cabecalho["Sobre mim"]

        // Informações Pessoais

        const nascimento = document.getElementById("nascimento")
        nascimento.innerText = pedro["Informações pessoais"]["Data de nascimento"]

        const nacionalidade = document.getElementById("nacionalidade")
        nacionalidade.innerText = pedro["Informações pessoais"].Nacionalidade

        const estadoCivil = document.getElementById("estado-civil")
        estadoCivil.innerText = pedro["Informações pessoais"]["Estado civil"]

        const cep = document.getElementById("cep")
        cep.innerText = pedro["Informações pessoais"].CEP

        const place = document.getElementById("place")
        place.innerHTML = pedro["Informações pessoais"].Endereço

        // Contato

        var listaContatos = document.getElementById('contato-info');

        pedro.Contato.forEach(function (contato) {
            var itemLista = document.createElement('li');
            itemLista.classList.add('normal-line');

            itemLista.innerHTML = `
            <span class="font500">${contato['Contato Via']}:</span>
            <a href="${contato.link}" target="_blank">
                <span id="celular-Number">${contato.texto}</span>
            </a>`;

            listaContatos.appendChild(itemLista);
        });

        // Habilidades

        const habilitsInfo = document.getElementById("habilits-info")

        pedro.Habillidades.forEach((habillidade) => {
            const li = document.createElement('li')
            li.className = 'normal-line';
            li.textContent = habillidade
            habilitsInfo.appendChild(li)
        })

        const personalDevLanguage = document.getElementById("personal-dev-language")

        pedro.Conhecimentos.Programacao.forEach((linguagen) => {
            const li = document.createElement('li')
            li.className = 'normal-line';

            const span = document.createElement("span")
            span.className = "font500"
            span.textContent = linguagen

            li.appendChild(span)
            personalDevLanguage.appendChild(li)
        })
    })
})