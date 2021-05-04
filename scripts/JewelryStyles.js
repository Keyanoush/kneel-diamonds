import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            const [, inputId ] = event.target.value.split("--")
            setStyle(parseInt(inputId)) 
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"


    const listItems = styles.map(

        style => {
            return `<li>
                <input type="radio" name="style" value="style--${style.id}" /> ${style.style} is $${style.price.toFixed(2)}
            </li>`
        }
    )

    html += listItems.join("")

    html += "</ul>"
    return html
}

