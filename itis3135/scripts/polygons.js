// Will be what runs off of the button press
function getNumSides() {
    let numSides = prompt("The Blissful Hippo would like to know the number of sides (0-10): ");
    if (numSides == "" || numSides == null) {
        alert("User did not enter a number, the hippo is sad.");
    } else {
        if (validateEntry(numSides) === true) {
            officialNumSides = Math.round(Math.abs(numSides));
            let sidesNum = getShape(officialNumSides);
            alert(sidesNum);
        }
    }
}

// Validates the right fields are inputted
function validateEntry(numSides) {
    if (isNaN(numSides) || numSides < 1 || numSides > 10) {
        alert("Entry is invalid");
        return false;
    } else {
        return true;
    }
}

// Makes a switch function for determaining what type of polygon is possible form the number of sides
function getShape(officialNumSides) {
    let type;
    switch (officialNumSides) {
        case 0:
            type = "Non-Existant";
            break;
        case 1:
            type = "Henagon";
            break;
        case 2:
            type = "Digon";
            break;
        case 3:
            type = "Trigon";
            break;
        case 4:
            type = "Tetragon";
            break;
        case 5:
            type = "Pentagon";
            break;
        case 6:
            type = "Hexagon";
            break;
        case 7:
            type = "Heptagon";
            break;
        case 8:
            type = "Octagon";
            break;
        case 9:
            type = "Enneagon";
            break;
        case 10:
            type = "Decagon";
            break;
    }
    return type;
}
