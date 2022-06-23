// let robotSentence = document.querySelector(".robot--screen__sentences svg text");

// let robotPhrase = {
//     "1" : "click",
//     "2" : "Buurp",
//     "3": "down",
//     "4": "up"


// }

// document.body.addEventListener("click", ()=>{
//     clickEvent();
//     document.body.removeEventListener("click", clickEvent);
// })

// function clickEvent(){
//     let i = 1;
//     if(i > 4){
//         i=1
//     }else{
//         i++;
//     }
//     console.log(i)
//     robotSentence.innerHTML = robotPhrase[i];


// }



let coconut = document.querySelector(".header--nav__img");
let coconutDrawer = document.querySelector(".header--nav__drawer");
let CoconutDrawerIsOpen = false;

coconut.addEventListener("pointerdown", e=>{
    coconut.style.animation = "coconuts 1.5s ease-in-out"
    if(!CoconutDrawerIsOpen){
        coconutDrawer.style.animation = "coconutsDrawerOpen 500ms forwards"
        CoconutDrawerIsOpen= true;
    }else{
      
        coconutDrawer.style.animation = "coconutsDrawerClose 500ms forwards ease"
        CoconutDrawerIsOpen= false;
    }
    setTimeout(()=>{
        coconut.style.animation = "";
    }, 1449)
})



let addPlayer = document.getElementById("btn--addPlayer");
let addPlayerModal = document.querySelector(".modal--addPlayer")
let addPlayerModalBtn = addPlayerModal.querySelector("button");
let addPlayerModalError =  addPlayerModal.querySelector(".modal--addPlayer__error");
let container = document.querySelector(".container");
let player = document.querySelectorAll(".player");
let array = [];
let y = 0;
let x = 0;

// function createNewPlayer(name){
//   let i = array.length;
//   const newPlayer = document.createElement("div");
//   newPlayer.classList.add("rank");
//   newPlayer.setAttribute("id",`rank${i}`);
//   container.appendChild(newPlayer);
//   const newDiv = document.getElementById(`rank${i}`);
//   newDiv.innerHTML = 
//   `
//   <div class="player" id="player${i}" data-id="${i}">
//     <img class="btn--minus" data-id="${i}" src="./assets/btn-minus.png" alt="-"/>
//     <p>${name}</p>
//     <input type="number" value="0"> 
//     <img class="btn--plus" src="./assets/btn--plus.png" data-id="${i}" alt="+"/>
//   </div>
//   <div class="placement">${i}</div>
//   `;
//   y++;
//   console.log("y:" + y)
//   test();

  

  
//   // player.forEach(childs=>{
//   //   let btnPlus = childs.querySelector(".btn--plus");
//   //   let btnMinus = childs.querySelector(".btn--minus");
//   //   let newInput = childs.querySelector(`input`);
  
    
    
//   //   btnPlus.addEventListener("pointerdown", e=>{

//   //     let newInput = childs.querySelector(`input`);
//   //     newInput.value++;
//   //     objIndex = array.findIndex((obj => obj.id == childs.dataset.id));
//   //     array[objIndex].score = newInput.value;
//   //     sortArray(array);
//   //     changePlace(array);
//   //   })

//   //   btnMinus.addEventListener("pointerdown", e=>{
//   //     let newInput = childs.querySelector(`input`);
//   //     newInput.value--;
//   //     objIndex = array.findIndex((obj => obj.id == childs.dataset.id));
//   //     array[objIndex].score = newInput.value;
//   //     sortArray(array);
//   //     changePlace(array);
//   //   })
//   //   newInput.addEventListener("change", (e)=>{
//   //     e.preventDefault();
//   //     e.stopPropagation();
//   //     objIndex = array.findIndex((obj => obj.id == childs.dataset.id));
//   //     array[objIndex].score = newInput.value;
//   //     sortArray(array);
//   //     changePlace(array);
//   //   });
    
//   }

// function test(){
  
//   let btnMinus = document.querySelectorAll(".btn--minus")
//   let btnPlus = document.querySelectorAll(".btn--plus")

//   btnMinus.forEach(btn=>{
//     btn.addEventListener("pointerdown", e=>{
//       e.preventDefault();
//       e.stopPropagation();
//       let newInput = document.querySelector(`#player${btn.dataset.id} input`);
//       newInput.value = newInput.value -1;
//       x++;
//       console.log(x)
//     })
//   })
//   btnPlus.forEach(btn=>{
//     btn.addEventListener("pointerdown", e=>{
//       let input = document.querySelector(`player${btn.dataset.id}`);
//       input.value--;
//     })
//   })
  
