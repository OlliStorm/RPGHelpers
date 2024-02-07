let items = [
    {
        "name": "Langschwert",
        "type": "Nahkampf",
        "damage": 8
    },
    {
        "name": "Kurzschwert",
        "type": "Nahkampf",
        "damage": 6
    },
    {
        "name": "Lederhelm",
        "type": "Helm",
        "armor": 0.5
    },
    {
        "name": "Lederbrustpanzer",
        "type": "Brustpanzer",
        "armor": 1
    },
    {
        "name": "Lederbeinschienen",
        "type": "Hose",
        "armor": 0.5
    },
    {
        "name": "Kettenhelm",
        "type": "Helm",
        "armor": 1
    },
    {
        "name": "Kettenhemd",
        "type": "Brustpanzer",
        "armor": 2
    },
    {
        "name": "Kettenhose",
        "type": "Hose",
        "armor": 1
    },
    {
        "name": "Vollvisierhelm",
        "type": "Helm",
        "armor": 1.5
    },
    {
        "name": "Plattenbrustpanzer",
        "type": "Brustpanzer",
        "armor": 3
    },
    {
        "name": "Plattenbeinschienen",
        "type": "Hose",
        "armor": 1.5
    },
    {
        "name": "Heiltrank",
        "type": "Verbrauchsgegenstand",
        "additionalInfo": "Heilt 20 Lebenspunkte"
    }
];

let difficulties = [
    {
        "name": "Geschenkt",
        "color": "rgb(180, 220, 255)",
        "difficulty": 5
    },
    {
        "name": "Kinderspiel",
        "color": "rgb(150, 180, 255)",
        "difficulty": 10
    },
    {
        "name": "Einfach",
        "color": "rgb(150, 255, 150)",
        "difficulty": 15
    },
    {
        "name": "Machbar",
        "color": "rgb(255, 255, 200)",
        "difficulty": 25
    },
    {
        "name": "Herausfordernd",
        "color": "rgb(245, 200, 150)",
        "difficulty": 35
    },
    {
        "name": "Schwierig",
        "color": "rgb(255, 185, 160)",
        "difficulty": 50
    },
    {
        "name": "Sehr schwierig",
        "color": "rgb(255, 150, 150)",
        "difficulty": 75
    },
    {
        "name": "Fast unmöglich",
        "color": "rgb(255, 100, 100)",
        "difficulty": 90
    }
];

function loadSuccessEvaluation() {
    let content = "<h3>Erfolgswurf</h3><div>";

    for (let i = 0; i < difficulties.length; i++) {
        content += `
            <button 
                type="button"
                style="
                    background-color: ${difficulties[i].color};
                    border-color: color-mix(in srgb, ${difficulties[i].color} 75%, black);
                "
                onclick="evaluateSuccess(${i})"
            >${difficulties[i].name}</button>
        `;
    }

    content += "</div>";

    document.getElementById("success-evaluation").innerHTML = content;
}

function evaluateSuccess(difficulty) {
    let randomNumber = Math.floor(Math.random() * 100);
    let successThreshold = difficulties[difficulty].difficulty;
    let success = randomNumber >= successThreshold;

    let content = "";

    if (success) {
        let overshoot = ((randomNumber - successThreshold) / (100 - successThreshold) * 100).toFixed(2);
        if (overshoot < 10) {
            content += "Knapper Erfolg";
        } else if (overshoot < 25) {
            content += "Erfolg";
        } else if (overshoot <= 75) {
            content += "Klarer Erfolg";
        } else {
            content += "Kritischer Erfolg";
        }
    } else {
        let undershoot = ((successThreshold - randomNumber) / successThreshold * 100).toFixed(2);;
        if (undershoot < 20) {
            content += "Knapper Misserfolg";
        } else if (undershoot < 50) {
            content += "Misserfolg";
        } else if (undershoot <= 85) {
            content += "Klarer Misserfolg";
        } else {
            content += "Kritischer Misserfolg";
        }
    }

    document.getElementById("success-evaluation-result").innerHTML = content;
}

function loadItemRegistry() {
    let dropdownContent = "<select id='item-selection'><option value='all'>Alle Kategorien</option>";
    let itemTypes = [];
    for (let i = 0; i < items.length; i++) {
        if (!itemTypes.includes(items[i].type)) {
            itemTypes.push(items[i].type);
            dropdownContent += `<option value="${items[i].type}">${items[i].type}</option>`;
        }
    }
    dropdownContent += "</select>";

    let content = `
        <h3>Item Verzeichnis</h3>
        ${dropdownContent}
        <table id="item-registry-result">
            <tr>
                <th>Name</th>
                <th>Typ</th>
                <th>Stats</th>
            <tr>
        </table>`;
    document.getElementById("item-registry").innerHTML = content;

    document.getElementById("item-selection").addEventListener("change", filterItems);
    filterItems();
}

function filterItems() {
    let content = `<tr>
        <th>Name</th>
        <th>Typ</th>
        <th>Stats</th>
    <tr>`;
    for (let i = 0; i < items.length; i++) {
        if (document.getElementById("item-selection").value !== "all" && items[i].type !== document.getElementById("item-selection").value) {
            continue;
        }
        let additionalInfo = "";
        if (items[i].hasOwnProperty("damage")) {
            additionalInfo += `${items[i].damage} Schaden`;
        }
        if (items[i].hasOwnProperty("armor")) {
            additionalInfo += `+${items[i].armor} Rüstungspunkte`;
        }
        if (items[i].hasOwnProperty("additionalInfo")) {
            additionalInfo += items[i].additionalInfo;
        }

        content += `
            <tr>
                <td>${items[i].name}</td>
                <td>${items[i].type}</td>
                <td>${additionalInfo}</td>
            </tr>
        `;
    }

    document.getElementById("item-registry-result").innerHTML = content;
}

//when item selection changes, filter items

loadSuccessEvaluation();
loadItemRegistry();