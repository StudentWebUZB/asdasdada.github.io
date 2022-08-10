let start = document.getElementById("start")
let password = Math.floor(Math.random() * 11)

document.body.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        let number = document.getElementById("number")
        let step = number.value ? number.value : 5
        let count = step

        for (let i = 0; i < step; i++) {
            let chance = prompt(`Sizda ${count} ta imkoniyat bor `)

            if (count === step) {
                if (chance == null) {
                    document.getElementById("count").innerText = `Siz urunishda bekor qildingiz`
                    document.getElementById("count").style.color = "red"
                    break
                }
            } else {
                if (chance == null) {
                    document.getElementById("count").innerText = `Siz ${count} urunishda bekor qildingiz`
                    document.getElementById("count").style.color = "red"
                    break
                }
            }


            if (parseInt(chance) === password) {
                document.getElementById("count").innerText = `Siz Yutdingiz ${count} ta urunishda topdingiz! to'g'ri javob ${chance}`
                document.getElementById("count").style.color = "green"
                break
            } else {
                if (chance === "") {
                    document.getElementById("count").innerText = `Siz ${count} urunishda bekor qildingiz`
                    document.getElementById("count").style.color = "red"
                    break
                } else {
                    count--
                    document.getElementById("count").innerText = `Siz ${count} urunishda bekor qildingiz`
                    document.getElementById("count").style.color = "red"
                }
            }

            if (count === 0) {
                document.getElementById("count").innerText = `Game over`
                document.getElementById("count").style.color = "red"
                number.value = ""
            }
        }
    }
}, false);


start.addEventListener("click", () => {
    let number = document.getElementById("number")
    let step = number.value ? number.value : 5
    let count = step
    for (let i = 0; i < step; i++) {
        let chance = prompt(`Sizda ${count} ta imkoniyat bor`)
        if (count === step) {
            if (chance == null) {
                document.getElementById("count").innerText = `Siz urunishda bekor qildingiz`
                document.getElementById("count").style.color = "red"
                break
            }
        } else {
            if (chance == null) {
                document.getElementById("count").innerText = `Siz ${count} urunishda bekor qildingiz`
                document.getElementById("count").style.color = "red"
                break
            }
        }


        if (parseInt(chance) === password) {
            document.getElementById("count").innerText = `Siz Yutdingiz ${count} ta urunishda topdingiz! to'g'ri javob ${chance}`
            document.getElementById("count").style.color = "green"
            break
        } else {
            if (chance === "") {
                document.getElementById("count").innerText = `Siz ${count} urunishda bekor qildingiz`
                document.getElementById("count").style.color = "red"
                break
            } else {
                count--
                document.getElementById("count").innerText = `Siz ${count} urunishda bekor qildingiz`
                document.getElementById("count").style.color = "red"
            }


        }

        if (count === 0) {
            document.getElementById("count").innerText = `Game over`
            document.getElementById("count").style.color = "red"
            number.value = ""
        }
    }
})


// let age = prompt('Сколько тебе лет?', 100);