const url = "https://raw.githubusercontent.com/DevPedroAugusto/DevPedroAugusto/main/data/pedro.json"

fetch(url).then((response) => {
    response.json().then((pedro) => {
        console.log(pedro)
        console.log(pedro.Habillidades);

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