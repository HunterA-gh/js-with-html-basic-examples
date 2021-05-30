let data = ["2xM", "Qb6", "9at693s", "X11P1", "fvv22S",
    "20BCx0rK", "3vKSJ2o9", "jvi", "t6oe", "3t21VH", "9V4Gkvbk",
    "9Hn88", "T4j7", "zo27Ixgi", "uui21", "y3hYlWa", "R9zL", "GJs5",
    "e5dZ", "DFkW"]

const info = document.querySelector("#info");

let s = data.map((item) => {
    return (
        '<div>' + item + '</div>'
    )}
)

info.innerHTML = s.join('\n');