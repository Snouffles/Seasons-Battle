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


//DRAWER
let coconut = document.querySelector(".header--nav__img");
let coconutDrawer = document.querySelector(".header--nav__drawer");
let CoconutDrawerIsOpen = false;

coconut.addEventListener("pointerdown", e=>{
    coconut.style.animation = "coconuts 1.5s ease-in-out"
    if(!CoconutDrawerIsOpen){
        coconutDrawer.style.display = "block";
        coconutDrawer.style.animation = "coconutsDrawerOpen 500ms forwards"
        CoconutDrawerIsOpen= true;
    }else{

        coconutDrawer.style.animation = "coconutsDrawerClose 500ms forwards ease";
        CoconutDrawerIsOpen= false;
        setTimeout(()=>{
          coconutDrawer.style.display = "none";
       
      }, 500)
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
let array = [{id:1, name:"robert", score:0}, {id:2, name:"Daniel", score:0}];
let gameStarted = true; //change de false

printPlayer();


function printPlayer(){
  if(gameStarted){
  showHidePlayer();
  // showHideButton();
  sortArray(array);
  console.log(array)
  container.innerHTML ="";
  for(let i=0; i < array.length; i++){
    let name = array[i].name;
    let score = array[i].score;
    container.innerHTML +=
    `<div class="rank" id="rank${i+1}" data-id="${i}">
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


    let btnMinus = document.querySelectorAll(".btn--minus");
    let btnPlus = document.querySelectorAll(".btn--plus");
      btnPlus.forEach(btn=>{
        btn.addEventListener("click", e=>{
          console.log(btn.parentNode.parentNode.dataset.id)
          console.log(array[btn.parentNode.parentNode.dataset.id].name);
          console.log(`.${btn.parentNode.id} input`);
          let input = document.querySelector(`#${btn.parentNode.parentNode.id} .player input`);
          input.value++;
          array[btn.parentNode.parentNode.dataset.id].score = input.value;
          console.log(array);
          sortArray(array);
          changePlace(array);
        })
      })



      btnMinus.forEach(btn=>{
        btn.addEventListener("click", e=>{

          console.log(btn.dataset.id)
          console.log(array[btn.dataset.id-1].name);
            let input = document.querySelector(`#player${btn.dataset.id} input`);
            input.value--;
            let objIndex = array.findIndex((obj => obj.id == btn.dataset.id));
            console.log(array[objIndex].name);
            array[objIndex].score = input.value;
            sortArray(array);
            printPlayer();
            // changePlace(array);
           
            
        })
      })
 
      //Delete Player

      // document.querySelectorAll(".player").forEach(player=>{
      //   player.addEventListener("click", e=>{
      //     console.log("will delete later a player")
      //   })
      // })

      sortArray(array);
      
    }else{
      container.innerHTML = "";
      showHidePlayer();
      showHideButton();
    }
  
  
}


  


//IF ARRAY HAVE 12 INPUT OR GAME HASNT STARTED YET, HIDE ADD PLAYER BUTTON
function showHidePlayer(){
  if(gameStarted &&  array.length < 11){
    addPlayer.style.display = "flex"
  }else{
    addPlayer.style.display = "none";

  }
}

//ADD A PLAYER WHEN GAME IS STARTED

addPlayer.addEventListener("pointerdown", e=>{
  addPlayerModal.querySelector("input").value = "";
  addPlayerModal.querySelector("input").focus();
  addPlayerModal.style.display = "flex";

})


