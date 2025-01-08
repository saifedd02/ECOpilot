const botKnowledge = {
    'scopes_general': {
        pattern: /was sind scopes|scopes erklären|scope bedeutung/i,
        response: `Die CO₂-Emissionen werden in drei Scopes eingeteilt:

        Scope 1 - Direkte Emissionen:
        • Emissionen aus eigenen Anlagen
        • Firmeneigene Fahrzeuge
        • Eigene Heizungsanlagen

        Scope 2 - Indirekte Energieemissionen:
        • Zugekaufter Strom
        • Fernwärme
        • Dampf und Kühlung

        Scope 3 - Sonstige indirekte Emissionen:
        • Geschäftsreisen
        • Pendeln der Mitarbeiter
        • Logistik & Transport
        • Abfälle & Materialien`
    },

    'scope1_details': {
        pattern: /scope 1|direkte emissionen|firmeneigene/i,
        response: `Scope 1 umfasst alle direkten Emissionen:

        1. Stationäre Verbrennung:
        • Heizungsanlagen
        • Produktionsanlagen
        • Notstromaggregate

        2. Mobile Verbrennung:
        • Firmenfahrzeuge
        • Gabelstapler
        • Baumaschinen

        3. Prozessemissionen:
        • Chemische Reaktionen
        • Produktion
        • Verarbeitung

        4. Flüchtige Emissionen:
        • Klimaanlagen
        • Kältemittel
        • Lecks`
    },

    'scope2_details': {
        pattern: /scope 2|indirekte energie|strom|fernwärme/i,
        response: `Scope 2 betrifft zugekaufte Energie:

        1. Stromverbrauch:
        • Bürogebäude
        • Produktionsanlagen
        • IT-Infrastruktur

        2. Fernwärme:
        • Heizung
        • Warmwasser
        • Prozesswärme

        3. Optimierungsmöglichkeiten:
        • Grünstrom-Bezug
        • Energieeffizienz
        • Eigenproduktion`
    },

    'scope3_details': {
        pattern: /scope 3|indirekte emissionen|lieferkette/i,
        response: `Scope 3 umfasst weitere indirekte Emissionen:

        1. Vorgelagerte Aktivitäten:
        • Rohstoffe & Materialien
        • Verpackung
        • Transport & Logistik

        2. Nachgelagerte Aktivitäten:
        • Produktnutzung
        • Entsorgung
        • Recycling

        3. Sonstige:
        • Geschäftsreisen
        • Pendeln
        • Abfallentsorgung`
    },

    'reduction_tips': {
        pattern: /reduzieren|einsparen|vermeiden|tipps/i,
        response: `Tipps zur CO₂-Reduktion:

        1. Energieeffizienz:
        • LED-Beleuchtung
        • Energieeffiziente Geräte
        • Intelligente Steuerung

        2. Mobilität:
        • E-Fahrzeuge
        • Fahrgemeinschaften
        • Video-Konferenzen

        3. Gebäude:
        • Dämmung verbessern
        • Heizungsoptimierung
        • Grünstrom nutzen

        4. Prozesse:
        • Digitalisierung
        • Materialeffizienz
        • Abfallvermeidung`
    },

    'calculation_help': {
        pattern: /berechnung|berechnen|kalkulation/i,
        response: `Hilfe zur CO₂-Berechnung:

        1. Emissionsfaktoren:
        • Strom: 0,420 kg CO₂/kWh
        • Erdgas: 0,201 kg CO₂/kWh
        • Diesel: 2,65 kg CO₂/L
        • Benzin: 2,37 kg CO₂/L

        2. Grundformel:
        Aktivitätsdaten × Emissionsfaktor = CO₂-Emissionen

        3. Beispiel:
        10.000 kWh Strom × 0,420 kg CO₂/kWh = 4.200 kg CO₂`
    },

    'best_practices': {
        pattern: /best practice|beispiele|erfolgsbeispiele/i,
        response: `Best Practices für Unternehmen:

        1. Energie:
        • Photovoltaik-Anlagen
        • Energiemanagementsysteme
        • Wärmerückgewinnung

        2. Mobilität:
        • E-Ladesäulen
        • Jobtickets
        • Homeoffice-Konzepte

        3. Materialien:
        • Kreislaufwirtschaft
        • Recycling-Konzepte
        • Verpackungsoptimierung`
    },

    'reporting': {
        pattern: /reporting|berichten|dokumentation/i,
        response: `CO₂-Berichterstattung:

        1. Standards:
        • GHG Protocol
        • ISO 14064
        • CDP

        2. Wichtige Elemente:
        • Systemgrenzen
        • Bezugsjahr
        • Vollständigkeit

        3. Dokumentation:
        • Datenquellen
        • Berechnungsmethoden
        • Annahmen`
    },

    'certification': {
        pattern: /zertifizierung|standard|iso/i,
        response: `Relevante Zertifizierungen:

        1. Umweltmanagement:
        • ISO 14001
        • EMAS
        • ISO 50001

        2. CO₂-Bilanzierung:
        • ISO 14064
        • PAS 2060
        • GHG Protocol

        3. Produkte:
        • Carbon Footprint
        • PCF (Product Carbon Footprint)
        • Klimaneutrale Produkte`
    },

    'funding': {
        pattern: /förderung|zuschüsse|unterstützung/i,
        response: `Fördermöglichkeiten:

        1. Energieeffizienz:
        • BAFA-Förderungen
        • KfW-Programme
        • Länderförderungen

        2. Erneuerbare Energien:
        • EEG-Vergütung
        • Investitionszuschüsse
        • Steuervorteile

        3. Beratung:
        • Energieberatung
        • Klimaschutzberatung
        • Transformationsberatung`
    }
};
function toggleChat() {
    document.getElementById('chatbot-bubble').classList.toggle('minimized');
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (message) {
        addMessage(message, 'user');
        processMessage(message);
        input.value = '';
    }
}

function sendQuickReply(message) {
    addMessage(message, 'user');
    processMessage(message);
}

function processMessage(message) {
    let response = "Tut mir leid, ich verstehe Ihre Frage nicht. Können Sie sie anders formulieren?";
    
    for (const key in botKnowledge) {
        if (botKnowledge[key].pattern.test(message)) {
            response = botKnowledge[key].response;
            break;
        }
    }

    setTimeout(() => addMessage(response, 'bot'), 500);
}

function addMessage(text, sender) {
    const messages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Emissionsfaktoren für verschiedene technische Gase


function addGas() {
    const gasFields = document.getElementById('gasFields');
    const gasId = 'gas-' + Date.now();
    
    const gasHtml = `
        <div class="dynamic-field" id="${gasId}">
            <div class="form-group">
                <label>Gas Type</label>
                <select name="gasType" class="gas-type" required onchange="updateGasFields('${gasId}')">
                    ${Object.keys(TECHNICAL_GAS_FACTORS).map(gas => 
                        `<option value="${gas}">${gas}</option>`
                    ).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>Standort</label>
                <input type="text" class="location" placeholder="Standort eingeben" required>
            </div>
            <div class="form-group">
                <label>Menge (kg)</label>
                <input type="number" class="amount" min="0" step="0.01" 
                       placeholder="Menge in kg" required onchange="calculateGasEmissions('${gasId}')">
            </div>
            <div class="form-group">
                <label>CO₂-Äquivalent (kg)</label>
                <input type="number" class="co2-equivalent" readonly>
            </div>
            <button type="button" class="remove-field" onclick="removeGas('${gasId}')">Entfernen</button>
        </div>
    `;
    
    gasFields.insertAdjacentHTML('beforeend', gasHtml);
}

function removeGas(gasId) {
    document.getElementById(gasId).remove();
    updateTotalEmissions();
}

function calculateGasEmissions(gasId) {
    const container = document.getElementById(gasId);
    const gasType = container.querySelector('.gas-type').value;
    const amount = parseFloat(container.querySelector('.amount').value) || 0;
    const factor = TECHNICAL_GAS_FACTORS[gasType];
    
    const co2Equivalent = amount * factor;
    container.querySelector('.co2-equivalent').value = co2Equivalent.toFixed(2);
    
    updateTotalEmissions();
}

function updateTotalEmissions() {
    const allGasFields = document.querySelectorAll('#gasFields .dynamic-field');
    let totalEmissions = 0;
    
    allGasFields.forEach(field => {
        const co2Value = parseFloat(field.querySelector('.co2-equivalent').value) || 0;
        totalEmissions += co2Value;
    });
    
    // Update the total emissions display
    const totalDisplay = document.getElementById('totalGasEmissions');
    if (totalDisplay) {
        totalDisplay.textContent = `Gesamt CO₂-Äquivalent: ${totalEmissions.toFixed(2)} kg`;
    }
}

function updateGasFields(gasId) {
    calculateGasEmissions(gasId);
}

// Funktion zum Exportieren der Daten
function exportGasData() {
    const gasData = [];
    const allGasFields = document.querySelectorAll('#gasFields .dynamic-field');
    
    allGasFields.forEach(field => {
        gasData.push({
            gasType: field.querySelector('.gas-type').value,
            location: field.querySelector('.location').value,
            amount: field.querySelector('.amount').value,
            co2Equivalent: field.querySelector('.co2-equivalent').value
        });
    });
    
    return gasData;
}
function addVehicle() {
    const vehicleFields = document.getElementById('vehicleFields');
    const vehicleId = 'vehicle-' + Date.now();
    
    const vehicleHtml = `
        <div class="dynamic-field" id="${vehicleId}">
            <select name="vehicleType" required>
                <option value="benzin">Benzin</option>
                <option value="diesel">Diesel</option>
                <option value="hybrid">Hybrid</option>
                <option value="elektro">Elektro</option>
            </select>
            <input type="number" placeholder="Kilometerleistung pro Jahr" required>
            <input type="number" placeholder="Verbrauch l/100km" required>
            <input type="number" placeholder="Privatnutzung %" min="0" max="100" required>
            <button type="button" class="remove-field" onclick="removeField('${vehicleId}')">Entfernen</button>
        </div>
    `;
    vehicleFields.insertAdjacentHTML('beforeend', vehicleHtml);
}

function addTransport() {
    const transportFields = document.getElementById('transportFields');
    const transportId = 'transport-' + Date.now();
    
    const transportHtml = `
        <div class="dynamic-field" id="${transportId}">
            <select name="transportType" required>
                <option value="lkw">LKW</option>
                <option value="transporter">Transporter</option>
            </select>
            <input type="number" placeholder="Kilometerleistung pro Jahr" required>
            <input type="number" placeholder="Verbrauch l/100km" required>
            <input type="number" placeholder="Durchschnittliche Auslastung %" min="0" max="100" required>
            <button type="button" class="remove-field" onclick="removeField('${transportId}')">Entfernen</button>
        </div>
    `;
    transportFields.insertAdjacentHTML('beforeend', transportHtml);
}

function addHeating() {
    const heatingFields = document.getElementById('heatingFields');
    const heatingId = 'heating-' + Date.now();
    
    const heatingHtml = `
        <div class="dynamic-field" id="${heatingId}">
            <select name="heatingType" required>
                <option value="gas">Erdgas</option>
                <option value="oil">Heizöl</option>
                <option value="pellets">Pellets</option>
                <option value="fernwaerme">Fernwärme</option>
            </select>
            <input type="number" placeholder="Verbrauch pro Jahr" required>
            <input type="text" placeholder="Standort" required>
            <button type="button" class="remove-field" onclick="removeField('${heatingId}')">Entfernen</button>
        </div>
    `;
    heatingFields.insertAdjacentHTML('beforeend', heatingHtml);
}

// Similar functions for other sections...

function removeField(id) {
    document.getElementById(id).remove();
}


// Emissionsfaktoren für verschiedene Fahrzeugtypen (kg CO2/Einheit)
const EMISSION_FACTORS = {
'benzin': 0.18374,
'diesel': 0.20716,
'hybrid': 0.20716, // Basis-Diesel-Faktor, wird mit Stromanteil verrechnet
'vollstromer': 0.442  // Faktor für Strommix Deutschland
};

// Funktion zum Hinzufügen eines neuen Fahrzeugs
function addVehicle() {
const vehicleFields = document.getElementById('vehicleFields');
const vehicleId = 'vehicle-' + Date.now();

const vehicleHtml = `
<div class="dynamic-field" id="${vehicleId}">
    <div class="form-group">
        <label>Mitarbeiternummer</label>
        <input type="number" class="employee-number" required>
    </div>
    <div class="form-group">
        <label>Fahrzeugtyp</label>
        <select class="vehicle-type" required onchange="updateVehicleFields('${vehicleId}')">
            <option value="benzin">Benzin</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Hybrid</option>
            <option value="vollstromer">Vollstromer</option>
        </select>
    </div>
    <div class="form-group">
        <label>Jahresleistung (km)</label>
        <input type="number" class="annual-mileage" min="0" required 
               onchange="calculateVehicleEmissions('${vehicleId}')">
    </div>
    <div class="form-group">
        <label>Privatnutzung (%)</label>
        <input type="number" class="private-usage" min="0" max="100" required 
               onchange="calculateVehicleEmissions('${vehicleId}')">
    </div>
    <div class="hybrid-fields" style="display: none;">
        <div class="form-group">
            <label>Stromanteil (%)</label>
            <input type="number" class="electricity-share" min="0" max="100" 
                   onchange="calculateVehicleEmissions('${vehicleId}')">
        </div>
        <div class="form-group">
            <label>Stromverbrauch (kWh/100km)</label>
            <input type="number" class="electricity-consumption" min="0" 
                   onchange="calculateVehicleEmissions('${vehicleId}')">
        </div>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeVehicle('${vehicleId}')">Entfernen</button>
</div>
`;

vehicleFields.insertAdjacentHTML('beforeend', vehicleHtml);
}

// Aktualisiert die Felder basierend auf dem Fahrzeugtyp
function updateVehicleFields(vehicleId) {
const container = document.getElementById(vehicleId);
const vehicleType = container.querySelector('.vehicle-type').value;
const hybridFields = container.querySelector('.hybrid-fields');

hybridFields.style.display = (vehicleType === 'hybrid') ? 'block' : 'none';
calculateVehicleEmissions(vehicleId);
}

// Berechnet die CO2-Emissionen für ein einzelnes Fahrzeug
function calculateVehicleEmissions(vehicleId) {
const container = document.getElementById(vehicleId);
const vehicleType = container.querySelector('.vehicle-type').value;
const annualMileage = parseFloat(container.querySelector('.annual-mileage').value) || 0;
const privateUsage = parseFloat(container.querySelector('.private-usage').value) || 0;

let emissions = 0;
const businessUsageShare = (100 - privateUsage) / 100;

if (vehicleType === 'hybrid') {
const electricityShare = parseFloat(container.querySelector('.electricity-share').value) || 0;
const electricityConsumption = parseFloat(container.querySelector('.electricity-consumption').value) || 0;

// Berechnung für Hybridfahrzeuge
const electricKm = annualMileage * (electricityShare / 100);
const fuelKm = annualMileage * (1 - electricityShare / 100);

emissions = (
    (fuelKm * EMISSION_FACTORS.diesel / 100) +
    (electricKm * electricityConsumption / 100 * EMISSION_FACTORS.vollstromer)
) * businessUsageShare;
} else {
// Berechnung für andere Fahrzeugtypen
emissions = annualMileage * EMISSION_FACTORS[vehicleType] * businessUsageShare;
}

container.querySelector('.co2-emissions').value = emissions.toFixed(2);
updateTotalEmissions();
}

// Aktualisiert die Gesamtemissionen
function updateTotalEmissions() {
const allVehicles = document.querySelectorAll('#vehicleFields .dynamic-field');
let totalEmissions = {
benzin: 0,
diesel: 0,
hybrid: 0,
vollstromer: 0
};

allVehicles.forEach(vehicle => {
const type = vehicle.querySelector('.vehicle-type').value;
const emissions = parseFloat(vehicle.querySelector('.co2-emissions').value) || 0;
totalEmissions[type] += emissions;
});

// Aktualisiere die Summenanzeige
document.getElementById('totalVehicleEmissions').innerHTML = `
<div class="totals-grid">
    <div>Benzin: ${totalEmissions.benzin.toFixed(2)} kg CO₂</div>
    <div>Diesel: ${totalEmissions.diesel.toFixed(2)} kg CO₂</div>
    <div>Hybrid: ${totalEmissions.hybrid.toFixed(2)} kg CO₂</div>
    <div>Vollstromer: ${totalEmissions.vollstromer.toFixed(2)} kg CO₂</div>
    <div class="total-sum">Gesamt: ${Object.values(totalEmissions).reduce((a, b) => a + b, 0).toFixed(2)} kg CO₂</div>
</div>
`;
}

// Entfernt ein Fahrzeug
function removeVehicle(vehicleId) {
document.getElementById(vehicleId).remove();
updateTotalEmissions();
}

// Exportiert die Fahrzeugdaten
function exportVehicleData() {
const vehicleData = [];
const allVehicles = document.querySelectorAll('#vehicleFields .dynamic-field');

allVehicles.forEach(vehicle => {
vehicleData.push({
    employeeNumber: vehicle.querySelector('.employee-number').value,
    vehicleType: vehicle.querySelector('.vehicle-type').value,
    annualMileage: vehicle.querySelector('.annual-mileage').value,
    privateUsage: vehicle.querySelector('.private-usage').value,
    co2Emissions: vehicle.querySelector('.co2-emissions').value
});
});

return vehicleData;
} 
// Emissionsfaktoren für verschiedene LKW-Typen (kg CO2/km)


function addTransport() {
const transportFields = document.getElementById('transportFields');
const transportId = 'transport-' + Date.now();

const transportHtml = `
<div class="dynamic-field" id="${transportId}">
    <div class="form-group">
        <label>Fahrzeugnummer</label>
        <input type="number" class="vehicle-number" required>
    </div>
    <div class="form-group">
        <label>Fahrzeugtyp</label>
        <select class="transport-type" required onchange="calculateTransportEmissions('${transportId}')">
            ${Object.keys(TRANSPORT_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Jahresleistung (km)</label>
        <input type="number" class="annual-mileage" min="0" required 
               onchange="calculateTransportEmissions('${transportId}')"
               placeholder="z.B. 10000">
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeTransport('${transportId}')">Entfernen</button>
</div>
`;

transportFields.insertAdjacentHTML('beforeend', transportHtml);
}

function calculateTransportEmissions(transportId) {
const container = document.getElementById(transportId);
const transportType = container.querySelector('.transport-type').value;
const annualMileage = parseFloat(container.querySelector('.annual-mileage').value) || 0;

// Berechnung der Emissionen
const emissions = annualMileage * TRANSPORT_EMISSION_FACTORS[transportType];

// Setze berechnete Emissionen
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalTransportEmissions();
}

function updateTotalTransportEmissions() {
const allTransports = document.querySelectorAll('#transportFields .dynamic-field');
let totalEmissions = {};

// Initialisiere Summen für jeden Fahrzeugtyp
Object.keys(TRANSPORT_EMISSION_FACTORS).forEach(type => {
totalEmissions[type] = 0;
});

// Berechne Summen pro Fahrzeugtyp
allTransports.forEach(transport => {
const type = transport.querySelector('.transport-type').value;
const emissions = parseFloat(transport.querySelector('.co2-emissions').value) || 0;
totalEmissions[type] += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, value]) => {
summaryHtml += `<div>${type}: ${value.toFixed(2)} kg CO₂</div>`;
});

// Gesamtsumme
const totalSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
summaryHtml += `<div class="total-sum">Gesamt: ${totalSum.toFixed(2)} kg CO₂</div></div>`;

// Aktualisiere die Anzeige
document.getElementById('totalTransportEmissions').innerHTML = summaryHtml;
}

