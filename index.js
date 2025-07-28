

// const add_icon = document.getElementById("add-icon")
// function install() {
//     // alert("Myntra")
//     let install = prompt("myntra")
// }

document.getElementById("add-icon").addEventListener('click',function() {
    const overlay = document.createElement('div')
    const modal = document.createElement('div')
    const title = document.createElement('h2')
    title.innerText = 'Install app';
    title.style.margin = '0 0 10px';
    modal.appendChild(title)
    
    const desc = document.createElement('p')
    desc.innerHTML = '<strong>Myntra</strong><br>myntra.com';
    desc.style.color = '#ccc';
    desc.style.fontSize = '14px';
    modal.appendChild(desc)

    const btnContainer = document.createElement('div')
    btnContainer.style.textAlign = 'right';
    btnContainer.style.marginTop = '20px';

    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'cancel';

    cancelBtn.onclick = () => document.body.removeChild(overlay);

    const installBtn = document.createElement('button')
    installBtn.innerText = 'Install'
})