//add a player "click";


          addPlayerModalBtn.addEventListener("pointerdown", e=>{
            let newPlayer = addPlayerModal.querySelector("input");
            if(newPlayer.value){
              if(!(array.some(e => e.name.toLowerCase() === newPlayer.value.toLowerCase()))){
                  array.push({id: array.length + 1, name: newPlayer.value, score: "0"});
                  gameStarted = true;
                  printPlayer(); 
                  addPlayerModal.style.display = "none";

              }else{
                addPlayerModalError.innerText = "Name already taken";
              }
            }else{
              addPlayerModalError.innerText = "Please enter a name";
            }
          })
          document.addEventListener("keyup", e=>{
            if(e.key == "Enter"){
              if(window.getComputedStyle(addPlayer).display == "flex"){
                let newPlayer = addPlayerModal.querySelector("input");
            if(newPlayer.value){
              if(!(array.some(e => e.name.toLowerCase() === newPlayer.value.toLowerCase()))){
                  array.push({id: array.length + 1, name: newPlayer.value, score: "0"});
                  
                  sortArray(array);
                  gameStarted = true;
                  printPlayer();
                  addPlayerModal.style.display = "none";

              }else{
                addPlayerModalError.innerText = "Name already taken";
              }
            }else{
              addPlayerModalError.innerText = "Please enter a name";
            }
              }
            }

          })
  document.getElementById("modal--addPlayer__close").addEventListener("pointerdown", e=>{
    // addPlayerModal.style.display = "none";
    document.getElementById("focus").focus();
  })


//ADD OR REMOVE POINT FOR PLAYER
// player.forEach(childs=>{
//   let btnPlus = childs.querySelector(".btn--plus");
//   let btnMinus = childs.querySelector(".btn--minus");
//   let newInput = childs.querySelector(`input`);
  
//   btnPlus.addEventListener("pointerdown", e=>{
//     newInput.value++;
//     objIndex = array.findIndex((obj => obj.id == childs.dataset.id));
//     array[objIndex].score = newInput.value;
//     sortArray(array);
//     changePlace(array);
//   })
//   btnMinus.addEventListener("pointerdown", e=>{
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
//     array[objIndex].value = newInput.value;
//     sortArray(array);
//     changePlace(array);
//   });
// })

function sortArray (array){
    array.sort((a, b) =>{
      return b.score - a.score;
    })
  
    
}


