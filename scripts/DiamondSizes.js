import { getSizes, setSize } from "./database.js"

const metals = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            const [, inputId] = event.target.value.split("--")
            setSize(parseInt(inputId))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"


    const listItems = metals.map(size => {
        return `<li>
        <input type="radio" name="size" value="size--${size.id}" /> ${size.carets} carets costs $${size.price.toFixed(2)}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

