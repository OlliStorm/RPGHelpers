let items = [
    {
        "name": "Dolch",
        "type": ["Waffe", "Nahkampf"],
        "damage": 4
    },
    {
        "name": "Kurzschwert",
        "type": ["Waffe", "Nahkampf"],
        "damage": 6
    },
    {
        "name": "Langschwert",
        "type": ["Waffe", "Nahkampf"],
        "damage": 8
    },
    {
        "name": "Axt",
        "type": ["Waffe", "Nahkampf"],
        "damage": 6
    },
    {
        "name": "Speer",
        "type": ["Waffe", "Nahkampf", "Fernkampf"],
        "additionalInfo": "7 Schaden im Nahkampf<br>5 Schaden wenn Geworfen"
    },
    {
        "name": "Bogen",
        "type": ["Waffe", "Fernkampf"],
        "damage": 5,
        "additionalInfo": "Verbraucht 1x Pfeil pro Schuss"
    },
    {
        "name": "Armbrust",
        "type": ["Waffe", "Fernkampf"],
        "damage": 7,
        "additionalInfo": "Verbraucht 1x Pfeil pro Schuss"
    },
    {
        "name": "Lederhelm",
        "type": ["Rüstung", "Helm"],
        "armor": 0.5
    },
    {
        "name": "Lederbrustpanzer",
        "type": ["Rüstung", "Brustpanzer"],
        "armor": 1
    },
    {
        "name": "Lederbeinschienen",
        "type": ["Rüstung", "Hose"],
        "armor": 0.5
    },
    {
        "name": "Kettenhelm",
        "type": ["Rüstung", "Helm"],
        "armor": 1
    },
    {
        "name": "Kettenhemd",
        "type": ["Rüstung", "Brustpanzer"],
        "armor": 2
    },
    {
        "name": "Kettenhose",
        "type": ["Rüstung", "Hose"],
        "armor": 1
    },
    {
        "name": "Vollvisierhelm",
        "type": ["Rüstung", "Helm"],
        "armor": 1.5
    },
    {
        "name": "Plattenbrustpanzer",
        "type": ["Rüstung", "Brustpanzer"],
        "armor": 3
    },
    {
        "name": "Plattenbeinschienen",
        "type": ["Rüstung", "Hose"],
        "armor": 1.5
    },
    {
        "name": "Gewöhnlicher Pfeil",
        "type": ["Verbrauchsgut", "Munition"],
    },
    {
        "name": "Brandfeil",
        "type": ["Verbrauchsgut", "Munition"],
        "additionalInfo": "Verursacht zusätzlich 3 Feuerschaden<br>Kann leicht entzündbare Materialien in Brand setzen"
    },
    {
        "name": "Giftpfeil",
        "type": ["Verbrauchsgut", "Munition"],
        "additionalInfo": "Verursacht Vergiftung II für 3 Runden"
    },
    {
        "name": "Schwacher Heiltrank",
        "type": ["Verbrauchsgut"],
        "additionalInfo": "Heilt sofort 10 Lebenspunkte"
    },
    {
        "name": "Heiltrank",
        "type": ["Verbrauchsgut"],
        "additionalInfo": "Heilt sofort 20 Lebenspunkte"
    },
    {
        "name": "Starker Heiltrank",
        "type": ["Verbrauchsgut"],
        "additionalInfo": "Heilt sofort 50 Lebenspunkte"
    },
    {
        "name": "Trank der Schnelligkeit",
        "type": ["Verbrauchsgut"],
        "additionalInfo": "Erhöht die Kampfpunktezahl um 1 für 3 Runden",
    },
    {
        "name": "Rauchbombe",
        "type": ["Verbrauchsgut"],
        "additionalInfo": "Erzeugt eine Rauchwolke mit 4m Durchmesser, die die Sicht behindert"
    },
    {
        "name": "Wurfbombe",
        "type": ["Verbrauchsgut"],
        "additionalInfo": "Verursacht 10 Schaden in einem 3m Radius<br>Schleudert getroffene Gegner weg"
    },
    {
        "name": "Gift",
        "type": ["Verbrauchsgut"],
        "additionalInfo": "Kann auf Waffen aufgetragen werden, um beim nächsten Treffer Vergiftung III für 3 Runden zu verursachen<br>Verursacht Vergiftung V für 3 Runden, wenn konsumiert<br>Kann genutzt werden, um 5 gewöhnliche Pfeile in Giftpfeile zu verwandeln",
    },
    {
        "name": "Starkes Gift",
        "type": ["Verbrauchsgut"],
        "additionalInfo": "Kann auf Waffen aufgetragen werden, um beim nächsten Treffer Vergiftung V für 3 Runden zu verursachen<br>Verursacht Vergiftung X für 3 Runden, wenn konsumiert<br>Kann genutzt werden, um 10 gewöhnliche Pfeile in Giftpfeile zu verwandeln",
    },
    {
        "name": "Fackel",
        "type": ["Waffe", "Nahkampf"],
        "additionalInfo": "Verursacht 3 Feuerschaden<br>Kann leicht entzündbare Materialien in Brand setzen"
    },
    {
        "name": "Holzschild",
        "type": ["Schild"],
        "armor": 1
    },
    {
        "name": "Eisenschild",
        "type": ["Schild"],
        "armor": 2
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
        for (let j = 0; j < items[i].type.length; j++) {
            if (!itemTypes.includes(items[i].type[j])) {
                itemTypes.push(items[i].type[j]);
                dropdownContent += `<option value="${items[i].type[j]}">${items[i].type[j]}</option>`;
            }
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
        if (document.getElementById("item-selection").value !== "all" && !items[i].type.includes(document.getElementById("item-selection").value)) {
            continue;
        }
        let additionalInfo = "";
        if (items[i].hasOwnProperty("damage")) {
            additionalInfo += `${items[i].damage} Schaden<br>`;
        }
        if (items[i].hasOwnProperty("armor")) {
            additionalInfo += `+${items[i].armor} Rüstungspunkte<br>`;
        }
        if (items[i].hasOwnProperty("additionalInfo")) {
            additionalInfo += items[i].additionalInfo + "<br>";
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