



// document.getElementById("add-icon").addEventListener('click',function() {
//     const overlay = document.createElement('div')
//     overlay.classList.add('overlay');

//     const modal = document.createElement('div')
//     modal.classList.add('modal');

//     const title = document.createElement('h2')
//     title.innerText = 'Install app';
//     title.style.margin = '0 0 10px';
//     modal.appendChild(title)
    
//     const desc = document.createElement('p')
//     desc.innerHTML = '<strong>Myntra</strong><br>myntra.com';
//     desc.style.color = '#ccc';
//     desc.style.fontSize = '14px';
//     modal.appendChild(desc)

//     const btnContainer = document.createElement('div')
//     btnContainer.style.textAlign = 'right';
//     btnContainer.style.marginTop = '20px';

//     const cancelBtn = document.createElement('button');
//     cancelBtn.innerText = 'cancel';
//     cancelBtn.classList.add('cancel')
//     cancelBtn.onclick = () => document.body.removeChild(overlay);

//     const installBtn = document.createElement('button')
//     installBtn.innerText = 'Install';
//     installBtn.classList.add('install');
//     installBtn.onclick = () => {
//         alert('App Install')
//         document.body.removeChild(overlay)
//     }
//     btnContainer.appendChild(cancelBtn);
//     btnContainer.appendChild(installBtn);
//     modal.appendChild(btnContainer)

//     overlay.appendChild(modal);
//     document.body.appendChild(overlay)
// })

//  <------addicon------------>
document.getElementById("add-icon").addEventListener("click",function() {

    const overlay = document.createElement('div')
    overlay.classList.add('overlay');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = 
       ` 
       <div class="popup">
       <div class="bg">
        <div class="a2text">
            <p class="a2heading">Use Myntra from Homescreen</p>
            <p class="a2content">
            <img src="https://constant.myntassets.com/pwa/assets/img/9aa9e922-68c5-4da7-aa34-4985dbf8a7c21550128447828-zap-2x.png" width="18" height="18">It's Super Fast</p>
            <p class="a2content">
            <img src="https://constant.myntassets.com/pwa/assets/img/e753c3fb-f38e-4a8e-a8cd-e2f5c6232d891550134928036-group-18-2x.png" width="14" height="19">Easy To Access</p>
             <p class="a2content">
            <img src="https://constant.myntassets.com/pwa/assets/img/7e394a90-3fa3-4ad8-b35a-4c202673ddce1550135018275-hard-drive-2x.png" width="17" height="13">Saves Space</p>
            <p class="a2instruction">How to access Myntra from homescreen?</p>
            <p class="a2-content">1.Find the Myntra Web app on your homescreen.</p>
            <p class="a2-content">2.Tap on Myntra icon.</p>
            <div class="ripple">
                <button class="btn-primary">OKAY, GOT IT</button>
            </div>
        </div>
        </div>
       </div>
       `;

       overlay.appendChild(modal)
       document.body.appendChild(overlay)

       modal.querySelector(".btn-primary").addEventListener("click", () => {
            document.body.removeChild(overlay);
            document.getElementById("add-icon").removeEventListener("click", openModel)
       })
       document.getElementById("add-icon").addEventListener("click",openModel)

    //    modal.querySelector("#closeModal").addEventListener("click", () => {
    //     document.body.removeChild(overlay);
    //    })
})

//     <-------search ----------->
document.getElementById("search").addEventListener("click", () => {
    window.location.href = "https://www.myntra.com/autosuggest"
})

// <---- add to cart ------>



// <----check cart----->
document.getElementById("checkcart").addEventListener("click", () => {
    window.location.href = "https://www.myntra.com/checkout/cart"
})


// <-----sort---------->
document.getElementById("colum1").addEventListener('click', function(){
    document.getElementById("grid-sticky").innerHTML =`
    <div class="oovr">
        <div class="prime-over">
            <div class="prime-lay">
                <ul class="sort-list">
                <li class="sortby">
                    SORT BY
                </li>
                <span>
                    <li class="lines">
                        <div class="ripple-container">
                            <button class="bass">
                                <img class="popularity" src="icon/svgexport-13.svg">
                                <span class="popularty-txt">Popularity</span>
                            </button>
                            <div class="ripple"></div>
                        </div>
                    </li>
                    <li class="lines">
                        <div class="ripple-container">
                            <button class="bass">
                                <img class="popularity" src="icon/fivestr.svg">
                            </button>
                        </div>
                    </li>
                </span>
                </ul>
            </div>
        </div>
    </div>
    `
})