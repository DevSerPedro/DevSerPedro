// Declarações

const modeButtonText = document.querySelector("#mode-button-text")
const profileOptions = document.querySelector("#profile-options")
const step = document.querySelector("#step")
let darkMode = false

const personalLocation = document.querySelector("#personal-location")
const imageLink = document.querySelector("#image-link")
const firstFormation = document.querySelector("#first-formation")

let stepEmoje = "🙂"

const certificateImgContainer = document.getElementById('certificate-img-container');
const certificateImg = document.getElementById("certificate-img")
let zoom = true
let zoomClick = false
let zoomScale = 1.5

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

function startZoom(event) {
    if (zoom === true) {
        const rect = certificateImgContainer.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        certificateImg.style.transformOrigin = `${x}px ${y}px`
        certificateImg.style.transform = `scale(${zoomScale})`
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

certificateImgContainer.addEventListener("click", (event) => {
    if (zoom === true) {
        certificateImgContainer.style.cursor = "zoom-in"
        zoom = false

        certificateImg.style.transformOrigin = "center center"
        certificateImg.style.transform = "scale(1)"
        zoomScale = 1.5

    } else {
        certificateImgContainer.style.cursor = "zoom-out"
        zoom = true

        startZoom(event)
        certificateImgContainer.addEventListener('mousemove', function (event) {
            if (zoom === true) {
                const rect = certificateImgContainer.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                certificateImg.style.transformOrigin = `${x}px ${y}px`
                certificateImg.style.transform = `scale(${zoomScale})`
            }
        })
    }

})

certificateImgContainer.addEventListener("mouseenter", () => {
    document.body.style.overflow = 'hidden';
})

certificateImgContainer.addEventListener("mouseleave", () => {
    zoom = false
    certificateImgContainer.style.cursor = "zoom-in"
    certificateImg.style.transformOrigin = "center center"
    certificateImg.style.transform = "scale(1)"

    document.body.style.overflow = 'auto';

    zoomScale = 1.5
})

certificateImgContainer.addEventListener("wheel", (event) => {
    var zoomIncrement = 0.1;

    if (zoom === true) {
        if (event.deltaY < 0) {
            zoomScale = Math.min(zoomScale + zoomIncrement, 5);
            startZoom(event)
        } else {
            zoomScale = Math.max(zoomScale - zoomIncrement, 1);
            startZoom(event)
        }
        if (zoomScale < 0) {
            zoomScale = 0;
            startZoom(event)
        }
    }
})

function handleLiClick(event) {
    if (event.target.tagName === 'LI') {
        const lis = document.querySelectorAll('li');
        lis.forEach(li => li.classList.remove('highlight'));

        event.target.classList.add('highlight');

        const certificateImg = document.getElementById("certificate-img")
        certificateImg.src = `https://github.com/DevPedroAugusto/DevPedroAugusto/blob/main/assets/certificates/empng/${event.target.id}.png?raw=true`
    }
}


document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === 'p' || event.key === 'P')) {
        console.log('Você pressionou Ctrl + P');

        const infoCertificates = document.getElementById("info-certificates")

        infoCertificates.style.display = "block"

        setTimeout(() => {
            infoCertificates.style.display = "none"
        }, 500)
    }
});