// }
 




  // player.forEach(childs=>{
  //   let btnPlus = childs.querySelector(".btn--plus");
  //   let btnMinus = childs.querySelector(".btn--minus");
  //   let newInput = childs.querySelector(`input`);
  
    
    
  //   btnPlus.addEventListener("pointerdown", e=>{

  //     let newInput = childs.querySelector(`input`);
  //     newInput.value++;
  //     objIndex = array.findIndex((obj => obj.id == childs.dataset.id));
  //     array[objIndex].score = newInput.value;
  //     sortArray(array);
  //     changePlace(array);
  //   })

  //   btnMinus.addEventListener("pointerdown", e=>{
  //     let newInput = childs.querySelector(`input`);
  //     newInput.value--;
  //     objIndex = array.findIndex((obj => obj.id == childs.dataset.id));
  //     array[objIndex].score = newInput.value;
  //     sortArray(array);
  //     changePlace(array);
  //   })
  //   newInput.addEventListener("change", (e)=>{
  //     e.preventDefault();
  //     e.stopPropagation();
  //     objIndex = array.findIndex((obj => obj.id == childs.dataset.id));
  //     array[objIndex].score = newInput.value;
  //     sortArray(array);
  //     changePlace(array);
  //   });
    
  // })
  





function printPlayer(){
  container.innerHTML ="";
  for(let i=0; i < array.length; i++){
    let name = array[i].name;
    let score = array[i].score;
    container.innerHTML +=
    `<div class="rank" id="rank${i+1}">
        <div class="player" id="player${i+1}" data-id="${i+1}">
          <img class="btn--minus" data-id="${i+1}" src="./assets/btn-minus.png" alt="-"/>
          <p>${name}</p>
          <input type="number" value="${score}"> 
          <img class="btn--plus" src="./assets/btn--plus.png" data-id="${i+1}" alt="+"/>
        </div>
        <div class="placement">${i+1}</div>
      </div>
      `;
    }

      let btnPlus = document.querySelectorAll(".btn--plus");
      let btnMinus = document.querySelectorAll(".btn--minus");
      btnPlus.forEach(btn=>{
        btn.addEventListener("click", e=>{
          let input = document.querySelector(`#player${btn.dataset.id} input`);
          input.value++;
          console.log(btn.dataset.id);
          let objIndex = array.findIndex((obj => obj.id == btn.dataset.id));
          array[objIndex].score = input.value;
          sortArray(array);
          changePlace(array);
        })
      })
      btnMinus.forEach(btn=>{
        btn.addEventListener("click", e=>{
            let input = document.querySelector(`#player${btn.dataset.id} input`);
            input.value--;
            console.log(btn.dataset.id);
            let objIndex = array.findIndex((obj => obj.id == btn.dataset.id));
            array[objIndex].score = input.value;
            sortArray(array);
            changePlace(array);
        })
      })
  
}



addPlayer.addEventListener("pointerdown", e=>{
  addPlayerModal.style.display = "flex";
})
//add a player "click";
addPlayerModalBtn.addEventListener("pointerdown", e=>{
  let newPlayer = addPlayerModal.querySelector("input");
  if(newPlayer.value){
    if(!(array.some(e => e.name.toLowerCase() === newPlayer.value.toLowerCase()))){
        array.push({id: array.length + 1, name: newPlayer.value, score: 0})
        printPlayer(newPlayer.value);
        addPlayerModal.style.display = "none";

    }else{
      addPlayerModalError.innerText = "Name already taken";
    }
  }else{
    addPlayerModalError.innerText = "Please enter a name";
  }
})

  
// player.forEach(childs =>{
//   let id= childs.dataset.id;
//   let value= childs.querySelector(`input`).value;
//   array.push({id: id, name: "", score: value})
//   }
// )


player.forEach(childs=>{
  let btnPlus = childs.querySelector(".btn--plus");
  let btnMinus = childs.querySelector(".btn--minus");
  let newInput = childs.querySelector(`input`);
  
  btnPlus.addEventListener("pointerdown", e=>{
    newInput.value++;
    objIndex = array.findIndex((obj => obj.id == childs.dataset.id));
    array[objIndex].score = newInput.value;
    sortArray(array);
    changePlace(array);
  })
  btnMinus.addEventListener("pointerdown", e=>{
    newInput.value--;
    objIndex = array.findIndex((obj => obj.id == childs.dataset.id));
    array[objIndex].score = newInput.value;
    sortArray(array);
    changePlace(array);
  })
  newInput.addEventListener("change", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    objIndex = array.findIndex((obj => obj.id == childs.dataset.id));
    array[objIndex].value = newInput.value;
    sortArray(array);
    changePlace(array);
  });
})

function sortArray (array){
    array.sort((a, b) =>{
      return b.score - a.score;
    })
    
}

function changePlace(array){
 
  for(let i = 0; i < array.length; i++){
    let rank = document.getElementById(`player${array[i].id}`);
    let parentRank = document.getElementById(rank.parentNode.id);

    if(!(parentRank.id === `rank${i+1}`)){

        let newRank = document.querySelector(`#rank${i+1} .player`);
        let newParentRank = document.querySelector(`#rank${i+1}`)
        let rankStyle = newRank.getBoundingClientRect().top - rank.getBoundingClientRect().top;

      rank.style.transform =  `translateY(${rankStyle}px)`;
   
      setTimeout(()=>{
        newParentRank.appendChild(rank);
        rank.removeAttribute("style")
      },500)
    }
  }
}