function changePlace(array){
//check every part of the array
  sortArray(array);
  for(let i = 0; i < array.length; i++){
    let rank = document.getElementById(`player${array[i].id}`);
    let parentRank = document.getElementById(rank.parentNode.id);
    console.log(`player${array[i].name} rank${i+1} : ${parentRank.id}`);
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




//CREATE A NEW GAME; 
//OPEN MODAL
let openModal = document.querySelector(".start .start--btn");
let modalNewGame = document.querySelector(".start--modal__numberOfPlayer");
openModal.addEventListener("pointerdown", e=>{
  modalNewGame.style.display = "flex";
})

//MODAL NUMBER OF PLAYERS

let numberOfPLayer = document.getElementById("numberOfPlayerInput");
let numberOfPLayerMinus = document.getElementById("start--btn__minus");
let numberOfPLayerPlus = document.getElementById("start--btn__plus");
let getNewPlayer = document.querySelector(".btn--continue button");


numberOfPLayer.addEventListener("change", e=>{
  if(numberOfPLayer.value < 2){
    numberOfPLayer.value =2
  }
  if(numberOfPLayer.value > 12){
    numberOfPLayer.value = 12;
  }
})

numberOfPLayerMinus.addEventListener("pointerdown", e=>{
  if(numberOfPLayer.value >2){
    numberOfPLayer.value--;

  }
})

numberOfPLayerPlus.addEventListener("pointerdown", e=>{
  if(numberOfPLayer.value < 12 ){
    numberOfPLayer.value++;

  }
})

let listOfPlayer = document.querySelector(".start--modal__listOfPlayer");
let modalNumberOfPlayer = document.querySelector(".start--modal__numberOfPlayer");
getNewPlayer.addEventListener("pointerdown", e=>{
  getNumberOfPlayer();
})
//on focus, press enter
getNewPlayer.addEventListener("keyup", e=>{
  if(e.key === "Enter"){
    getNumberOfPlayer();
  }
})
//IF MODAL OPEN, ENTER CONTINUE
document.addEventListener("keyup", e=>{
  if(e.key == "Enter"){
    if(window.getComputedStyle(modalNumberOfPlayer).display == "flex"){
      getNumberOfPlayer();
    }
  }
})

//CLOSE MODAL

let closeModal = document.querySelector(".start--modal__numberOfPlayer .btn--close");

closeModal.addEventListener("pointerdown", e=>{
  modalNewGame.style.display = "none";
  listOfPlayer.style.display = "none";
});


function getNumberOfPlayer(){
  modalNumberOfPlayer.style.display = "none";
  listOfPlayer.style.display = "flex";
  listOfPlayer.innerHTML = "";
  let y = numberOfPLayer.value;
  for(let i = 1; i <= y; i++){
    listOfPlayer.innerHTML += 
    `<div class="addPlayers newPlayer${i}">
      <label for="newPlayer${i}">Player ${i} </label>
      <input type="text" id="newPlayer${i}" maxlength="10"/>
    </div>`
    if(i == y){

      listOfPlayer.innerHTML += `<p class="error"></p><div class="button--continue"><button class="btn">START</button></div><button class="btn btn--close">X</button>`
    }
    
  }
  document.querySelector(".button--continue button").addEventListener("pointerdown", e=>{
    checkNameValidation();
  })
  document.addEventListener("keyup", e=>{
    if(e.key == "Enter"){
      if(window.getComputedStyle(listOfPlayer).display == "flex"){
        checkNameValidation();
      }
    }
  })
  

  let closeModal2 = document.querySelector(".start--modal__listOfPlayer .btn--close");
  closeModal2.addEventListener("pointerdown", e=>{
    modalNewGame.style.display = "none";
    listOfPlayer.style.display = "none";
      
  });
}

function checkNameValidation(){
  let playerArray = [];
  let ready = true;
  let errorMessage = "";
  document.querySelectorAll(".addPlayers").forEach(player=>{
    let value = player.querySelector("input").value;
    //check that every players has a different name or not empty
    if(value == ""){
      errorMessage = "Every player need an unique name"
      listOfPlayer.querySelector(".error").innerText = errorMessage;
      ready = false;
      playerArray = [];
      player.querySelector("input").style.border = "1px solid red";

    }else{
      player.querySelector("input").style.border = "1px solid black";

      if(playerArray.some(e => e.name.toLocaleLowerCase() === value.toLocaleLowerCase())){
        errorMessage = "Every player need an unique name"
        listOfPlayer.querySelector(".error").innerText = errorMessage;
        player.querySelector("input").style.border = "1px solid red";
        ready = false;
        playerArray = [];

      }else{
        playerArray.push({id: playerArray.length +1 , name:value, score: "0"});
        player.querySelector("input").style.border = "1px solid black";
        
      }
    }
    //if yes, add it to the array and start the game
   
  })
  
  if(ready){
    array = playerArray;
    gameStarted = true;
    printPlayer();
    listOfPlayer.style.display = "none";
    document.querySelector(".start").style.display = "none";
  }
}

//START A NEW GAME AND DELETE THE CURRENT GAME

let startNewGameBtn = document.querySelector(".btn--startNewGame");
let startNewGame = document.querySelector(".modal--startNewGame");
let startNewGame__yes = document.querySelector(".modal--startNewGame__yes");
let startNewGame__no = document.querySelector(".modal--startNewGame__no");

startNewGameBtn.addEventListener("pointerdown", e=>{
  startNewGame.style.display = "flex";
});
startNewGame__no.addEventListener("pointerdown", e=>{
  startNewGame.style.display = "none";
})
startNewGame__yes.addEventListener("pointerdown", e=>{
  //delete the array
  array = [];
  //open the new game modal
  modalNewGame.style.display = "flex";
  document.querySelector(".start").style.display = "flex"
  startNewGame.style.display = "none";
  gameStarted = false;
  printPlayer();


})
//DISPLAYING BUTTON IF GAME STARTED OR NOT
function showHideButton(){
  if(gameStarted){
    startNewGameBtn.style.display = "flex";
  }else{
    startNewGameBtn.style.display = "none";
  }
}





/* LOG 

Lors du rajout d'un jour, les boutons ne sont designé a la bonne personne.
Debug => 

Premier test, plutot que reprint l'ensemble lors d'un ajout. Just rajouté un element.
*/