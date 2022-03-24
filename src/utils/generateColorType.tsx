export default function generateColorType(color: string) {
    var takeColor = ''

    if (color === "bug") {
        takeColor = '#bac785'
    } else if (color === "dragon") {
        takeColor = '#8a8ac2'
    } else if (color === "fairy") {
        takeColor = '#c8a9cf'
    } else if (color === "fire") {
        takeColor = '#dba27f'
    } else if (color === "ghost") {
        takeColor = '#9a8fb8'
    } else if (color === "ground") {
        takeColor = '#e39c71'
    } else if (color === "normal") {
        takeColor = '#e0d49d'
    } else if (color === "pshychic") {
        takeColor = '#f0afcb'
    } else if (color === "steel") {
        takeColor = '#bab6d4'
    } else if (color === "dark") {
        takeColor = '#a89999'
    } else if (color === "electric") {
        takeColor = '#e6cc81'
    } else if (color === "fighting") {
        takeColor = '#faaaa0'
    } else if (color === "flying") {
        takeColor = '#506dad'
    } else if (color === "grass") {
        takeColor = '#95c98f'
    } else if (color === "ice") {
        takeColor = '#89adcc'
    } else if (color === "poison") {
        takeColor = '#b893c2'
    } else if (color === "rock") {
        takeColor = '#ebcc96'
    } else if (color === "water") {
        takeColor = '#90b3d1'
    } else {
        takeColor = 'gray'
    }

    return takeColor
}