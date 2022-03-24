export default function generateColor(color: string) {
    var takeColor = ''

    if (color === "bug") {
        takeColor = '#D4DFA7'
    } else if (color === "dragon") {
        takeColor = '#B9B9FC'
    } else if (color === "fairy") {
        takeColor = '#F8DCFE'
    } else if (color === "fire") {
        takeColor = '#FBC8A9'
    } else if (color === "ghost") {
        takeColor = '#CBC1E8'
    } else if (color === "ground") {
        takeColor = '#FBC8A9'
    } else if (color === "normal") {
        takeColor = '#E4E0CF'
    } else if (color === "pshychic") {
        takeColor = '#F8CADE'
    } else if (color === "steel") {
        takeColor = '#D9D7E5'
    } else if (color === "dark") {
        takeColor = '#C9C0C0'
    } else if (color === "electric") {
        takeColor = '#FFE9A7'
    } else if (color === "fighting") {
        takeColor = '#E7BDB8'
    } else if (color === "flying") {
        takeColor = '#7A9FF2'
    } else if (color === "grass") {
        takeColor = '#B5EAAF'
    } else if (color === "ice") {
        takeColor = '#AFD9FD'
    } else if (color === "poison") {
        takeColor = '#E6C2EF'
    } else if (color === "rock") {
        takeColor = '#ECD8B4'
    } else if (color === "water") {
        takeColor = '#AFD9FD'
    } else {
        takeColor = '#d4d4d4'
    }

    return takeColor
}