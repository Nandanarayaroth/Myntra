



//  <---- tick color change --->


// document.querySelectorAll('.checkind').forEach(function(box){
//     box.addEventListener('click', function(){
//         this.classList.toggle('active')
        
//     })
// })

// <--textbold ---->

// document.querySelectorAll('.bb').forEach(el => {
//     el.addEventListener('click', function() {
//         this.classList.toggle('chhhh')
//     })
// })

document.querySelectorAll('.ntmlval').forEach(function(merge){
    merge.addEventListener('click',function(e){
        e.preventDefault()
        const checkindDiv = this.querySelector('.checkind');
        if(checkindDiv){
            checkindDiv.classList.toggle('active');
        }

        const textSpan = this.querySelector('.bb')
        if(textSpan){
            textSpan.classList.toggle('chhhh')
        }
    })
})



// <---background change --->
// function change(el){
//     el.classList.toggle('backcolor')
// }
function change2(e){
    e.classList.toggle('backcolor');
    const prevLabel = document.querySelector('.select');
    if(prevLabel){
        prevLabel.classList.toggle('highlight-gender')
    }
}

// function change(el) {
//     document.querySelectorAll('.unselect').forEach(item => {
//         item.classList.remove('backcolor')
//     })
//     el.classList.add('backcolor')
// }

document.querySelectorAll('.filter-plane li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.filter-plane li').forEach(el => {
            el.classList.remove('backcolor');
        });
        this.classList.add('backcolor')
        
    })
})

//  <-- for gender -->
// const genderItem = document.querySelector('.filter-plane .select');
// const otherItem = document.querySelectorAll('.filter-plane .unselect')

// genderItem.addEventListener('click', function(){
//     otherItem.forEach(item => item.classList.remove('backcolor'))
//     genderItem.classList.add('backcolor')
// })

// otherItem.forEach(item => {
//     item.addEventListener('click', function() {
//         genderItem.classList.remove('backcolor');
//         otherItem.forEach(el => el.classList.remove('backcolor'))
//         this.classList.add('backcolor')
//     })
// })

//  <-- categories html page --->
document.getElementById("Categories").addEventListener("click",function() {
    document.getElementById("col-2-3").innerHTML = `
        <ul class="filterop">
            
                <li class="ntmlval">
                    <label class="checkBox">
                        <input type="checkbox" value="dresses">
                            <div class="checkind"></div>

                            
                            <span class="bb">Dresses</span>
                            <span class="pul-right">255960</span>
                    </label>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                        <input type="checkbox" value="dresses">
                            <div class="checkind"></div>

                            
                            <span class="bb">Ethnic dresses</span>
                            <span class="pul-right">14676</span>
                    </label>
                </li>
            
        </ul>
    `;
    document.querySelectorAll('.ntmlval').forEach(function(merge){
    merge.addEventListener('click',function(e){
        e.preventDefault()
        const checkindDiv = this.querySelector('.checkind');
        if(checkindDiv){
            checkindDiv.classList.toggle('active');
        }

        const textSpan = this.querySelector('.bb')
        if(textSpan){
            textSpan.classList.toggle('chhhh')
        }
    })
})
});       
//  <--- gender -->
document.getElementById("Gender").addEventListener("click", function(){
    document.getElementById("col-2-3").innerHTML = `
        
                    <ul class="filterop">
                        <div>
                            <li class="ntmlval">
                                <label class="checkBox">
                                    <input type="checkbox" name="filtervalue" value="boys">
                                    <div class="checkind">
                                    </div>
                                    <span class="bb">Boys</span>
                                    <span class="pul-right">1053</span>
                                </label>
                            </li>
                            <li class="ntmlval">
                                <label class="checkBox">
                                    <input type="checkbox" name="filtervalue" value="girls">
                                    <div class="checkind"></div>
                                    <spa class="bb">Girls</spa> 
                                    <span class="pul-right">64080</span>
                                </label>
                            </li>
                            <li class="ntmlval">
                                <label class="checkBox">
                                    <input type="checkbox" name="filtervalue" value="women">
                                    <div class="checkind"></div>
                                    <span class="bb">Women</span> 
                                    <span class="pul-right">207179</span>
                                </label>
                            </li>
                        </div>
                    </ul>
                
    `;
    
})
// <---size---->
document.getElementById("Size").addEventListener("click",function(){
    document.getElementById("col-2-3").innerHTML = `
        <div class="ripp-cnt">
            <div class="clntsearch">
                <img src="icon/svgexport-7.svg" height="14" width="14" class="usrch">
                <input class="input-search" type="text" placeholder="Search by Size" >
            </div>
            <div class="tripple"></div>
            <ul class="filterop">
                <div>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">3Xs</div>
                            <span class="pul-right">162</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="Xxs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">Xxs</div>
                            <span class="pul-right">4850</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">Xs</div>
                            <span class="pul-right">66910</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="Xs/s">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">Xs/s</div>
                            <span class="pul-right">103</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="S">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">S</div>
                            <span class="pul-right">149986</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="S/m">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">S/m</div>
                            <span class="pul-right">302</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="M">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">M</div>
                            <span class="pul-right">150541</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="M/l">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">M/l</div>
                            <span class="pul-right">339</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="L">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">L</div>
                            <span class="pul-right">144894</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="L/xl">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">L/xl</div>
                            <span class="pul-right">280</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="Xl">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">Xl</div>
                            <span class="pul-right">128390</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="Xl/xxl">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">Xl/xxl</div>
                            <span class="pul-right">71</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="Xxs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">Xxs</div>
                            <span class="pul-right">4850</span>
                        </label>
                    </li>
                </div>
            </ul>
        </div>
    `;
    document.querySelectorAll('.ntmlval').forEach(function(merge){
        merge.addEventListener('click',function(e){
            e.preventDefault()
            const checkindDiv = this.querySelector('.checkind');
            if(checkindDiv){
                checkindDiv.classList.toggle('active');
            }

            const textSpan = this.querySelector('.flrsze')
            if(textSpan){
                textSpan.classList.toggle('chhhh')
            }
        })
    })
})

