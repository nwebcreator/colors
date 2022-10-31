const cols = document.querySelectorAll('.col');

function gerenerateRandomColor() {
    // RGB
    // #FF0000
    // #00FF00
    // #0000FF
  
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
  }

  function setRandomColors() {
    cols.forEach((col) => {
        col.style.background = gerenerateRandomColor();
    })
  }

  setRandomColors(true);