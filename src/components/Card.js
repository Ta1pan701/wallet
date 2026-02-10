export function Card(item) {
    let cardItem = document.createElement("div")
    let type = document.createElement("h3")
    let value = document.createElement("p")

    type.textContent = item.type
    value.textContent = item.value

    value.classList.add("value")
    type.classList.add("type")

    cardItem.classList.add("card")
    cardItem.append(type, value)
    return cardItem
}