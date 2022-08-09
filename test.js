const RunTest =  {
    operators1() {
        setTimeout(() => {
            try {
                let text = document.getElementById("willpower").innerText;
                if (parseInt(text) < 100) {
                    document.getElementById("displayOnSuccess").hidden = false
                } else {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected less than 100, found ${text}`
                }
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    },
    operators2() {
        setTimeout(() => {
            try {
                let text = document.getElementById("eat").innerText;
                if (text === "yes") {
                    document.getElementById("displayOnSuccess").hidden = false
                } else {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected "yes", found ${text}`
                }
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    }

}