// document.getElementById("Size").addEventListener("click",function(){
//     const sizes = [
//         {name: "3Xs", count: 162},
//         {name: "Xxs", count: 4850},
//         {name: "Xs", count: 66910},
//         {name: "Xs/s", count: 103},
//         {name: "S", count: 149986},
//         {name: "S/m", count:302},
//         {name: "M", count:150541},
//         {name: "M/l",count:339},
//         {name:"L", count:144894},
        
//     ];
//     const container = `
//         <div class="ripp-cnt">
//             <div class="clntsearch">
//                 <img src="icon/svgexport-7.svg" height="14" width="14" class="usrch">
//                 <input class="input-search" type="text" placeholder="Search by Brand">
//             </div>
//             <div class="tripple"></div>
//             <ul class="filtertop"></ul>
//         </div>
//     `;
//     const col = document.getElementById("col-2-3")
//     col.innerHTML = container;

//     const ul = document.getElementById("sizeFilter")
//     // const ul = document.querySelector(".filtertop")
//     sizes.forEach(s => {
//         const li = document.createElement("li")
//         li.className = "ntmlval";
//         li.innerHTML = `
//             <label class="checkBox">
//                 <input type="checkbox" value="${s.name}">
//                 <div class="checkind"></div>
//                 <div class="flrsze">${s.name}</div>
//                 <span class="pul-right">${s.count}</span>
//             </label>
//         `;
//         ul.appendChild(li)
//     })
// })

