
const button = document.querySelector('#button')
const body = document.querySelector('#body')
const colors = ['red','green','blue','yellow','pink','purple']
/*
button.addEventListener('click', changeBackground)
function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}
*/
document.getElementById("hex").innerHTML = "hex color : "

button.addEventListener('click', changeBackground)

function changeBackground() {
    body.style.backgroundColor = random_hex_color_code()
    document.getElementById("hex").innerHTML = "hex color : " + random_hex_color_code()
}

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

