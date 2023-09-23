const glazingOptions = document.getElementById("glazingOptions");
const packSelect = document.getElementById("packSelect");
const basePrice = 2.49;

const glazing = [
    {
        key: "Keep original",
        value: 0.00,
    },
    {
        key: "Sugar milk",
        value: 0.00,
    },
    {
        key: "Vanilla milk",
        value: 0.50,
    },
    {
        key: "Double chocolate",
        value: 1.50,
    }
];

const packSize = [
    {
        key: "1",
        value: 1,
    },
    {
        key: "3",
        value: 3,
    },
    {
        key: "6",
        value: 5,
    },
    {
        key: "12",
        value: 10,
    }
];

for (let i=0; i < glazing.length; i++) {
    const element = document.createElement("option");
    element.value = glazing[i].value;
    element.textContent = glazing[i].key;
    glazingOptions.appendChild(element);
}

for (let i=0; i < packSize.length; i++) {
    const element = document.createElement("option");
    element.value = packSize[i].value;
    element.textContent = packSize[i].key;
    packSelect.appendChild(element);
}

function computeTotalPrice(element) {
    const glazingPrice = parseFloat(glazingOptions.value);
    const packPrice = parseInt(packSelect.value);
    const grandTotal = "$" + parseFloat((basePrice + glazingPrice) * packPrice).toFixed(2);
    document.getElementById("detailPrice").innerHTML = grandTotal;
}