function removeTransport(transportId) {
document.getElementById(transportId).remove();
updateTotalTransportEmissions();
}

// Funktion zum Exportieren der Transportdaten
function exportTransportData() {
const transportData = [];
const allTransports = document.querySelectorAll('#transportFields .dynamic-field');

allTransports.forEach(transport => {
transportData.push({
    vehicleNumber: transport.querySelector('.vehicle-number').value,
    transportType: transport.querySelector('.transport-type').value,
    annualMileage: transport.querySelector('.annual-mileage').value,
    co2Emissions: transport.querySelector('.co2-emissions').value
});
});

return transportData;
} 
// Emissionsfaktoren für verschiedene Energieträger (kg CO2/kWh)
const HEATING_EMISSION_FACTORS = {
'Erdgas': 0.201,
'Heizöl': 0.31404,
'Atöl': 0.3,
'Biodiesel': 0.07,
'Biogas': 0.152,
'Biomasse Holz': 0.027,
'Braunkohle': 0.383,
'Deponigas': 0.05,
'Holz-Pellets': 0.036,
'Steinkohle': 0.335,
'Wasserstoff': 0.385
};

function addHeatingSystem() {
const heatingFields = document.getElementById('heatingFields');
const heatingId = 'heating-' + Date.now();

const heatingHtml = `
<div class="dynamic-field" id="${heatingId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Energieträger</label>
        <select class="heating-type" required onchange="calculateHeatingEmissions('${heatingId}')">
            ${Object.keys(HEATING_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Verbrauch (kWh)
        <span class="tooltip-icon" tabindex="0">ℹ</span>
<span class="tooltip-text">Geben Sie hier den jährlichen Stromverbrauch in kWh ein, z.B. 4000 kWh für ein kleines Büro.</span></label>
        <input type="number" class="consumption" min="0" required 
               onchange="calculateHeatingEmissions('${heatingId}')"
               placeholder="z.B. 20000">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/kWh)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeHeatingSystem('${heatingId}')">Entfernen</button>
</div>
`;

heatingFields.insertAdjacentHTML('beforeend', heatingHtml);
}

function calculateHeatingEmissions(heatingId) {
const container = document.getElementById(heatingId);
const heatingType = container.querySelector('.heating-type').value;
const consumption = parseFloat(container.querySelector('.consumption').value) || 0;
const emissionFactor = HEATING_EMISSION_FACTORS[heatingType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const emissions = consumption * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalHeatingEmissions();
}

function updateTotalHeatingEmissions() {
const allHeatingSystems = document.querySelectorAll('#heatingFields .dynamic-field');
let totalEmissions = {};

// Initialisiere Summen für jeden Energieträger
Object.keys(HEATING_EMISSION_FACTORS).forEach(type => {
totalEmissions[type] = 0;
});

// Berechne Summen pro Energieträger
allHeatingSystems.forEach(system => {
const type = system.querySelector('.heating-type').value;
const emissions = parseFloat(system.querySelector('.co2-emissions').value) || 0;
totalEmissions[type] += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, value]) => {
if (value > 0) {  // Zeige nur Energieträger mit Emissionen
    summaryHtml += `<div>${type}: ${value.toFixed(2)} kg CO₂</div>`;
}
});

// Gesamtsumme
const totalSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
summaryHtml += `<div class="total-sum">Gesamt: ${totalSum.toFixed(2)} kg CO₂</div></div>`;

// Aktualisiere die Anzeige
document.getElementById('totalHeatingEmissions').innerHTML = summaryHtml;
}

function removeHeatingSystem(heatingId) {
document.getElementById(heatingId).remove();
updateTotalHeatingEmissions();
}

// Funktion zum Exportieren der Heizungsdaten
function exportHeatingData() {
const heatingData = [];
const allHeatingSystems = document.querySelectorAll('#heatingFields .dynamic-field');

allHeatingSystems.forEach(system => {
heatingData.push({
    date: system.querySelector('.date').value,
    location: system.querySelector('.location').value,
    heatingType: system.querySelector('.heating-type').value,
    consumption: system.querySelector('.consumption').value,
    emissionFactor: system.querySelector('.emission-factor').value,
    co2Emissions: system.querySelector('.co2-emissions').value
});
});

return heatingData;
}

// Emissionsfaktoren für technische Gase (kg CO2/kg)
const TECHNICAL_GAS_FACTORS = {
'Ammoniak': 2.7,
'Argon': 1.37,
'Ethan, Ethyl': 1.46,
'Helium': 8.56,
'Methan': 25.0,
'Propan': 0.86
};

function addTechnicalGas() {
const gasFields = document.getElementById('gasFields');
const gasId = 'gas-' + Date.now();

const gasHtml = `
<div class="dynamic-field" id="${gasId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="gas-date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="gas-location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Name von Emittent</label>
        <select class="gas-type" required onchange="calculateGasEmissions('${gasId}')">
            ${Object.keys(TECHNICAL_GAS_FACTORS).map(gas => 
                `<option value="${gas}">${gas}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Menge (kg)</label>
        <input type="number" class="gas-amount" min="0" step="0.1" required 
               onchange="calculateGasEmissions('${gasId}')"
               placeholder="z.B. 2000">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/kg)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeTechnicalGas('${gasId}')">Entfernen</button>
