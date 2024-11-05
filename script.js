const survivorPerks = []
const killerPerks = []
var selectedRole = "survivor"

window.addEventListener("load",init)

function init() {
    fetchSurvivorPerks()
    fetchKillerPerks()
}

function fetchSurvivorPerks() {
    fetch("perks.json")
        .then((response) => response.json())
        .then((data) => {
            pushSurvivorPerks(data.sperks)
        })
        .catch((err) => console.log("error during sperks fetch", err))
}

function fetchKillerPerks() {
    fetch("perks.json")
        .then((response) => response.json())
        .then((data) => {
            pushKillerPerks(data.kperks)
        })
        .catch((err) => console.log("error during kperks fetch", err))
}

function pushSurvivorPerks(data) {
    data.forEach(element => {
        survivorPerks.push(element)
    });
}

function pushKillerPerks(data) {
    data.forEach(element => {
        killerPerks.push(element)
    });
}

//show perks

function showSurvivorPerks(category) {
    if (category == "all") {
        survivorPerks.forEach(element => {
            console.log(element.name);
        });
    } else {
        try {
            survivorPerks.forEach(perk => {
                let categoryMatch = false

                perk.cat.forEach(categ => {
                    if (categ == category) {
                        categoryMatch = true
                    }
                });

                if (categoryMatch) {
                    console.log(perk);
                }
            });
        } catch (error) {
            console.error("error during showing survivor perks in given category",error);
        }
    }
    
}

function showKillerPerks(category) {
    if (category == "all") {
        killerPerks.forEach(element => {
            console.log(element.name);
        });
    } else {
        try {
            killerPerks.forEach(perk => {
                let categoryMatch = false

                perk.cat.forEach(categ => {
                    if (categ == category) {
                        categoryMatch = true
                    }
                });

                if (categoryMatch) {
                    console.log(perk);
                }
            });
        } catch (error) {
            console.error("error during showing killer perks in given category",error);
        }
    }
}

function generateSurvivorBuild() {
    let checkboxes = document.getElementsByClassName("survCheckbox")
    let selected = []
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].selected == true) {
            selected.push(checkboxes[index])
        }
    }
    console.log(selected);


}

function switchRole() {
    if (selectedRole == "survivor") {
        selectedRole = "killer"
    } else {
        selectedRole = "survivor"
    }

    if (selectedRole == "survivor") {
        document.getElementById("currentRoleDisplay").innerHTML = "Survivor"
        document.getElementById("categorySelectionSurvivor").style.display = "block"
        document.getElementById("categorySelectionKiller").style.display = "none"
        
    }

    if (selectedRole == "killer") {
        document.getElementById("currentRoleDisplay").innerHTML = "Killer"
        document.getElementById("categorySelectionSurvivor").style.display = "none"
        document.getElementById("categorySelectionKiller").style.display = "block"
    }

    
}


