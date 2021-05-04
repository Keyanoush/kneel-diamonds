import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            const [, inputId] = event.target.value.split("--")
            setMetal(parseInt(inputId))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    html += metals.map(metal => {
        return `<li>
            <input type="radio" name="metal" value="metal--${metal.id}" /> ${metal.metal} is $${metal.price.toFixed(2)}
        </li>`
    }).join("")

    html += "</ul>"
    return html
}

