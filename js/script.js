const colorSchemeForm = document.getElementById("color-scheme-form");
const modeSelector = document.getElementById("mode-selector");
const colorPicker = document.getElementById("color-picker");
const colorSchemesContainer = document.getElementById("color-schemes-container");

const test = document.getElementById("test");

colorSchemeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const mode = modeSelector.value;
    const color = colorPicker.value.slice(1);
    
    fetchColor(color, mode);
});



function fetchColor(color, mode){
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(response => response.json())
        .then(data => {
            const colorArr = data.colors.map(element => element.hex.value);
            render(colorArr);
        });
}

function render(colorArr){
    let html = "";
    colorArr.forEach((element, index) => {
        html += `<div class="color-scheme">
                    <div class="color-scheme-container" style="background-color: ${element}"></div>
                    <p>${element}</p>
                </div>`;
    })

    colorSchemesContainer.innerHTML = html;
}