</div>
`;

gasFields.insertAdjacentHTML('beforeend', gasHtml);
}

function calculateGasEmissions(gasId) {
const container = document.getElementById(gasId);
const gasType = container.querySelector('.gas-type').value;
const amount = parseFloat(container.querySelector('.gas-amount').value) || 0;
const emissionFactor = TECHNICAL_GAS_FACTORS[gasType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const emissions = amount * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalGasEmissions();
}

function updateTotalGasEmissions() {
const allGases = document.querySelectorAll('#gasFields .dynamic-field');
let totalEmissions = {};

// Initialisiere Summen für jedes Gas
Object.keys(TECHNICAL_GAS_FACTORS).forEach(type => {
totalEmissions[type] = 0;
});

// Berechne Summen pro Gas
allGases.forEach(gas => {
const type = gas.querySelector('.gas-type').value;
const emissions = parseFloat(gas.querySelector('.co2-emissions').value) || 0;
totalEmissions[type] += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, value]) => {
if (value > 0) {  // Zeige nur Gase mit Emissionen
    summaryHtml += `<div>${type}: ${value.toFixed(2)} kg CO₂</div>`;
}
});

// Gesamtsumme
const totalSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
summaryHtml += `<div class="total-sum">Gesamt: ${totalSum.toFixed(2)} kg CO₂</div></div>`;

// Aktualisiere die Anzeige
document.getElementById('totalGasEmissions').innerHTML = summaryHtml;
}

function removeTechnicalGas(gasId) {
document.getElementById(gasId).remove();
updateTotalGasEmissions();
}

// Funktion zum Exportieren der Gasdaten
function exportGasData() {
const gasData = [];
const allGases = document.querySelectorAll('#gasFields .dynamic-field');

allGases.forEach(gas => {
gasData.push({
    date: gas.querySelector('.gas-date').value,
    location: gas.querySelector('.gas-location').value,
    gasType: gas.querySelector('.gas-type').value,
    amount: gas.querySelector('.gas-amount').value,
    emissionFactor: gas.querySelector('.emission-factor').value,
    co2Emissions: gas.querySelector('.co2-emissions').value
});
});

return gasData;
}
// Basis-Emissionsfaktoren als Beispiel
const DEFAULT_EMISSION_FACTORS = {
'Emittent 1': 0.33,
'Emittent 2': 0.25
};

function addEmitter() {
const emitterFields = document.getElementById('emitterFields');
const emitterId = 'emitter-' + Date.now();

const emitterHtml = `
<div class="dynamic-field" id="${emitterId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="emitter-date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="emitter-location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Name von Emittent</label>
        <input type="text" class="emitter-name" required placeholder="z.B. Emittent 1"
               list="emitter-suggestions">
        <datalist id="emitter-suggestions">
            ${Object.keys(DEFAULT_EMISSION_FACTORS).map(name => 
                `<option value="${name}">`
            ).join('')}
        </datalist>
    </div>
    <div class="form-group">
        <label>Menge</label>
        <input type="number" class="emitter-amount" min="0" step="0.1" required 
               onchange="calculateEmitterEmissions('${emitterId}')"
               placeholder="z.B. 2000">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/kg)</label>
        <input type="number" class="emission-factor" step="0.01" required
               placeholder="z.B. 0.25" onchange="calculateEmitterEmissions('${emitterId}')">
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeEmitter('${emitterId}')">Entfernen</button>
</div>
`;

emitterFields.insertAdjacentHTML('beforeend', emitterHtml);

// Event Listener für die Auswahl vorhandener Emittenten
const container = document.getElementById(emitterId);
const nameInput = container.querySelector('.emitter-name');
const factorInput = container.querySelector('.emission-factor');

nameInput.addEventListener('change', () => {
const selectedName = nameInput.value;
if (DEFAULT_EMISSION_FACTORS[selectedName]) {
    factorInput.value = DEFAULT_EMISSION_FACTORS[selectedName];
    calculateEmitterEmissions(emitterId);
}
});
}

function calculateEmitterEmissions(emitterId) {
const container = document.getElementById(emitterId);
const amount = parseFloat(container.querySelector('.emitter-amount').value) || 0;
const factor = parseFloat(container.querySelector('.emission-factor').value) || 0;

// Berechne die Emissionen
const emissions = amount * factor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalEmitterEmissions();
}

function updateTotalEmitterEmissions() {
const allEmitters = document.querySelectorAll('#emitterFields .dynamic-field');
let totalEmissions = {};

// Sammle Emissionen pro Emittent
allEmitters.forEach(emitter => {
const name = emitter.querySelector('.emitter-name').value;
const emissions = parseFloat(emitter.querySelector('.co2-emissions').value) || 0;

if (!totalEmissions[name]) {
    totalEmissions[name] = 0;
}
totalEmissions[name] += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([name, value]) => {
if (value > 0) {
    summaryHtml += `<div>${name}: ${value.toFixed(2)} kg CO₂</div>`;
}
});

// Gesamtsumme
const totalSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
summaryHtml += `<div class="total-sum">Gesamt: ${totalSum.toFixed(2)} kg CO₂</div></div>`;

// Aktualisiere die Anzeige
document.getElementById('totalEmitterEmissions').innerHTML = summaryHtml;
}

function removeEmitter(emitterId) {
document.getElementById(emitterId).remove();
updateTotalEmitterEmissions();
}

// Funktion zum Exportieren der Emittentendaten
function exportEmitterData() {
const emitterData = [];
const allEmitters = document.querySelectorAll('#emitterFields .dynamic-field');

allEmitters.forEach(emitter => {
emitterData.push({
    date: emitter.querySelector('.emitter-date').value,
    location: emitter.querySelector('.emitter-location').value,
    name: emitter.querySelector('.emitter-name').value,
    amount: emitter.querySelector('.emitter-amount').value,
    emissionFactor: emitter.querySelector('.emission-factor').value,
    co2Emissions: emitter.querySelector('.co2-emissions').value
});
});

return emitterData;
}

// Emissionsfaktoren für verschiedene Energietypen (kg CO2/kWh)
const ENERGY_EMISSION_FACTORS = {
'Strom': 0.356,
'Strom aus erneuerbaren Quellen': 0.0,
'Fernwärme': 0.28
};

function addEnergyConsumption() {
const energyFields = document.getElementById('energyFields');
const energyId = 'energy-' + Date.now();

const energyHtml = `
<div class="dynamic-field" id="${energyId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="energy-date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="energy-location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Energietyp</label>
        <select class="energy-type" required onchange="calculateEnergyEmissions('${energyId}')">
            ${Object.keys(ENERGY_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Verbrauch (kWh)
        <span class="tooltip-icon" tabindex="0">ℹ</span>
<span class="tooltip-text">Geben Sie hier den jährlichen Stromverbrauch in kWh ein, z.B. 4000 kWh für ein kleines Büro.</span></label>
        <input type="number" class="energy-consumption" min="0" required 
               onchange="calculateEnergyEmissions('${energyId}')"
               placeholder="z.B. 4000">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/kWh)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeEnergyConsumption('${energyId}')">Entfernen</button>
</div>
`;

energyFields.insertAdjacentHTML('beforeend', energyHtml);
}
function calculateEnergyEmissions(energyId) {
const container = document.getElementById(energyId);
const energyType = container.querySelector('.energy-type').value;
const consumptionField = container.querySelector('.energy-consumption');
const errorSpan = container.querySelector('.error-message'); // Füge im HTML ein <span class="error-message" style="color:red;display:none;"></span> unter dem Input ein

let consumption = parseFloat(consumptionField.value);

// Validierung:
if (isNaN(consumption) || consumption < 0) {
// Ungültige Eingabe
errorSpan.textContent = "Bitte geben Sie eine gültige, nicht-negative Zahl ein.";
errorSpan.style.display = 'inline';
container.querySelector('.co2-emissions').value = "";
return; // Abbruch, keine Berechnung
} else {
errorSpan.style.display = 'none';
}

const emissionFactor = ENERGY_EMISSION_FACTORS[energyType];
const emissions = consumption * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

updateTotalEnergyEmissions();
}

function updateTotalEnergyEmissions() {
const allEnergy = document.querySelectorAll('#energyFields .dynamic-field');
let totalEmissions = {
'Strom': 0,
'Strom aus erneuerbaren Quellen': 0,
'Fernwärme': 0
};
let totalConsumption = {...totalEmissions};

// Berechne Summen pro Energietyp
allEnergy.forEach(energy => {
const type = energy.querySelector('.energy-type').value;
const emissions = parseFloat(energy.querySelector('.co2-emissions').value) || 0;
const consumption = parseFloat(energy.querySelector('.energy-consumption').value) || 0;

totalEmissions[type] += emissions;
totalConsumption[type] += consumption;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, value]) => {
if (totalConsumption[type] > 0) {
    summaryHtml += `
        <div class="energy-summary">
            <div>${type}:</div>
            <div>Verbrauch: ${totalConsumption[type].toFixed(2)} kWh</div>
            <div>Emissionen: ${value.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsumme
const totalEmissionsSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
const totalConsumptionSum = Object.values(totalConsumption).reduce((a, b) => a + b, 0);
summaryHtml += `
<div class="total-sum">
    <div>Gesamtverbrauch: ${totalConsumptionSum.toFixed(2)} kWh</div>
    <div>Gesamtemissionen: ${totalEmissionsSum.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalEnergyEmissions').innerHTML = summaryHtml;
}

function removeEnergyConsumption(energyId) {
document.getElementById(energyId).remove();
updateTotalEnergyEmissions();
}

// Funktion zum Exportieren der Energiedaten
function exportEnergyData() {
const energyData = [];
const allEnergy = document.querySelectorAll('#energyFields .dynamic-field');

allEnergy.forEach(energy => {
energyData.push({
    date: energy.querySelector('.energy-date').value,
    location: energy.querySelector('.energy-location').value,
    energyType: energy.querySelector('.energy-type').value,
    consumption: energy.querySelector('.energy-consumption').value,
    emissionFactor: energy.querySelector('.emission-factor').value,
    co2Emissions: energy.querySelector('.co2-emissions').value
});
});

return energyData;
}
// Basis-Emissionsfaktoren für häufige indirekte Emittenten
const INDIRECT_EMISSION_FACTORS = {
'Emittent 1': 0.33,
'Emittent 2': 0.25
};

function addIndirectEmitter() {
const emitterFields = document.getElementById('indirectEmitterFields');
const emitterId = 'indirect-emitter-' + Date.now();

const emitterHtml = `
<div class="dynamic-field" id="${emitterId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="emitter-date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="emitter-location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Name von Emittent</label>
        <input type="text" class="emitter-name" required placeholder="z.B. Emittent 1"
               list="indirect-emitter-suggestions">
        <datalist id="indirect-emitter-suggestions">
            ${Object.keys(INDIRECT_EMISSION_FACTORS).map(name => 
                `<option value="${name}">`
            ).join('')}
        </datalist>
    </div>
    <div class="form-group">
        <label>Menge</label>
        <input type="number" class="emitter-amount" min="0" step="0.1" required 
               onchange="calculateIndirectEmissions('${emitterId}')"
               placeholder="z.B. 2000">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/kg)</label>
        <input type="number" class="emission-factor" step="0.01" required
               placeholder="z.B. 0.25" onchange="calculateIndirectEmissions('${emitterId}')">
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeIndirectEmitter('${emitterId}')">Entfernen</button>
</div>
`;

emitterFields.insertAdjacentHTML('beforeend', emitterHtml);

// Event Listener für vorhandene Emittenten
const container = document.getElementById(emitterId);
const nameInput = container.querySelector('.emitter-name');
const factorInput = container.querySelector('.emission-factor');

nameInput.addEventListener('change', () => {
const selectedName = nameInput.value;
if (INDIRECT_EMISSION_FACTORS[selectedName]) {
    factorInput.value = INDIRECT_EMISSION_FACTORS[selectedName];
    calculateIndirectEmissions(emitterId);
}
});
}

function calculateIndirectEmissions(emitterId) {
const container = document.getElementById(emitterId);
const amount = parseFloat(container.querySelector('.emitter-amount').value) || 0;
const factor = parseFloat(container.querySelector('.emission-factor').value) || 0;

// Berechne die Emissionen
const emissions = amount * factor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalIndirectEmissions();
}

function updateTotalIndirectEmissions() {
const allEmitters = document.querySelectorAll('#indirectEmitterFields .dynamic-field');
let totalEmissions = {};

// Sammle Emissionen pro Emittent
allEmitters.forEach(emitter => {
const name = emitter.querySelector('.emitter-name').value;
const emissions = parseFloat(emitter.querySelector('.co2-emissions').value) || 0;
const amount = parseFloat(emitter.querySelector('.emitter-amount').value) || 0;

if (!totalEmissions[name]) {
    totalEmissions[name] = {
        amount: 0,
        emissions: 0
    };
}
totalEmissions[name].amount += amount;
totalEmissions[name].emissions += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([name, data]) => {
if (data.emissions > 0) {
    summaryHtml += `
        <div class="emitter-summary">
            <div>${name}:</div>
            <div>Menge: ${data.amount.toFixed(2)} kg</div>
            <div>Emissionen: ${data.emissions.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsummen
const totalEmissionsSum = Object.values(totalEmissions).reduce((sum, data) => sum + data.emissions, 0);
const totalAmount = Object.values(totalEmissions).reduce((sum, data) => sum + data.amount, 0);
summaryHtml += `
<div class="total-sum">
    <div>Gesamtmenge: ${totalAmount.toFixed(2)} kg</div>
    <div>Gesamtemissionen: ${totalEmissionsSum.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalIndirectEmissions').innerHTML = summaryHtml;
}

function removeIndirectEmitter(emitterId) {
document.getElementById(emitterId).remove();
updateTotalIndirectEmissions();
}

// Funktion zum Exportieren der Daten
function exportIndirectEmitterData() {
const emitterData = [];
const allEmitters = document.querySelectorAll('#indirectEmitterFields .dynamic-field');

allEmitters.forEach(emitter => {
emitterData.push({
    date: emitter.querySelector('.emitter-date').value,
    location: emitter.querySelector('.emitter-location').value,
    name: emitter.querySelector('.emitter-name').value,
    amount: emitter.querySelector('.emitter-amount').value,
    emissionFactor: emitter.querySelector('.emission-factor').value,
    co2Emissions: emitter.querySelector('.co2-emissions').value
});
});

return emitterData;
}

// Emissionsfaktoren für verschiedene Transportmittel (kg CO2/km)
const TRANSPORT_EMISSION_FACTORS = {
'PKW': 0.198035,
'PKW Mitnahme': 0.099018,
'Fernverkehr (>20 km)': 0.010759,
'Nahverkehr (<20 km)': 0.062039
};

function addBusinessTravel() {
const travelFields = document.getElementById('travelFields');
const travelId = 'travel-' + Date.now();

const travelHtml = `
<div class="dynamic-field" id="${travelId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="travel-date" required>
    </div>
    <div class="form-group">
        <label>Mitarbeiternummer</label>
        <input type="number" class="employee-number" required>
    </div>
    <div class="form-group">
        <label>Transportmittel</label>
        <select class="transport-type" required onchange="calculateTravelEmissions('${travelId}')">
            ${Object.keys(TRANSPORT_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Strecke</label>
        <input type="text" class="route" required placeholder="z.B. Dortmund - Düsseldorf">
    </div>
    <div class="form-group">
        <label>Entfernung (km)</label>
        <input type="number" class="distance" min="0" required 
               onchange="calculateTravelEmissions('${travelId}')"
               placeholder="z.B. 160">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/km)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeBusinessTravel('${travelId}')">Entfernen</button>
</div>
`;

travelFields.insertAdjacentHTML('beforeend', travelHtml);
}

function calculateTravelEmissions(travelId) {
const container = document.getElementById(travelId);
const transportType = container.querySelector('.transport-type').value;
const distance = parseFloat(container.querySelector('.distance').value) || 0;
const emissionFactor = TRANSPORT_EMISSION_FACTORS[transportType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const emissions = distance * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalTravelEmissions();
}

function updateTotalTravelEmissions() {
const allTravels = document.querySelectorAll('#travelFields .dynamic-field');
let totalEmissions = {};
let totalDistances = {};

// Initialisiere Summen für jeden Transporttyp
Object.keys(TRANSPORT_EMISSION_FACTORS).forEach(type => {
totalEmissions[type] = 0;
totalDistances[type] = 0;
});

// Berechne Summen pro Transporttyp
allTravels.forEach(travel => {
const type = travel.querySelector('.transport-type').value;
const emissions = parseFloat(travel.querySelector('.co2-emissions').value) || 0;
const distance = parseFloat(travel.querySelector('.distance').value) || 0;

totalEmissions[type] += emissions;
totalDistances[type] += distance;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, emissions]) => {
if (totalDistances[type] > 0) {
    summaryHtml += `
        <div class="transport-summary">
            <div>${type}:</div>
            <div>Gesamtstrecke: ${totalDistances[type].toFixed(2)} km</div>
            <div>Emissionen: ${emissions.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsummen
const totalEmissionsSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
const totalDistance = Object.values(totalDistances).reduce((a, b) => a + b, 0);
summaryHtml += `
<div class="total-sum">
    <div>Gesamtstrecke: ${totalDistance.toFixed(2)} km</div>
    <div>Gesamtemissionen: ${totalEmissionsSum.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalTravelEmissions').innerHTML = summaryHtml;
}

function removeBusinessTravel(travelId) {
document.getElementById(travelId).remove();
updateTotalTravelEmissions();
}

// Funktion zum Exportieren der Reisedaten
function exportTravelData() {
const travelData = [];
const allTravels = document.querySelectorAll('#travelFields .dynamic-field');

allTravels.forEach(travel => {
travelData.push({
    date: travel.querySelector('.travel-date').value,
    employeeNumber: travel.querySelector('.employee-number').value,
    transportType: travel.querySelector('.transport-type').value,
    route: travel.querySelector('.route').value,
    distance: travel.querySelector('.distance').value,
    emissionFactor: travel.querySelector('.emission-factor').value,
    co2Emissions: travel.querySelector('.co2-emissions').value
});
});

return travelData;
}

// Emissionsfaktoren für verschiedene LKW-Typen (kg CO2/km)
const TRUCK_EMISSION_FACTORS = {
'LKW Diesel (3,5-7,5 T)': 0.12955,
'LKW Diesel (7,5-12 T)': 0.09367,
'LKW Diesel (>12 T)': 0.04735
};

// Liste häufiger Logistikdienstleister
const LOGISTICS_PROVIDERS = [
'DHL',
'DPD',
'GLS',
'Hermes',
'UPS',
'FedEx'
];

function addExternalTransport() {
const transportFields = document.getElementById('externalTransportFields');
const transportId = 'external-transport-' + Date.now();

const transportHtml = `
<div class="dynamic-field" id="${transportId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="transport-date" required>
    </div>
    <div class="form-group">
        <label>Waren Distributor</label>
        <select class="logistics-provider" required>
            ${LOGISTICS_PROVIDERS.map(provider => 
                `<option value="${provider}">${provider}</option>`
            ).join('')}
            <option value="other">Andere...</option>
        </select>
        <input type="text" class="custom-provider" style="display: none;" 
               placeholder="Distributor eingeben">
    </div>
    <div class="form-group">
        <label>Kundennummer</label>
        <input type="text" class="customer-number" required>
    </div>
    <div class="form-group">
        <label>Start-Standort</label>
        <input type="text" class="start-location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Ziel-Adresse</label>
        <input type="text" class="destination" required placeholder="z.B. Hamburg">
    </div>
    <div class="form-group">
        <label>Entfernung (km)</label>
        <input type="number" class="distance" min="0" required 
               onchange="calculateExternalTransportEmissions('${transportId}')"
               placeholder="z.B. 345">
    </div>
    <div class="form-group">
        <label>Transportmittel</label>
        <select class="transport-type" required 
                onchange="calculateExternalTransportEmissions('${transportId}')">
            ${Object.keys(TRUCK_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/km)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeExternalTransport('${transportId}')">Entfernen</button>
</div>
`;

transportFields.insertAdjacentHTML('beforeend', transportHtml);

// Event Listener für Custom Provider
const container = document.getElementById(transportId);
const providerSelect = container.querySelector('.logistics-provider');
const customInput = container.querySelector('.custom-provider');

providerSelect.addEventListener('change', () => {
customInput.style.display = providerSelect.value === 'other' ? 'block' : 'none';
});
}

function calculateExternalTransportEmissions(transportId) {
const container = document.getElementById(transportId);
const transportType = container.querySelector('.transport-type').value;
const distance = parseFloat(container.querySelector('.distance').value) || 0;
const emissionFactor = TRUCK_EMISSION_FACTORS[transportType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const emissions = distance * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalExternalTransportEmissions();
}

function updateTotalExternalTransportEmissions() {
const allTransports = document.querySelectorAll('#externalTransportFields .dynamic-field');
let totalsByProvider = {};
let totalsByType = {};

// Sammle Daten
allTransports.forEach(transport => {
const provider = transport.querySelector('.logistics-provider').value;
const type = transport.querySelector('.transport-type').value;
const distance = parseFloat(transport.querySelector('.distance').value) || 0;
const emissions = parseFloat(transport.querySelector('.co2-emissions').value) || 0;

// Summiere nach Anbieter
if (!totalsByProvider[provider]) {
    totalsByProvider[provider] = { distance: 0, emissions: 0 };
}
totalsByProvider[provider].distance += distance;
totalsByProvider[provider].emissions += emissions;

// Summiere nach Fahrzeugtyp
if (!totalsByType[type]) {
    totalsByType[type] = { distance: 0, emissions: 0 };
}
totalsByType[type].distance += distance;
totalsByType[type].emissions += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';

// Nach Anbieter
summaryHtml += '<div class="provider-totals"><h4>Nach Distributor:</h4>';
Object.entries(totalsByProvider).forEach(([provider, data]) => {
summaryHtml += `
    <div class="provider-summary">
        <div>${provider}:</div>
        <div>Distanz: ${data.distance.toFixed(2)} km</div>
        <div>Emissionen: ${data.emissions.toFixed(2)} kg CO₂</div>
    </div>
`;
});
summaryHtml += '</div>';

// Nach Fahrzeugtyp
summaryHtml += '<div class="type-totals"><h4>Nach Fahrzeugtyp:</h4>';
Object.entries(totalsByType).forEach(([type, data]) => {
summaryHtml += `
    <div class="type-summary">
        <div>${type}:</div>
        <div>Distanz: ${data.distance.toFixed(2)} km</div>
        <div>Emissionen: ${data.emissions.toFixed(2)} kg CO₂</div>
    </div>
`;
});
summaryHtml += '</div>';

// Gesamtsummen
const totalDistance = Object.values(totalsByProvider).reduce((sum, data) => sum + data.distance, 0);
const totalEmissions = Object.values(totalsByProvider).reduce((sum, data) => sum + data.emissions, 0);
summaryHtml += `
<div class="total-sum">
    <div>Gesamtdistanz: ${totalDistance.toFixed(2)} km</div>
    <div>Gesamtemissionen: ${totalEmissions.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalExternalTransportEmissions').innerHTML = summaryHtml;
}

function removeExternalTransport(transportId) {
document.getElementById(transportId).remove();
updateTotalExternalTransportEmissions();
}

// Funktion zum Exportieren der Transportdaten
function exportExternalTransportData() {
const transportData = [];
const allTransports = document.querySelectorAll('#externalTransportFields .dynamic-field');

allTransports.forEach(transport => {
const provider = transport.querySelector('.logistics-provider').value;
const customProvider = transport.querySelector('.custom-provider').value;

transportData.push({
    date: transport.querySelector('.transport-date').value,
    provider: provider === 'other' ? customProvider : provider,
    customerNumber: transport.querySelector('.customer-number').value,
    startLocation: transport.querySelector('.start-location').value,
    destination: transport.querySelector('.destination').value,
    distance: transport.querySelector('.distance').value,
    transportType: transport.querySelector('.transport-type').value,
    emissionFactor: transport.querySelector('.emission-factor').value,
    co2Emissions: transport.querySelector('.co2-emissions').value
});
});

return transportData;
}

// Emissionsfaktoren für verschiedene Sendungsarten (kg CO2/Stück)
const POSTAL_EMISSION_FACTORS = {
'Postausgang 2023 Brief': 0.02,
'Postausgang 2023 Paket': 1.374,
'Lieferungen durch DHL, DPD etc.': 1.374,
'Eigene Lieferung durch Lieferdienst': 1.374
};

function addPostalDelivery() {
const deliveryFields = document.getElementById('postalDeliveryFields');
const deliveryId = 'postal-delivery-' + Date.now();

const deliveryHtml = `
<div class="dynamic-field" id="${deliveryId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="delivery-date" required>
    </div>
    <div class="form-group">
        <label>Post Ein- und Ausgang Typ</label>
        <select class="delivery-type" required onchange="calculatePostalEmissions('${deliveryId}')">
            ${Object.keys(POSTAL_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Menge (Stück)</label>
        <input type="number" class="delivery-amount" min="0" required 
               onchange="calculatePostalEmissions('${deliveryId}')"
               placeholder="z.B. 1000">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/Stück)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removePostalDelivery('${deliveryId}')">Entfernen</button>
</div>
`;

deliveryFields.insertAdjacentHTML('beforeend', deliveryHtml);
}

function calculatePostalEmissions(deliveryId) {
const container = document.getElementById(deliveryId);
const deliveryType = container.querySelector('.delivery-type').value;
const amount = parseFloat(container.querySelector('.delivery-amount').value) || 0;
const emissionFactor = POSTAL_EMISSION_FACTORS[deliveryType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const emissions = amount * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalPostalEmissions();
}

function updateTotalPostalEmissions() {
const allDeliveries = document.querySelectorAll('#postalDeliveryFields .dynamic-field');
let totalEmissions = {};
let totalAmounts = {};

// Initialisiere Summen für jeden Typ
Object.keys(POSTAL_EMISSION_FACTORS).forEach(type => {
totalEmissions[type] = 0;
totalAmounts[type] = 0;
});

// Berechne Summen pro Typ
allDeliveries.forEach(delivery => {
const type = delivery.querySelector('.delivery-type').value;
const amount = parseFloat(delivery.querySelector('.delivery-amount').value) || 0;
const emissions = parseFloat(delivery.querySelector('.co2-emissions').value) || 0;

totalAmounts[type] += amount;
totalEmissions[type] += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, emissions]) => {
if (totalAmounts[type] > 0) {
    summaryHtml += `
        <div class="delivery-summary">
            <div>${type}:</div>
            <div>Menge: ${totalAmounts[type]} Stück</div>
            <div>Emissionen: ${emissions.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsummen
const totalEmissionsSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
const totalAmount = Object.values(totalAmounts).reduce((a, b) => a + b, 0);
summaryHtml += `
<div class="total-sum">
    <div>Gesamtmenge: ${totalAmount} Stück</div>
    <div>Gesamtemissionen: ${totalEmissionsSum.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalPostalEmissions').innerHTML = summaryHtml;
}

function removePostalDelivery(deliveryId) {
document.getElementById(deliveryId).remove();
updateTotalPostalEmissions();
}

// Funktion zum Exportieren der Daten
function exportPostalData() {
const postalData = [];
const allDeliveries = document.querySelectorAll('#postalDeliveryFields .dynamic-field');

allDeliveries.forEach(delivery => {
postalData.push({
    date: delivery.querySelector('.delivery-date').value,
    type: delivery.querySelector('.delivery-type').value,
    amount: delivery.querySelector('.delivery-amount').value,
    emissionFactor: delivery.querySelector('.emission-factor').value,
    co2Emissions: delivery.querySelector('.co2-emissions').value
});
});

return postalData;
}
// Emissionsfaktoren für chemische Produkte (kg CO2/kg)
const CHEMICAL_EMISSION_FACTORS = {
'Aluminiumhydroxid': 1.01,
'Ammoniak': 2.73,
'Argon (Ar)': 1.37,
'Chlor (Cl)': 0.59,
'Gummi': 2.32,
'Ethan (C2H4), Ethylen': 1.46,
'Gold (AU)': 47790.29,
'Phosphate': 0.18,
'Seife (Sg)': 3.41
};

function addChemicalProduct() {
const chemicalFields = document.getElementById('chemicalFields');
const chemicalId = 'chemical-' + Date.now();

const chemicalHtml = `
<div class="dynamic-field" id="${chemicalId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="chemical-date" required>
    </div>
    <div class="form-group">
        <label>Chemische Produkte</label>
        <select class="chemical-type" required onchange="calculateChemicalEmissions('${chemicalId}')">
            ${Object.keys(CHEMICAL_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Menge (kg)</label>
        <input type="number" class="chemical-amount" min="0" step="0.01" required 
               onchange="calculateChemicalEmissions('${chemicalId}')"
               placeholder="z.B. 4000">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/kg)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeChemicalProduct('${chemicalId}')">Entfernen</button>
</div>
`;

chemicalFields.insertAdjacentHTML('beforeend', chemicalHtml);
}

function calculateChemicalEmissions(chemicalId) {
const container = document.getElementById(chemicalId);
const chemicalType = container.querySelector('.chemical-type').value;
const amount = parseFloat(container.querySelector('.chemical-amount').value) || 0;
const emissionFactor = CHEMICAL_EMISSION_FACTORS[chemicalType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const emissions = amount * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalChemicalEmissions();
}

function updateTotalChemicalEmissions() {
const allChemicals = document.querySelectorAll('#chemicalFields .dynamic-field');
let totalEmissions = {};
let totalAmounts = {};

// Initialisiere Summen für jedes chemische Produkt
Object.keys(CHEMICAL_EMISSION_FACTORS).forEach(type => {
totalEmissions[type] = 0;
totalAmounts[type] = 0;
});

// Berechne Summen pro Produkt
allChemicals.forEach(chemical => {
const type = chemical.querySelector('.chemical-type').value;
const amount = parseFloat(chemical.querySelector('.chemical-amount').value) || 0;
const emissions = parseFloat(chemical.querySelector('.co2-emissions').value) || 0;

totalAmounts[type] += amount;
totalEmissions[type] += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, emissions]) => {
if (totalAmounts[type] > 0) {
    summaryHtml += `
        <div class="chemical-summary">
            <div>${type}:</div>
            <div>Menge: ${totalAmounts[type].toFixed(2)} kg</div>
            <div>Emissionen: ${emissions.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsummen
const totalEmissionsSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
const totalAmount = Object.values(totalAmounts).reduce((a, b) => a + b, 0);
summaryHtml += `
<div class="total-sum">
    <div>Gesamtmenge: ${totalAmount.toFixed(2)} kg</div>
    <div>Gesamtemissionen: ${totalEmissionsSum.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalChemicalEmissions').innerHTML = summaryHtml;
}

function removeChemicalProduct(chemicalId) {
document.getElementById(chemicalId).remove();
updateTotalChemicalEmissions();
}

// Funktion zum Exportieren der Daten
function exportChemicalData() {
const chemicalData = [];
const allChemicals = document.querySelectorAll('#chemicalFields .dynamic-field');

allChemicals.forEach(chemical => {
chemicalData.push({
    date: chemical.querySelector('.chemical-date').value,
    type: chemical.querySelector('.chemical-type').value,
    amount: chemical.querySelector('.chemical-amount').value,
    emissionFactor: chemical.querySelector('.emission-factor').value,
    co2Emissions: chemical.querySelector('.co2-emissions').value
});
});

return chemicalData;
}

// Emissionsfaktoren für Papierprodukte (kg CO2/Blatt)


function addPaperProduct() {
const paperFields = document.getElementById('paperFields');
const paperId = 'paper-' + Date.now();

const paperHtml = `
<div class="dynamic-field" id="${paperId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="paper-date" required>
    </div>
    <div class="form-group">
        <label>Einkauftyp</label>
        <select class="paper-type" required onchange="calculatePaperEmissions('${paperId}')">
            ${Object.keys(PAPER_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Anzahl Blatt</label>
        <input type="number" class="paper-amount" min="0" required 
               onchange="calculatePaperEmissions('${paperId}')"
               placeholder="z.B. 20000">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/Blatt)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removePaperProduct('${paperId}')">Entfernen</button>
</div>
`;

paperFields.insertAdjacentHTML('beforeend', paperHtml);
}

function calculatePaperEmissions(paperId) {
const container = document.getElementById(paperId);
const paperType = container.querySelector('.paper-type').value;
const amount = parseFloat(container.querySelector('.paper-amount').value) || 0;
const emissionFactor = PAPER_EMISSION_FACTORS[paperType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const emissions = amount * emissionFactor / 1000; // Umrechnung in kg CO2
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalPaperEmissions();
}

function updateTotalPaperEmissions() {
const allPapers = document.querySelectorAll('#paperFields .dynamic-field');
let totalEmissions = {};
let totalSheets = {};

// Initialisiere Summen für jeden Papiertyp
Object.keys(PAPER_EMISSION_FACTORS).forEach(type => {
totalEmissions[type] = 0;
totalSheets[type] = 0;
});

// Berechne Summen pro Papiertyp
allPapers.forEach(paper => {
const type = paper.querySelector('.paper-type').value;
const sheets = parseFloat(paper.querySelector('.paper-amount').value) || 0;
const emissions = parseFloat(paper.querySelector('.co2-emissions').value) || 0;

totalSheets[type] += sheets;
totalEmissions[type] += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, emissions]) => {
if (totalSheets[type] > 0) {
    summaryHtml += `
        <div class="paper-summary">
            <div>${type}:</div>
            <div>Anzahl: ${totalSheets[type]} Blatt</div>
            <div>Emissionen: ${emissions.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsummen
const totalEmissionsSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
const totalSheetSum = Object.values(totalSheets).reduce((a, b) => a + b, 0);
summaryHtml += `
<div class="total-sum">
    <div>Gesamtanzahl: ${totalSheetSum} Blatt</div>
    <div>Gesamtemissionen: ${totalEmissionsSum.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalPaperEmissions').innerHTML = summaryHtml;
}

function removePaperProduct(paperId) {
document.getElementById(paperId).remove();
updateTotalPaperEmissions();
}

// Funktion zum Exportieren der Daten
function exportPaperData() {
const paperData = [];
const allPapers = document.querySelectorAll('#paperFields .dynamic-field');

allPapers.forEach(paper => {
paperData.push({
    date: paper.querySelector('.paper-date').value,
    type: paper.querySelector('.paper-type').value,
    sheets: paper.querySelector('.paper-amount').value,
    emissionFactor: paper.querySelector('.emission-factor').value,
    co2Emissions: paper.querySelector('.co2-emissions').value
});
});

return paperData;
}

// Emissionsfaktoren für verschiedene Papiertypen (kg CO2/Blatt)
const PAPER_EMISSION_FACTORS = {
'Flipchartpapier': 0.97,
'A4Papier': 0.82,
'Mischung': 0.895  // Durchschnittswert
};

function addPaperUsage() {
const paperFields = document.getElementById('paperUsageFields');
const usageId = 'paper-usage-' + Date.now();

const usageHtml = `
<div class="dynamic-field" id="${usageId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="usage-date" required>
    </div>
    <div class="form-group">
        <label>Mitarbeiternummer</label>
        <input type="number" class="employee-number" required min="1"
               placeholder="z.B. 1">
    </div>
    <div class="form-group">
        <label>Anzahl Papiere drucken pro Arbeitstag</label>
        <input type="number" class="daily-usage" min="0" required 
               onchange="calculateDailyEmissions('${usageId}')"
               placeholder="z.B. 10">
    </div>
    <div class="form-group">
        <label>Papiertyp</label>
        <select class="paper-type" required onchange="calculateDailyEmissions('${usageId}')">
            ${Object.keys(PAPER_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/Blatt)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removePaperUsage('${usageId}')">Entfernen</button>
</div>
`;

paperFields.insertAdjacentHTML('beforeend', usageHtml);
}

function calculateDailyEmissions(usageId) {
const container = document.getElementById(usageId);
const paperType = container.querySelector('.paper-type').value;
const dailyUsage = parseFloat(container.querySelector('.daily-usage').value) || 0;
const emissionFactor = PAPER_EMISSION_FACTORS[paperType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const emissions = dailyUsage * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalDailyEmissions();
}

function updateTotalDailyEmissions() {
const allUsages = document.querySelectorAll('#paperUsageFields .dynamic-field');
let employeeStats = {};

// Sammle Daten pro Mitarbeiter
allUsages.forEach(usage => {
const employeeNumber = usage.querySelector('.employee-number').value;
const paperType = usage.querySelector('.paper-type').value;
const dailyUsage = parseFloat(usage.querySelector('.daily-usage').value) || 0;
const emissions = parseFloat(usage.querySelector('.co2-emissions').value) || 0;

if (!employeeStats[employeeNumber]) {
    employeeStats[employeeNumber] = {
        totalSheets: 0,
        totalEmissions: 0,
        byType: {}
    };
}

if (!employeeStats[employeeNumber].byType[paperType]) {
    employeeStats[employeeNumber].byType[paperType] = {
        sheets: 0,
        emissions: 0
    };
}

employeeStats[employeeNumber].totalSheets += dailyUsage;
employeeStats[employeeNumber].totalEmissions += emissions;
employeeStats[employeeNumber].byType[paperType].sheets += dailyUsage;
employeeStats[employeeNumber].byType[paperType].emissions += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';

// Pro Mitarbeiter Statistik
Object.entries(employeeStats).forEach(([employeeNumber, stats]) => {
summaryHtml += `
    <div class="employee-summary">
        <h4>Mitarbeiter ${employeeNumber}:</h4>
        <div>Gesamt Blätter pro Tag: ${stats.totalSheets}</div>
        <div>Gesamt Emissionen: ${stats.totalEmissions.toFixed(2)} kg CO₂</div>
        <div class="type-breakdown">
            ${Object.entries(stats.byType).map(([type, typeStats]) => `
                <div>${type}: ${typeStats.sheets} Blätter (${typeStats.emissions.toFixed(2)} kg CO₂)</div>
            `).join('')}
        </div>
    </div>
`;
});

// Gesamtsummen
const totalSheets = Object.values(employeeStats).reduce((sum, stats) => sum + stats.totalSheets, 0);
const totalEmissions = Object.values(employeeStats).reduce((sum, stats) => sum + stats.totalEmissions, 0);
summaryHtml += `
<div class="total-sum">
    <div>Gesamtblätter pro Tag: ${totalSheets}</div>
    <div>Gesamtemissionen: ${totalEmissions.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalDailyEmissions').innerHTML = summaryHtml;
}

function removePaperUsage(usageId) {
document.getElementById(usageId).remove();
updateTotalDailyEmissions();
}

// Funktion zum Exportieren der Daten
function exportDailyUsageData() {
const usageData = [];
const allUsages = document.querySelectorAll('#paperUsageFields .dynamic-field');

allUsages.forEach(usage => {
usageData.push({
    date: usage.querySelector('.usage-date').value,
    employeeNumber: usage.querySelector('.employee-number').value,
    dailyUsage: usage.querySelector('.daily-usage').value,
    paperType: usage.querySelector('.paper-type').value,
    emissionFactor: usage.querySelector('.emission-factor').value,
    co2Emissions: usage.querySelector('.co2-emissions').value
});
});

return usageData;
}
// Emissionsfaktoren für verschiedene Kunststoffe (kg CO2/kg)
const PLASTIC_EMISSION_FACTORS = {
'Polyethylen HDPE': 1.92,
'Polyethylen LDPE': 1.96,
'Polyethylenterephthalat, PET, PETE, PETP': 2.75,
'Polypropylen PP': 1.9,
'Polystyrol PS': 3.78
};

// Standard Kanister und ihre Gewichte (kg)
const CONTAINER_WEIGHTS = {
'Kanister 5L': 0.4,
'Kanister 12L': 0.8,
'Kanister 35L': 1.25,
'Kanister 20L': 1.05
};

function addPlasticUsage() {
const plasticFields = document.getElementById('plasticFields');
const plasticId = 'plastic-' + Date.now();

const plasticHtml = `
<div class="dynamic-field" id="${plasticId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="plastic-date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Kunststoffproduktname</label>
        <select class="container-type" required onchange="updateWeight('${plasticId}')">
            ${Object.keys(CONTAINER_WEIGHTS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Kunststoffe</label>
        <select class="plastic-type" required onchange="calculatePlasticEmissions('${plasticId}')">
            ${Object.keys(PLASTIC_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Menge (Stück)</label>
        <input type="number" class="quantity" min="0" required 
               onchange="calculatePlasticEmissions('${plasticId}')"
               placeholder="z.B. 20000">
    </div>
    <div class="form-group">
        <label>Gewicht pro Stück (kg)</label>
        <input type="number" class="weight" min="0" step="0.01" required
               onchange="calculatePlasticEmissions('${plasticId}')">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/kg)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removePlasticUsage('${plasticId}')">Entfernen</button>
</div>
`;

plasticFields.insertAdjacentHTML('beforeend', plasticHtml);
}

function updateWeight(plasticId) {
const container = document.getElementById(plasticId);
const containerType = container.querySelector('.container-type').value;
container.querySelector('.weight').value = CONTAINER_WEIGHTS[containerType];
calculatePlasticEmissions(plasticId);
}

function calculatePlasticEmissions(plasticId) {
const container = document.getElementById(plasticId);
const plasticType = container.querySelector('.plastic-type').value;
const quantity = parseFloat(container.querySelector('.quantity').value) || 0;
const weight = parseFloat(container.querySelector('.weight').value) || 0;
const emissionFactor = PLASTIC_EMISSION_FACTORS[plasticType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const totalWeight = quantity * weight;
const emissions = totalWeight * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalPlasticEmissions();
}

function updateTotalPlasticEmissions() {
const allPlastics = document.querySelectorAll('#plasticFields .dynamic-field');
let totalsByType = {};

// Initialisiere Summen für jeden Kunststofftyp
Object.keys(PLASTIC_EMISSION_FACTORS).forEach(type => {
totalsByType[type] = {
    quantity: 0,
    weight: 0,
    emissions: 0
};
});

// Berechne Summen pro Typ
allPlastics.forEach(plastic => {
const type = plastic.querySelector('.plastic-type').value;
const quantity = parseFloat(plastic.querySelector('.quantity').value) || 0;
const weight = parseFloat(plastic.querySelector('.weight').value) || 0;
const emissions = parseFloat(plastic.querySelector('.co2-emissions').value) || 0;

totalsByType[type].quantity += quantity;
totalsByType[type].weight += quantity * weight;
totalsByType[type].emissions += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalsByType).forEach(([type, data]) => {
if (data.quantity > 0) {
    summaryHtml += `
        <div class="plastic-summary">
            <div>${type}:</div>
            <div>Stückzahl: ${data.quantity}</div>
            <div>Gesamtgewicht: ${data.weight.toFixed(2)} kg</div>
            <div>Emissionen: ${data.emissions.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsummen
const totalQuantity = Object.values(totalsByType).reduce((sum, data) => sum + data.quantity, 0);
const totalWeight = Object.values(totalsByType).reduce((sum, data) => sum + data.weight, 0);
const totalEmissions = Object.values(totalsByType).reduce((sum, data) => sum + data.emissions, 0);

summaryHtml += `
<div class="total-sum">
    <div>Gesamtstückzahl: ${totalQuantity}</div>
    <div>Gesamtgewicht: ${totalWeight.toFixed(2)} kg</div>
    <div>Gesamtemissionen: ${totalEmissions.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalPlasticEmissions').innerHTML = summaryHtml;
}

function removePlasticUsage(plasticId) {
document.getElementById(plasticId).remove();
updateTotalPlasticEmissions();
}

// Funktion zum Exportieren der Daten
function exportPlasticData() {
const plasticData = [];
const allPlastics = document.querySelectorAll('#plasticFields .dynamic-field');

allPlastics.forEach(plastic => {
plasticData.push({
    date: plastic.querySelector('.plastic-date').value,
    location: plastic.querySelector('.location').value,
    containerType: plastic.querySelector('.container-type').value,
    plasticType: plastic.querySelector('.plastic-type').value,
    quantity: plastic.querySelector('.quantity').value,
    weight: plastic.querySelector('.weight').value,
    emissionFactor: plastic.querySelector('.emission-factor').value,
    co2Emissions: plastic.querySelector('.co2-emissions').value
});
});

return plasticData;
}

// Beispiel mit einer einfachen JSON-Struktur für die Datenbank
const database = {
saveEmissionsData: function(data) {
// Hier kommt später der echte Datenbankcode
localStorage.setItem('emissions_data', JSON.stringify(data));
}
};

function handleSubmit(event) {
event.preventDefault(); // Verhindert Standard-Formular-Submit

// Sammeln aller Daten
const formData = {
companyInfo: {
    name: document.getElementById('companyName').value,
    year: document.getElementById('year').value,
    date: new Date().toISOString()
},
scope1: {
    vehicles: exportVehicleData() || [],
    transport: exportTransportData() || [],
    heating: exportHeatingData() || [],
    technicalGases: exportGasData() || [],
    otherEmitters: exportEmitterData() || []
},
scope2: {
    energy: exportEnergyData() || [],
    indirectEmissions: exportIndirectEmitterData() || []
},
scope3: {
    businessTravel: exportTravelData() || [],
    externalTransport: exportExternalTransportData() || [],
    postal: exportPostalData() || [],
    chemicals: exportChemicalData() || [],
    paper: exportPaperData() || [],
    plastics: exportPlasticData() || []
}
};

// In localStorage speichern
localStorage.setItem('co2Data', JSON.stringify(formData));

// Bestätigungsmeldung
alert('Ihre CO2-Bilanz wurde erfolgreich gespeichert!');

// Weiterleitung zum Dashboard
window.location.href = '../Dashboard.html';
}

// Event Listener für das Formular
document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('co2Survey');
if (form) {
form.addEventListener('submit', handleSubmit);
}
});

// Hilfsfunktionen zum Sammeln der Daten
function collectVehicleData() {
const vehicleFields = document.querySelectorAll('#vehicleFields .dynamic-field');
return Array.from(vehicleFields).map(field => ({
employeeNumber: field.querySelector('.employee-number').value,
vehicleType: field.querySelector('.vehicle-type').value,
annualMileage: field.querySelector('.annual-mileage').value,
emissions: field.querySelector('.co2-emissions').value
}));
}
// Emissionsfaktoren für Metalle (kg CO2/kg)
const METAL_EMISSION_FACTORS = {
'Aluminium, primär': 10.0,
'Bronze': 7.03,
'Kobalt (Co)': 47.62,
'Nickel (Ni)': 19.89,
'Lithium (Li)': 79.29,
'Titan (Ti)': 50.88,
'Zink (Zn)': 2.72
};

function addMetal() {
const metalFields = document.getElementById('metalFields');
const metalId = 'metal-' + Date.now();

const metalHtml = `
<div class="dynamic-field" id="${metalId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="metal-date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="metal-location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Metalltyp</label>
        <select class="metal-type" required onchange="calculateMetalEmissions('${metalId}')">
            ${Object.keys(METAL_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Menge (kg)</label>
        <input type="number" class="metal-amount" min="0" step="0.1" required 
               onchange="calculateMetalEmissions('${metalId}')"
               placeholder="z.B. 10">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/kg)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeMetalUsage('${metalId}')">Entfernen</button>
</div>
`;

metalFields.insertAdjacentHTML('beforeend', metalHtml);
}

function calculateMetalEmissions(metalId) {
const container = document.getElementById(metalId);
const metalType = container.querySelector('.metal-type').value;
const amount = parseFloat(container.querySelector('.metal-amount').value) || 0;
const emissionFactor = METAL_EMISSION_FACTORS[metalType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const emissions = amount * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalMetalEmissions();
}

function updateTotalMetalEmissions() {
const allMetals = document.querySelectorAll('#metalFields .dynamic-field');
let totalEmissions = {};
let totalAmounts = {};

// Initialisiere Summen für jedes Metall
Object.keys(METAL_EMISSION_FACTORS).forEach(type => {
totalEmissions[type] = 0;
totalAmounts[type] = 0;
});

// Berechne Summen pro Metall
allMetals.forEach(metal => {
const type = metal.querySelector('.metal-type').value;
const amount = parseFloat(metal.querySelector('.metal-amount').value) || 0;
const emissions = parseFloat(metal.querySelector('.co2-emissions').value) || 0;

totalAmounts[type] += amount;
totalEmissions[type] += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, emissions]) => {
if (totalAmounts[type] > 0) {
    summaryHtml += `
        <div class="metal-summary">
            <div>${type}:</div>
            <div>Menge: ${totalAmounts[type].toFixed(2)} kg</div>
            <div>Emissionen: ${emissions.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsummen
const totalEmissionsSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
const totalAmount = Object.values(totalAmounts).reduce((a, b) => a + b, 0);

summaryHtml += `
<div class="total-sum">
    <div>Gesamtmenge: ${totalAmount.toFixed(2)} kg</div>
    <div>Gesamtemissionen: ${totalEmissionsSum.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalMetalEmissions').innerHTML = summaryHtml;
}

function removeMetalUsage(metalId) {
document.getElementById(metalId).remove();
updateTotalMetalEmissions();
}

// Funktion zum Exportieren der Daten
function exportMetalData() {
const metalData = [];
const allMetals = document.querySelectorAll('#metalFields .dynamic-field');

allMetals.forEach(metal => {
metalData.push({
    date: metal.querySelector('.metal-date').value,
    location: metal.querySelector('.metal-location').value,
    metalType: metal.querySelector('.metal-type').value,
    amount: metal.querySelector('.metal-amount').value,
    emissionFactor: metal.querySelector('.emission-factor').value,
    co2Emissions: metal.querySelector('.co2-emissions').value
});
});

return metalData;
}

// Emissionsfaktoren für Mineralien und Baustoffe (kg CO2/kg)
const MINERAL_EMISSION_FACTORS = {
'Beton': 0.0612,
'Graphit': 0.0692,
'Glaswolle': 2.66,
'Salz (NaCl)': 0.27,
'Torf': 0.014
};

function addMineralProduct() {
const mineralFields = document.getElementById('mineralFields');
const mineralId = 'mineral-' + Date.now();

const mineralHtml = `
<div class="dynamic-field" id="${mineralId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="mineral-date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="mineral-location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Name von Emittent</label>
        <select class="mineral-type" required onchange="calculateMineralEmissions('${mineralId}')">
            ${Object.keys(MINERAL_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Menge (kg)</label>
        <input type="number" class="mineral-amount" min="0" step="0.1" required 
               onchange="calculateMineralEmissions('${mineralId}')"
               placeholder="z.B. 100">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/kg)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeMineralProduct('${mineralId}')">Entfernen</button>
</div>
`;

mineralFields.insertAdjacentHTML('beforeend', mineralHtml);
}

function calculateMineralEmissions(mineralId) {
const container = document.getElementById(mineralId);
const mineralType = container.querySelector('.mineral-type').value;
const amount = parseFloat(container.querySelector('.mineral-amount').value) || 0;
const emissionFactor = MINERAL_EMISSION_FACTORS[mineralType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const emissions = amount * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalMineralEmissions();
}

function updateTotalMineralEmissions() {
const allMinerals = document.querySelectorAll('#mineralFields .dynamic-field');
let totalEmissions = {};
let totalAmounts = {};

// Initialisiere Summen für jedes Material
Object.keys(MINERAL_EMISSION_FACTORS).forEach(type => {
totalEmissions[type] = 0;
totalAmounts[type] = 0;
});

// Berechne Summen pro Material
allMinerals.forEach(mineral => {
const type = mineral.querySelector('.mineral-type').value;
const amount = parseFloat(mineral.querySelector('.mineral-amount').value) || 0;
const emissions = parseFloat(mineral.querySelector('.co2-emissions').value) || 0;

totalAmounts[type] += amount;
totalEmissions[type] += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, emissions]) => {
if (totalAmounts[type] > 0) {
    summaryHtml += `
        <div class="mineral-summary">
            <div>${type}:</div>
            <div>Menge: ${totalAmounts[type].toFixed(2)} kg</div>
            <div>Emissionen: ${emissions.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsummen
const totalEmissionsSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
const totalAmount = Object.values(totalAmounts).reduce((a, b) => a + b, 0);

summaryHtml += `
<div class="total-sum">
    <div>Gesamtmenge: ${totalAmount.toFixed(2)} kg</div>
    <div>Gesamtemissionen: ${totalEmissionsSum.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalMineralEmissions').innerHTML = summaryHtml;
}

function removeMineralProduct(mineralId) {
document.getElementById(mineralId).remove();
updateTotalMineralEmissions();
}

// Funktion zum Exportieren der Daten
function exportMineralData() {
const mineralData = [];
const allMinerals = document.querySelectorAll('#mineralFields .dynamic-field');

allMinerals.forEach(mineral => {
mineralData.push({
    date: mineral.querySelector('.mineral-date').value,
    location: mineral.querySelector('.mineral-location').value,
    mineralType: mineral.querySelector('.mineral-type').value,
    amount: mineral.querySelector('.mineral-amount').value,
    emissionFactor: mineral.querySelector('.emission-factor').value,
    co2Emissions: mineral.querySelector('.co2-emissions').value
});
});

return mineralData;
}
// Emissionsfaktoren für verschiedene Entsorgungsarten (kg CO2/Einheit)
const DISPOSAL_EMISSION_FACTORS = {
'Deponie': 2.6327,
'MVA Hausmüll': 0.36666,
'Papier für recycling': -0.7068  // Negativer Wert für Recycling (CO2-Einsparung)
};

function addDisposal() {
const disposalFields = document.getElementById('disposalFields');
const disposalId = 'disposal-' + Date.now();

const disposalHtml = `
<div class="dynamic-field" id="${disposalId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="disposal-date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="disposal-location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Entsorgungstyp</label>
        <select class="disposal-type" required onchange="calculateDisposalEmissions('${disposalId}')">
            ${Object.keys(DISPOSAL_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Volumen pro Behälter (L)</label>
        <input type="number" class="container-volume" min="0" required 
               onchange="calculateDisposalEmissions('${disposalId}')"
               placeholder="z.B. 1100">
    </div>
    <div class="form-group">
        <label>Füllgrad des Behälters (%)</label>
        <input type="number" class="fill-level" min="0" max="100" required 
               onchange="calculateDisposalEmissions('${disposalId}')"
               placeholder="z.B. 50">
    </div>
    <div class="form-group">
        <label>Anzahl Leerungen pro Jahr</label>
        <input type="number" class="collections-per-year" min="0" required 
               onchange="calculateDisposalEmissions('${disposalId}')"
               placeholder="z.B. 52">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/Einheit)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeDisposal('${disposalId}')">Entfernen</button>
</div>
`;

disposalFields.insertAdjacentHTML('beforeend', disposalHtml);
}

function calculateDisposalEmissions(disposalId) {
const container = document.getElementById(disposalId);
const disposalType = container.querySelector('.disposal-type').value;
const containerVolume = parseFloat(container.querySelector('.container-volume').value) || 0;
const fillLevel = parseFloat(container.querySelector('.fill-level').value) || 0;
const collectionsPerYear = parseFloat(container.querySelector('.collections-per-year').value) || 0;
const emissionFactor = DISPOSAL_EMISSION_FACTORS[disposalType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die effektive Menge
const effectiveVolume = containerVolume * (fillLevel / 100);
const yearlyVolume = effectiveVolume * collectionsPerYear;

// Berechne die Emissionen
const emissions = yearlyVolume * emissionFactor / 1000; // Umrechnung von L in m³
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalDisposalEmissions();
}

function updateTotalDisposalEmissions() {
const allDisposals = document.querySelectorAll('#disposalFields .dynamic-field');
let totalEmissions = {};
let totalVolumes = {};

// Initialisiere Summen für jeden Typ
Object.keys(DISPOSAL_EMISSION_FACTORS).forEach(type => {
totalEmissions[type] = 0;
totalVolumes[type] = 0;
});

// Berechne Summen pro Typ
allDisposals.forEach(disposal => {
const type = disposal.querySelector('.disposal-type').value;
const containerVolume = parseFloat(disposal.querySelector('.container-volume').value) || 0;
const fillLevel = parseFloat(disposal.querySelector('.fill-level').value) || 0;
const collectionsPerYear = parseFloat(disposal.querySelector('.collections-per-year').value) || 0;
const emissions = parseFloat(disposal.querySelector('.co2-emissions').value) || 0;

const yearlyVolume = containerVolume * (fillLevel / 100) * collectionsPerYear;

totalVolumes[type] += yearlyVolume;
totalEmissions[type] += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, emissions]) => {
if (totalVolumes[type] > 0) {
    summaryHtml += `
        <div class="disposal-summary">
            <div>${type}:</div>
            <div>Jahresvolumen: ${totalVolumes[type].toFixed(2)} L</div>
            <div>Emissionen: ${emissions.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsummen
const totalEmissionsSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
const totalVolumeSum = Object.values(totalVolumes).reduce((a, b) => a + b, 0);

summaryHtml += `
<div class="total-sum">
    <div>Gesamtvolumen: ${totalVolumeSum.toFixed(2)} L</div>
    <div>Gesamtemissionen: ${totalEmissionsSum.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalDisposalEmissions').innerHTML = summaryHtml;
}

function removeDisposal(disposalId) {
document.getElementById(disposalId).remove();
updateTotalDisposalEmissions();
}

// Funktion zum Exportieren der Daten
function exportDisposalData() {
const disposalData = [];
const allDisposals = document.querySelectorAll('#disposalFields .dynamic-field');

allDisposals.forEach(disposal => {
disposalData.push({
    date: disposal.querySelector('.disposal-date').value,
    location: disposal.querySelector('.disposal-location').value,
    disposalType: disposal.querySelector('.disposal-type').value,
    containerVolume: disposal.querySelector('.container-volume').value,
    fillLevel: disposal.querySelector('.fill-level').value,
    collectionsPerYear: disposal.querySelector('.collections-per-year').value,
    emissionFactor: disposal.querySelector('.emission-factor').value,
    co2Emissions: disposal.querySelector('.co2-emissions').value
});
});

return disposalData;
}

// Emissionsfaktoren für verschiedene Wassertypen (kg CO2/m³)
const WATER_EMISSION_FACTORS = {
'Trinkwasser': 0.00229,
'Abwasser/Schmutzwasser': 0.000274
};

function addWaterUsage() {
const waterFields = document.getElementById('waterFields');
const waterId = 'water-' + Date.now();

const waterHtml = `
<div class="dynamic-field" id="${waterId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="water-date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="water-location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Wassertyp</label>
        <select class="water-type" required onchange="calculateWaterEmissions('${waterId}')">
            ${Object.keys(WATER_EMISSION_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="form-group">
        <label>Verbrauch (m³)</label>
        <input type="number" class="water-consumption" min="0" required 
               onchange="calculateWaterEmissions('${waterId}')"
               placeholder="z.B. 500">
    </div>
    <div class="form-group">
        <label>CO₂-Faktor (kg CO₂/m³)</label>
        <input type="number" class="emission-factor" readonly>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeWaterUsage('${waterId}')">Entfernen</button>
</div>
`;

waterFields.insertAdjacentHTML('beforeend', waterHtml);
}

function calculateWaterEmissions(waterId) {
const container = document.getElementById(waterId);
const waterType = container.querySelector('.water-type').value;
const consumption = parseFloat(container.querySelector('.water-consumption').value) || 0;
const emissionFactor = WATER_EMISSION_FACTORS[waterType];

// Setze den Emissionsfaktor
container.querySelector('.emission-factor').value = emissionFactor;

// Berechne die Emissionen
const emissions = consumption * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

// Aktualisiere Gesamtsumme
updateTotalWaterEmissions();
}

function updateTotalWaterEmissions() {
const allWaterUsages = document.querySelectorAll('#waterFields .dynamic-field');
let totalEmissions = {};
let totalConsumption = {};

// Initialisiere Summen für jeden Wassertyp
Object.keys(WATER_EMISSION_FACTORS).forEach(type => {
totalEmissions[type] = 0;
totalConsumption[type] = 0;
});

// Berechne Summen pro Typ
allWaterUsages.forEach(usage => {
const type = usage.querySelector('.water-type').value;
const consumption = parseFloat(usage.querySelector('.water-consumption').value) || 0;
const emissions = parseFloat(usage.querySelector('.co2-emissions').value) || 0;

totalConsumption[type] += consumption;
totalEmissions[type] += emissions;
});

// Erstelle HTML für die Summenanzeige
let summaryHtml = '<div class="totals-grid">';
Object.entries(totalEmissions).forEach(([type, emissions]) => {
if (totalConsumption[type] > 0) {
    summaryHtml += `
        <div class="water-summary">
            <div>${type}:</div>
            <div>Verbrauch: ${totalConsumption[type].toFixed(2)} m³</div>
            <div>Emissionen: ${emissions.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
});

// Gesamtsummen
const totalEmissionsSum = Object.values(totalEmissions).reduce((a, b) => a + b, 0);
const totalConsumptionSum = Object.values(totalConsumption).reduce((a, b) => a + b, 0);

summaryHtml += `
<div class="total-sum">
    <div>Gesamtverbrauch: ${totalConsumptionSum.toFixed(2)} m³</div>
    <div>Gesamtemissionen: ${totalEmissionsSum.toFixed(2)} kg CO₂</div>
</div>
</div>`;

// Aktualisiere die Anzeige
document.getElementById('totalWaterEmissions').innerHTML = summaryHtml;
}

function removeWaterUsage(waterId) {
document.getElementById(waterId).remove();
updateTotalWaterEmissions();
}

// Funktion zum Exportieren der Daten
function exportWaterData() {
const waterData = [];
const allWaterUsages = document.querySelectorAll('#waterFields .dynamic-field');

allWaterUsages.forEach(usage => {
waterData.push({
    date: usage.querySelector('.water-date').value,
    location: usage.querySelector('.water-location').value,
    waterType: usage.querySelector('.water-type').value,
    consumption: usage.querySelector('.water-consumption').value,
    emissionFactor: usage.querySelector('.emission-factor').value,
    co2Emissions: usage.querySelector('.co2-emissions').value
});
});

return waterData;
}
// Emissionsfaktoren und durchschnittliche Preise

const ENERGY_FACTORS = {
'Strom': {
emissionFactor: 0.356,
averagePrice: 0.32, // Dortmund Gewerbepreis
unit: 'kWh'
},
'Fernwärme': {
emissionFactor: 0.28,
averagePrice: 0.12,
unit: 'kWh'
},
'Strom aus erneuerbaren Quellen': {
emissionFactor: 0.0,
averagePrice: 0.34,
unit: 'kWh'
}
};

function addEnergyConsumption() {
const energyFields = document.getElementById('energyFields');
const energyId = 'energy-' + Date.now();

const energyHtml = `
<div class="dynamic-field" id="${energyId}">
    <div class="form-group">
        <label>Datum</label>
        <input type="date" class="energy-date" required>
    </div>
    <div class="form-group">
        <label>Standort</label>
        <input type="text" class="energy-location" required placeholder="z.B. Dortmund">
    </div>
    <div class="form-group">
        <label>Energietyp</label>
        <select class="energy-type" required onchange="updateInputFields('${energyId}')">
            ${Object.keys(ENERGY_FACTORS).map(type => 
                `<option value="${type}">${type}</option>`
            ).join('')}
        </select>
    </div>
    <div class="input-toggle">
        <label>Berechnungsmethode</label>
        <select class="calculation-method" onchange="toggleInputMethod('${energyId}')">
            <option value="consumption">Nach Verbrauch</option>
            <option value="cost">Nach Kosten</option>
        </select>
    </div>
    <div class="consumption-input">
        <div class="form-group">
            <label>Verbrauch (kWh)
            <span class="tooltip-icon" tabindex="0">ℹ</span>
<span class="tooltip-text">Geben Sie hier den jährlichen Stromverbrauch in kWh ein, z.B. 4000 kWh für ein kleines Büro.</span></label>
            <input type="number" class="energy-consumption" min="0" 
                   onchange="calculateEmissions('${energyId}')"
                   placeholder="z.B. 4000">
        </div>
    </div>
    <div class="cost-input" style="display:none;">
        <div class="form-group">
            <label>Kosten (€)</label>
            <input type="number" class="energy-cost" min="0" 
                   onchange="calculateEmissionsFromCost('${energyId}')"
                   placeholder="z.B. 1600">
        </div>
        <div class="form-group">
            <label>Preis pro kWh (€)</label>
            <input type="number" class="energy-price" step="0.01" 
                   placeholder="Standard-Preis wird verwendet">
        </div>
    </div>
    <div class="form-group">
        <label>CO₂-Emissionen (kg)</label>
        <input type="number" class="co2-emissions" readonly>
    </div>
    <button type="button" class="remove-field" onclick="removeEnergyConsumption('${energyId}')">Entfernen</button>
</div>
`;

energyFields.insertAdjacentHTML('beforeend', energyHtml);
}

function calculateEmissions(energyId) {
const container = document.getElementById(energyId);
const energyType = container.querySelector('.energy-type').value;
const consumption = parseFloat(container.querySelector('.energy-consumption').value) || 0;
const emissionFactor = ENERGY_FACTORS[energyType].emissionFactor;

// Berechne Emissionen
const emissions = consumption * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

updateTotalEmissions();
}

function calculateEmissionsFromCost(energyId) {
const container = document.getElementById(energyId);
const energyType = container.querySelector('.energy-type').value;
const cost = parseFloat(container.querySelector('.energy-cost').value) || 0;
const pricePerKWh = parseFloat(container.querySelector('.energy-price').value) || 
                ENERGY_FACTORS[energyType].averagePrice;

// Berechne Verbrauch aus Kosten
const consumption = cost / pricePerKWh;

// Setze berechneten Verbrauch
container.querySelector('.energy-consumption').value = consumption.toFixed(2);

// Berechne Emissionen
calculateEmissions(energyId);
}

function updateTotalEmissions() {
const allFields = document.querySelectorAll('#energyFields .dynamic-field');
let totalsByType = {};

// Initialisiere Summen für jeden Energietyp
Object.keys(ENERGY_FACTORS).forEach(type => {
totalsByType[type] = {
    consumption: 0,
    cost: 0,
    emissions: 0
};
});

// Sammle Daten von allen Feldern
allFields.forEach(field => {
const type = field.querySelector('.energy-type').value;
const consumption = parseFloat(field.querySelector('.energy-consumption').value) || 0;
const emissions = parseFloat(field.querySelector('.co2-emissions').value) || 0;

totalsByType[type].consumption += consumption;
totalsByType[type].emissions += emissions;
});

// Erstelle Zusammenfassung
let summaryHtml = '<div class="totals-summary">';
Object.entries(totalsByType).forEach(([type, data]) => {
if (data.consumption > 0) {
    summaryHtml += `
        <div class="type-summary">
            <h4>${type}</h4>
            <p>Verbrauch: ${data.consumption.toFixed(2)} kWh</p>
            <p>Emissionen: ${data.emissions.toFixed(2)} kg CO₂</p>
        </div>
    `;
}
});

// Gesamtsumme
const totalEmissions = Object.values(totalsByType)
.reduce((sum, data) => sum + data.emissions, 0);

summaryHtml += `
<div class="total-summary">
    <h4>Gesamtemissionen</h4>
    <p>${totalEmissions.toFixed(2)} kg CO₂</p>
</div>
</div>`;

document.getElementById('totalEnergyEmissions').innerHTML = summaryHtml;
}

function updateInputFields(energyId) {
const container = document.getElementById(energyId);
const energyType = container.querySelector('.energy-type').value;
const method = container.querySelector('.calculation-method').value;

if (method === 'cost') {
const priceInput = container.querySelector('.energy-price');
priceInput.value = ENERGY_FACTORS[energyType].averagePrice;
}

calculateEmissions(energyId);
}

function toggleInputMethod(energyId) {
const container = document.getElementById(energyId);
const method = container.querySelector('.calculation-method').value;
const consumptionDiv = container.querySelector('.consumption-input');
const costDiv = container.querySelector('.cost-input');

consumptionDiv.style.display = method === 'consumption' ? 'block' : 'none';
costDiv.style.display = method === 'cost' ? 'block' : 'none';

if (method === 'cost') {
const energyType = container.querySelector('.energy-type').value;
const priceInput = container.querySelector('.energy-price');
if (!priceInput.value) {
    priceInput.value = ENERGY_FACTORS[energyType].averagePrice;
}
}
}

function removeEnergyConsumption(energyId) {
document.getElementById(energyId).remove();
updateTotalEmissions();
}
// Event Listener für das gesamte Dokument
document.addEventListener('DOMContentLoaded', function() {
initializeForm();
});

function initializeForm() {
// Stelle sicher, dass die Container existieren
if (!document.getElementById('energyFields')) {
console.error('energyFields Container nicht gefunden');
return;
}
}

// Verbesserte Version der addEnergyConsumption Funktion
function addEnergyConsumption() {
try {
const energyFields = document.getElementById('energyFields');
if (!energyFields) {
    console.error('Container nicht gefunden');
    return;
}

const energyId = 'energy-' + Date.now();
const energyHtml = `
    <div class="dynamic-field" id="${energyId}">
        <div class="form-group">
            <label>Datum</label>
            <input type="date" class="energy-date" required>
        </div>
        <div class="form-group">
            <label>Standort</label>
            <input type="text" class="energy-location" required placeholder="z.B. Dortmund">
        </div>
        <div class="form-group">
            <label>Energietyp</label>
            <select class="energy-type" required onchange="updateInputFields('${energyId}')">
                <option value="Strom">Strom (0,32 €/kWh)</option>
                <option value="Fernwärme">Fernwärme (0,12 €/kWh)</option>
                <option value="Strom aus erneuerbaren Quellen">Ökostrom (0,34 €/kWh)</option>
            </select>
        </div>
        <div class="input-toggle">
            <label>Berechnungsmethode</label>
            <select class="calculation-method" onchange="toggleInputMethod('${energyId}')">
                <option value="consumption">Nach Verbrauch (kWh)</option>
                <span class="tooltip-icon" tabindex="0">ℹ</span>
<span class="tooltip-text">Geben Sie hier den jährlichen Stromverbrauch in kWh ein, z.B. 4000 kWh für ein kleines Büro.</span>

                <option value="cost">Nach Kosten (€)</option>
            </select>
        </div>
        <div class="consumption-input">
            <div class="form-group">
                <label>Verbrauch (kWh
                <span class="tooltip-icon" tabindex="0">ℹ</span>
<span class="tooltip-text">Geben Sie hier den jährlichen Stromverbrauch in kWh ein, z.B. 4000 kWh für ein kleines Büro.</span>)</label>
                <input type="number" class="energy-consumption" min="0" 
                       onchange="calculateEmissions('${energyId}')"
                       placeholder="z.B. 4000">
            </div>
        </div>
        <div class="cost-input" style="display:none;">
            <div class="form-group">
                <label>Kosten (€)</label>
                <input type="number" class="energy-cost" min="0" 
                       onchange="calculateEmissionsFromCost('${energyId}')"
                       placeholder="z.B. 1600">
            </div>
            <div class="form-group">
                <label>Preis pro kWh (€)</label>
                <input type="number" class="energy-price" step="0.01" 
                       placeholder="Standard-Preis wird verwendet">
            </div>
        </div>
        <div class="form-group">
            <label>CO₂-Emissionen (kg)</label>
            <input type="number" class="co2-emissions" readonly>
        </div>
        <button type="button" class="remove-field" onclick="removeEnergyConsumption('${energyId}')">Entfernen</button>
    </div>
`;

energyFields.insertAdjacentHTML('beforeend', energyHtml);
} catch (error) {
console.error('Fehler beim Hinzufügen:', error);
}
}

// Vereinfachte Berechnung
function calculateEmissions(energyId) {
try {
const container = document.getElementById(energyId);
if (!container) return;

const energyType = container.querySelector('.energy-type').value;
const consumption = parseFloat(container.querySelector('.energy-consumption').value) || 0;

let emissionFactor;
switch(energyType) {
    case 'Strom':
        emissionFactor = 0.356;
        break;
    case 'Fernwärme':
        emissionFactor = 0.28;
        break;
    case 'Strom aus erneuerbaren Quellen':
        emissionFactor = 0.0;
        break;
    default:
        emissionFactor = 0;
}

const emissions = consumption * emissionFactor;
container.querySelector('.co2-emissions').value = emissions.toFixed(2);

updateTotalEmissions();
} catch (error) {
console.error('Berechnungsfehler:', error);
}
}

function updateTotalEmissions() {
try {
const allFields = document.querySelectorAll('#energyFields .dynamic-field');
let total = 0;
let consumptionByType = {
    'Strom': 0,
    'Fernwärme': 0,
    'Strom aus erneuerbaren Quellen': 0
};

allFields.forEach(field => {
    const type = field.querySelector('.energy-type').value;
    const emissions = parseFloat(field.querySelector('.co2-emissions').value) || 0;
    const consumption = parseFloat(field.querySelector('.energy-consumption').value) || 0;
    
    total += emissions;
    consumptionByType[type] += consumption;
});

const totalDisplay = document.getElementById('totalEnergyEmissions');
if (totalDisplay) {
    totalDisplay.innerHTML = `
        <div class="emissions-summary">
            <h4>Zusammenfassung:</h4>
            <div>Strom: ${consumptionByType['Strom'].toFixed(2)} kWh</div>
            <div>Fernwärme: ${consumptionByType['Fernwärme'].toFixed(2)} kWh</div>
            <div>Ökostrom: ${consumptionByType['Strom aus erneuerbaren Quellen'].toFixed(2)} kWh</div>
            <div class="total">Gesamtemissionen: ${total.toFixed(2)} kg CO₂</div>
        </div>
    `;
}
} catch (error) {
console.error('Fehler bei der Summenberechnung:', error);
}
}

function removeEnergyConsumption(energyId) {
try {
const element = document.getElementById(energyId);
if (element) {
    element.remove();
    updateTotalEmissions();
}
} catch (error) {
console.error('Fehler beim Entfernen:', error);
}
}
function calculateEmissionsFromCost(energyId) {
try {
const container = document.getElementById(energyId);
const energyType = container.querySelector('.energy-type').value;
const cost = parseFloat(container.querySelector('.energy-cost').value) || 0;
let pricePerKWh = parseFloat(container.querySelector('.energy-price').value);

// Wenn kein Preis eingegeben wurde, Standard-Preis verwenden
if (!pricePerKWh) {
    switch(energyType) {
        case 'Strom':
            pricePerKWh = 0.32;
            break;
        case 'Fernwärme':
            pricePerKWh = 0.12;
            break;
        case 'Strom aus erneuerbaren Quellen':
            pricePerKWh = 0.34;
            break;
        default:
            pricePerKWh = 0.32;
    }
    container.querySelector('.energy-price').value = pricePerKWh;
}

// Berechne Verbrauch aus Kosten
const consumption = cost / pricePerKWh;
container.querySelector('.energy-consumption').value = consumption.toFixed(2);

// Berechne Emissionen
calculateEmissions(energyId);
} catch (error) {
console.error('Fehler bei der Kostenberechnung:', error);
}
}

function toggleInputMethod(energyId) {
try {
const container = document.getElementById(energyId);
const method = container.querySelector('.calculation-method').value;
const consumptionDiv = container.querySelector('.consumption-input');
const costDiv = container.querySelector('.cost-input');

consumptionDiv.style.display = method === 'consumption' ? 'block' : 'none';
costDiv.style.display = method === 'cost' ? 'block' : 'none';

if (method === 'cost') {
    const energyType = container.querySelector('.energy-type').value;
    const priceInput = container.querySelector('.energy-price');
    if (!priceInput.value) {
        switch(energyType) {
            case 'Strom':
                priceInput.value = 0.32;
                break;
            case 'Fernwärme':
                priceInput.value = 0.12;
                break;
            case 'Strom aus erneuerbaren Quellen':
                priceInput.value = 0.34;
                break;
        }
    }
}
} catch (error) {
console.error('Fehler beim Umschalten der Eingabemethode:', error);
}
}
function downloadDataAsJSON() {
// Daten aus dem localStorage holen:
const data = localStorage.getItem('co2Data');

if (!data) {
alert('Keine Daten zum Herunterladen vorhanden.');
return;
}

// Erstelle ein Blob-Objekt aus dem JSON-String
const blob = new Blob([data], {type: 'application/json'});
const url = URL.createObjectURL(blob);

// Erstelle ein temporäres <a>-Element zum Herunterladen:
const a = document.createElement('a');
a.href = url;
a.download = 'co2Data.json';  // Der gewünschte Dateiname

// Füge das <a>-Element dem Dokument hinzu, löse den Klick aus und entferne es wieder:
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

// URL wieder freigeben
URL.revokeObjectURL(url);
}
document.addEventListener('DOMContentLoaded', function() {
const downloadBtn = document.getElementById('downloadDataBtn');
if (downloadBtn) {
downloadBtn.addEventListener('click', downloadDataAsJSON);
}
});

// Ähnliche Funktionen für andere Bereiche...
// Rest of the JavaScript functions remain similar...

function handleSubmit(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

    // Sammeln aller Daten aus deinen Eingabefeldern
    const formData = {
        companyInfo: {
            name: document.getElementById('companyName').value,
            year: document.getElementById('year').value,
            date: new Date().toISOString()
        },
        scope1: {
            vehicles: exportVehicleData() || [],
            transport: exportTransportData() || [],
            heating: exportHeatingData() || [],
            technicalGases: exportGasData() || [],
            otherEmitters: exportEmitterData() || []
        },
        scope2: {
            energy: exportEnergyData() || [],
            indirectEmissions: exportIndirectEmitterData() || []
        },
        scope3: {
            businessTravel: exportTravelData() || [],
            externalTransport: exportExternalTransportData() || [],
            postal: exportPostalData() || [],
            chemicals: exportChemicalData() || [],
            paper: exportPaperData() || [],
            plastics: exportPlasticData() || [],
            metals: exportMetalData() || [],
            minerals: exportMineralData() || [],
            disposal: exportDisposalData() || [],
            water: exportWaterData() || []
        }
    };

    // Speichere die Daten im LocalStorage
    localStorage.setItem('co2Data', JSON.stringify(formData));

    // Optional: Zeige eine Bestätigungsmeldung
    alert('Ihre CO2-Bilanz wurde erfolgreich gespeichert!');

    // Weiterleitung zum Dashboard (Passe den Pfad an deine Struktur an)
    window.location.href = '../Dashboard.html';
}
async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const responseDiv = document.getElementById("response");

    try {
        const response = await fetch("http://localhost:4001/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: userInput })
        });

        const data = await response.json();
        responseDiv.innerText = "Antwort: " + data.reply;
    } catch (error) {
        responseDiv.innerText = "Fehler: " + error.message;
    }
}

