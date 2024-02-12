// Declarações

const modeButtonText = document.querySelector("#mode-button-text")
const profileOptions = document.querySelector("#profile-options")
const step = document.querySelector("#step")
let darkMode = false

const personalLocation = document.querySelector("#personal-location")
const imageLink = document.querySelector("#image-link")
const firstFormation = document.querySelector("#first-formation")

let stepEmoje = "🙂"

// Funções

function modoNoturno() {
    const colors = {
        '--paper-shadow': '#000',
        '--list-color': '#7d9eb0',
        '--link-color': '#a3d4ed',
        '--page-count-color': '#839fad',
        '--cor-fundo': '#2b2b2b',
        '--paper-color': '#000000',
        '--subtitles-background-color': '#1e1e1e',
        '--square-color': '#141414',
        '--img-font-color': '#ffffff',
        '--img-background-color': '#0000008c',
    };

    for (const property in colors) {
        document.documentElement.style.setProperty(property, colors[property]);
    }
}

function modoNormal() {
    const colors = {
        '--paper-shadow': '#000',
        '--list-color': '#365B6D',
        '--link-color': '#387ea1',
        '--page-count-color': '#567686',
        '--cor-fundo': '#dfdfdf',
        '--paper-color': '#fff',
        '--subtitles-background-color': '#f2f1ec',
        '--square-color': '#f6f6f6',
        '--img-font-color': '#ffffff',
        '--img-background-color': '#0000008c',
    };

    for (const property in colors) {
        document.documentElement.style.setProperty(property, colors[property]);
    }
}

nomearPaginas()

function nomearPaginas() {
    var profilePages = document.querySelectorAll('.profile-page');
    for (var i = 0; i < profilePages.length; i++) {
        var pageNumber = i + 1;
        var pageCount = document.createElement('p');
        pageCount.className = 'page-count';
        pageCount.innerHTML = 'Pedro Augusto <span class="bold">pag.' + pageNumber + '</span>';
        profilePages[i].appendChild(pageCount);
    }
}


// eventos

profileOptions.addEventListener("mouseenter", () => {
    profileOptions.style.transform = "scale(1.05)"
    if (darkMode === false) {
        step.innerText = "🥱"
    } else {
        step.innerText = "🙂"
    }

})

profileOptions.addEventListener("mouseleave", () => {
    profileOptions.style.transform = "scale(1)"
    step.innerText = stepEmoje
})

profileOptions.addEventListener('click', () => {
    if (darkMode === false) {
        modoNoturno();
        darkMode = true
        localStorage.setItem("darkMode", darkMode)

        step.innerText = "😴"
        stepEmoje = "😴"
        modeButtonText.innerText = "Modo noturno";

        profileOptions.classList.remove("normal-mode")
        profileOptions.classList.remove("day")
        profileOptions.classList.add("night")

    } else {
        modoNormal()
        darkMode = false
        localStorage.setItem("darkMode", darkMode)

        step.innerText = "😎"
        stepEmoje = "😎"
        modeButtonText.innerText = "Modo claro";

        profileOptions.classList.remove("normal-mode")
        profileOptions.classList.remove("night")
        profileOptions.classList.add("day")
    }
})

personalLocation.addEventListener("mouseenter", () => {
    step.innerText = "🏠"
})

personalLocation.addEventListener("mouseleave", () => {
    step.innerText = stepEmoje

})

imageLink.addEventListener("mouseenter", () => {
    step.innerText = "🤗"
})

imageLink.addEventListener("mouseleave", () => {
    step.innerText = stepEmoje
})

// firstFormation.addEventListener("mouseenter", () => {
//     step.innerText = "👨🏻‍🎓"
// })

// firstFormation.addEventListener("mouseleave", () => {
//     step.innerText = stepEmoje
// })