//  <--- Brand ---->
document.getElementById("Brand").addEventListener("click",function(){
    document.getElementById("col-2-3").innerHTML = `
        <div class="ripp-cnt">
            <div class="clntsearch">
                <img src="icon/svgexport-7.svg" height="14" width="14" class="usrch">
                <input class="input-search" type="text" placeholder="Search by Brand">
            </div>
            <div class="tripple"></div>
            <ul class="filterop">
                <div>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">13-star</div>
                            <span class="pul-right">61</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">15 buttons</div>
                            <span class="pul-right">21</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">1st step</div>
                            <span class="pul-right">8</span>
                        </label>
                    </li>
                     <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">20dresses</div>
                            <span class="pul-right">564</span>
                        </label>
                    </li>
                     <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">250 designs</div>
                            <span class="pul-right">182</span>
                        </label>
                    </li>
                     <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">27 drapes</div>
                            <span class="pul-right">14</span>
                        </label>
                    </li>
                     <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">28 moons</div>
                            <span class="pul-right">23</span>
                        </label>
                    </li>
                     <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">3pin</div>
                            <span class="pul-right">18</span>
                        </label>
                    </li>
                     <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">4wrd by dressberry</div>
                            <span class="pul-right">56</span>
                        </label>
                    </li>
                     <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">4you by dresses</div>
                            <span class="pul-right">13</span>
                        </label>
                    </li>
                     <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">5.10.15</div>
                            <span class="pul-right">1</span>
                        </label>
                    </li>
                     <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">612 ivy league</div>
                            <span class="pul-right">1</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">612 league</div>
                            <span class="pul-right">8</span>
                        </label>
                    </li>
                    <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="flrsze">612league</div>
                            <span class="pul-right">1</span>
                        </label>
                    </li>
                </div>
            </ul>
            
        </div>
    `;
    document.querySelectorAll('.ntmlval').forEach(function(merge){
    merge.addEventListener('click',function(e){
        e.preventDefault()
        const checkindDiv = this.querySelector('.checkind');
        if(checkindDiv){
            checkindDiv.classList.toggle('active');
        }

        const textSpan = this.querySelector('.flrsze')
        if(textSpan){
            textSpan.classList.toggle('chhhh')
        }
    })
})
})
// <--- color --->
document.getElementById("Color").addEventListener("click", function() {
    document.getElementById("col-2-3").innerHTML = `
        <div class="ripp-cnt">
            <div class="clntsearch">
                <img src="icon/svgexport-7.svg" height="14" width="14" class="usrch">
                <input class="input-search" type="text" placeholder="Search by Color">
            </div>
            <div class="tripple"></div>
            <ul class="filterop">
            <div>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="green"></span>
                                Assorted
                            </div>
                            <span class="pul-right">41</span>
                        </label>
                </li>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Beige"></span>
                                Beige
                            </div>
                            <span class="pul-right">6396</span>
                        </label>
                </li>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Black"></span>
                                Black
                            </div>
                            <span class="pul-right">40598</span>
                        </label>
                </li>
                 <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Blue"></span>
                                Blue
                            </div>
                            <span class="pul-right">32450</span>
                        </label>
                </li>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Blue"></span>
                                Blue
                            </div>
                            <span class="pul-right">32450</span>
                        </label>
                </li>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Bronze"></span>
                                Bronze
                            </div>
                            <span class="pul-right">32450</span>
                        </label>
                </li>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Brown"></span>
                                Brown
                            </div>
                            <span class="pul-right">32450</span>
                        </label>
                </li>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Burgundy"></span>
                                Burgundy
                            </div>
                            <span class="pul-right">32450</span>
                        </label>
                </li>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Camel"></span>
                                Camel
                            </div>
                            <span class="pul-right">32450</span>
                        </label>
                </li>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Champ"></span>
                                Champagne
                            </div>
                            <span class="pul-right">32450</span>
                        </label>
                </li>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Charcol"></span>
                                Charcol
                            </div>
                            <span class="pul-right">32450</span>
                        </label>
                </li>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Coffee"></span>
                                Coffee brown
                            </div>
                            <span class="pul-right">32450</span>
                        </label>
                </li>
                <li class="ntmlval">
                        <label class="checkBox">
                            <input type="checkbox" value="3Xs">
                            <div class="checkind">
                            
                            </div>
                            <div class="inn">
                                <span class="Coral"></span>
                                Coral
                            </div>
                            <span class="pul-right">32450</span>
                        </label>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                        <input type="checkbox" value="Cream">
                        <div class="checkind"> </div>
                        <div class="inn">
                            <span class="Cream"></span>
                            Cream
                        </div>
                        <span class="pul-right">2628</span>
                    </label>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                        <input type="checkbox" value="Fluroscent green">
                        <div class="checkind"> </div>
                        <div class="inn">
                            <span class="Fluro"></span>
                            Fluorescent green
                        </div>
                        <span class="pul-right">137</span>
                    </label>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                        <input type="checkbox" value="Fluroscent green">
                        <div class="checkind"> </div>
                        <div class="inn">
                            <span class="Gold"></span>
                            Gold
                        </div>
                        <span class="pul-right">898</span>
                    </label>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                        <input type="checkbox" value="Green">
                        <div class="checkind"> </div>
                        <div class="inn">
                            <span class="Greenn"></span>
                            Green
                        </div>
                        <span class="pul-right">21106</span>
                    </label>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                        <input type="checkbox" value="Grey melange">
                        <div class="checkind"> </div>
                        <div class="inn">
                            <span class="GreyM"></span>
                            Grey melange
                        </div>
                        <span class="pul-right">115</span>
                    </label>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                        <input type="checkbox" value="Grey melange">
                        <div class="checkind"> </div>
                        <div class="inn">
                            <span class="Grey"></span>
                            Grey 
                        </div>
                        <span class="pul-right">115</span>
                    </label>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                    <input type="checkbox" value="Grey">
                    <div class="checkind"> </div>
                    <div class="inn">
                        <span class="Khaki"></span>
                        Khaki
                    </div>
                    <span class="pul-right">5700</span>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                    <input type="checkbox" value="Grey">
                    <div class="checkind"> </div>
                    <div class="inn">
                        <span class="Lavender"></span>
                        Lavender
                    </div>
                    <span class="pul-right">2466</span>
                <li>
                <li class="ntmlval">
                    <label class="checkBox">
                    <input type="checkbox" value="Grey">
                    <div class="checkind"> </div>
                    <div class="inn">
                        <span class="Lime"></span>
                        Lime green
                    </div>
                    <span class="pul-right">804</span>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                    <input type="checkbox" value="Grey">
                    <div class="checkind"> </div>
                    <div class="inn">
                        <span class="Magenta"></span>
                        Magenta
                    </div>
                    <span class="pul-right">1307</span>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                    <input type="checkbox" value="Grey">
                    <div class="checkind"> </div>
                    <div class="inn">
                        <span class="Maroon"></span>
                        Maroon
                    </div>
                    <span class="pul-right">7588</span>
                </li>
                <li class="ntmlval">
                    <label class="checkBox">
                    <input type="checkbox" value="Grey">
                    <div class="checkind"> </div>
                    <div class="inn">
                        <span class="Mauve bb" id="bb"></span>
                        Mauve
                    </div>
                    <span class="pul-right">779</span>
                </li>
            </div>
        </div>
    `;
    document.querySelectorAll('.ntmlval').forEach(function(merge){
    merge.addEventListener('click',function(e){
        e.preventDefault()
        const checkindDiv = this.querySelector('.checkind');
        if(checkindDiv){
            checkindDiv.classList.toggle('active');
        }

        const textSpan = this.querySelector('#bb')
        // const textSpan = document.getElementById('bb');
        
        if(textSpan){
            textSpan.classList.toggle('chhhh')
        }
    })
})
})
//  <--Discount Range -->
document.getElementById("Discount").addEventListener('click', function() {
    document.getElementById("col-2-3").innerHTML = `
        <ul class="filterop">
            <li class="ntmlval">
                <label class="checkBox">
                    <input type="checkbox" value="10">
                    <div class="checkind"> </div>
                    <span class="bb">10% and higher<span>
                    <span class="pul-right">224325</span>
                </label>
            </li>
            <li class="ntmlval">
                <label class="checkBox">
                    <input type="checkbox" value="20">
                    <div class="checkind"> </div>
                    <span class="bb">20% and higher<span>
                    <span class="pul-right">224325</span>
                </label>
            </li>
            <li class="ntmlval">
                <label class="checkBox">
                    <input type="checkbox" value="30">
                    <div class="checkind"> </div>
                    <span class="bb">30% and higher<span>
                    <span class="pul-right">224325</span>
                </label>
            </li>
            <li class="ntmlval">
                <label class="checkBox">
                    <input type="checkbox" value="40">
                    <div class="checkind"></div>
                    <span class="bb">40% and higher</span>
                    <span class="pul-right">198673</span>
                </label>
            </li>
            <li class="ntmlval">
                <label class="checkBox">
                    <input type="checkbox" value="50">
                    <div class="checkind"></div>
                    <span class="bb">50% and higher</span>
                    <span class="pul-right">178860</span>
                </label>
            </li>
            <li class="ntmlval">
                <label class="checkBox">
                    <input type="checkbox" value="60">
                    <div class="checkind"> </div>
                    <span class="bb">60% and higher</span>
                    <span class="pul-right">124100</span>
                </label>
            </li>
            <li class="ntmlval">
                <label class="checkBox">
                    <input type="checkbox" value="70">
                    <div class="checkind"> </div>
                    <span clas="bb">70% and higher </span>
                    <span class="pul-right">70912</span>
                </label>
            </li>
            <li class="ntmlval">
                <label class="checkBox">
                    <input type="checkbox" value="80">
                    <div class="checkind"> </div>
                    <span class="bb">80% and higher</span>
                    <span class="pul-right">15428</span>
                </label>
            </li>
            <li class="ntmlval">
                <label class="checkBox">
                    <input type="checkbox" value="90">
                    <div class="checkind"> </div>
                    <span class="bb">90% and hgher</span>
                    <span class="pul-right">511</span>
                </label>
            </li>
        </ul>
    `;
    document.querySelectorAll('.ntmlval').forEach(function(merge){
    merge.addEventListener('click',function(e){
        e.preventDefault()
        const checkindDiv = this.querySelector('.checkind');
        if(checkindDiv){
            checkindDiv.classList.toggle('active');
        }

        const textSpan = this.querySelector('.bb')
        if(textSpan){
            textSpan.classList.toggle('chhhh')
        }
    })
})
})

//  <-- close popup--->

document.getElementById("Close").addEventListener("click", function() {
    document.getElementById("bottomm").innerHTML= `
        <div class="pop-lay">
            <div class="over-lay">
                <div class="pop-contr">
                    <div class="pop-heading">
                        Do you want to discard your changes? 
                    </div>
                    <div class="pop-discript">
                        You modified some filters. what would you like to do with these changes?
                    </div>
                    <div class="apply-chg">
                        Apply Changes
                    </div>
                    <div class="Disc-chg">
                    Discard Changes
                    </div>
                </div>
            </div>
        </div>
    `;
   
})
// document.getElementById("Close").addEventListener("click", function() {
//             document.body.classList.toggle("dark")
// })

