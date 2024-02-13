const url = "https://raw.githubusercontent.com/DevPedroAugusto/DevPedroAugusto/main/data/pedro.json"

const caminho = "data/pedro.json"

fetch(url).then((response) => {
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

        // Formação

        const personalFormations = document.getElementById("personal-formations")

        pedro.Formacao.forEach((form) => {
            var listaDeForm = document.createElement("ul")
            listaDeForm.className = "normal-list formation"

            listaDeForm.innerHTML = `
            <li class="simple-line">
                <span class="font500">${form.Universidade}</span>
            </li>
                <li class="simple-line">Graduação: ${form.Curso} </li>
                <li class="simple-line">Inicio: ${form.Inicio} </li>
                <li class="simple-line">Conclusão: ${form.Conclusão}</li>
            `

            personalFormations.appendChild(listaDeForm)
        })

        // Experiencia

        const personalExperienceList = document.getElementById("personal-experience-list")

        pedro.Experiencias.forEach((experiencia) => {
            var listaDeExperiencia = document.createElement("li")
            listaDeExperiencia.className = "simple-line experience"

            listaDeExperiencia.innerHTML = `
            <h3>${experiencia.Empresa}</h3>
            <p class="function"><span class="font500">Cargo:</span> ${experiencia.Cargo}</p>
            <p class="period"><span class="font500">Período:</span> ${experiencia.Periodo}</p>
            <p class="main-functions"><span class="font500">Principal atividades:</span> ${experiencia.Atividades}</p>
            <span class="line-experience"></span>
            `

            personalExperienceList.appendChild(listaDeExperiencia)
        })

        // Cursos

        const personalCursosList = document.getElementById("personal-cursos-list")

        pedro.Cursos.forEach((curso) => {
            var cursosLines = document.createElement("li")
            cursosLines.className = "simple-line"

            cursosLines.innerHTML = `
            <a href="${curso.Link}" target="_blank">
                <h3>${curso.Curso}</h3>
            </a>
            <p><span class="font500">${curso.Plataforma}</span></p>
            <p><span class="font500">Carga horária:</span> ${curso.Tempo}</p>
            <p><span class="font500">Conteúdo:</span> ${curso.Conteudo} </p>
            `

            personalCursosList.appendChild(cursosLines)
        })

        // Conhecimentos

        const personalTools = document.getElementById("personal-tools")

        pedro.Conhecimentos.Ferramentas.forEach((ferramenta) => {
            const li = document.createElement("li")
            li.className = "normal-line"

            li.innerHTML = `<span class="font500"> ${ferramenta.nome}</span> <br class="tools-more"> ${ferramenta.tools}`
            personalTools.appendChild(li)
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

        const certificateLinguagens = document.getElementById("certificate-linguagens")

        let optionsHTML = '';

        for (let linguagen in pedro.Certificados.Dio) {
            // console.log(linguagen);
            optionsHTML += `<option value="${linguagen}">${linguagen}</option>`;
        }
        certificateLinguagens.innerHTML = optionsHTML;



        const selectedLinguage = document.getElementById("certificate-linguagens")

        updateLingages()

        function updateLingages() {
            const certificateList = document.getElementById("certificate-list")

            // console.log(selectedLinguage.value);

            filterBy = selectedLinguage.value

            certificateList.innerHTML = ""

            pedro.Certificados.Dio[filterBy].forEach((cursos) => {
                const li = document.createElement('li')
                li.id = cursos.code
                li.className = "items-lista"
                // console.log(cursos.name)
                li.innerHTML = cursos.name

                certificateList.appendChild(li)
            })
        }


        selectedLinguage.addEventListener("input", () => {
            // console.log(selectedLinguage.value);

            updateLingages()
        })

    })
})