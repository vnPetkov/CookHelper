let print = (function () {
  //Page change listeners
  window.addEventListener("hashchange", hashHasChanged);
  window.addEventListener("load", hashHasChanged);

  //Logout button
  logOut.addEventListener('click', function(event){
    userData.logoutUser();
    document
    .querySelector("#headerProfImg")
    .setAttribute("src", defProfImg);
  })

  //Search by ingredients - add options
  function addIngOptions (){
    let selectInp = document.getElementById("select");
    selectInp.innerHTML = "<option>Search by ingredients</option>";
    let ingredietsString = " ";
    recipeManager.recipeArr.forEach(e => ingredietsString += e.ingredients);
    let allIngredientsArr = ingredietsString.match(/\w+/g);
    allIngredientsArr.forEach(e => {
      let selOption = document.createElement("option");
      selOption.innerText = e;
      selectInp.appendChild(selOption);
    })
  }

  //Search by ingredients - add listener
  document
    .getElementById("select")
    .addEventListener("change", function searchByIng(event) {
      let text = event.target.value.toLowerCase();
      let filteredArr = recipeManager.filterIng(text, recipeManager.recipeArr)
      print(filteredArr, allRecipesCont);
    });

  //Search by name listener
  document
    .getElementById("textInput")
    .addEventListener("keyup", function searchByName(event) {
      let text = event.target.value.toLowerCase();
      let filteredArr = recipeManager.filterName(text, recipeManager.recipeArr);
      print(filteredArr, allRecipesCont);
    });

  // Create recipe boxes /////////////////////////////////
  Handlebars.registerHelper('isFav', function (obj) {
    let ind = userData.logedUser.arrFav.indexOf(obj);
    return ind === -1;
  });
  function print(arr, printPlace) {
    printPlace.innerHTML = "";
    addIngOptions ();
    let source = document.getElementById("recipeBox-template").innerHTML;
    let template = Handlebars.compile(source);
    printPlace.innerHTML = template({recipes : arr});

    //Remove and add buttons
    let favButtonsList = document.querySelectorAll('.addFavBtn');
    let remButtonsList = document.querySelectorAll('.removeFavBtn');
    favButtonsList.forEach(e => e.addEventListener('click', function(event){
      let parent = event.target.parentElement;
      let targertName = parent.querySelector('h1').innerText;
      let targetRecipeObj = recipeManager.recipeArr.find(e => e.name === targertName);
      userData.logedUser.addFav(targetRecipeObj);
      hashHasChanged();
    }));
    remButtonsList.forEach(e => e.addEventListener('click', function(event){
      let parent = event.target.parentElement;
      let targertName = parent.querySelector('h1').innerText;
      let targetRecipeObj = recipeManager.recipeArr.find(e => e.name === targertName);
      let ind = userData.logedUser.arrFav.indexOf(targetRecipeObj);
      userData.logedUser.removeFav(ind);
      hashHasChanged();
    }));

    //Cook button
    let cookButtonsList = document.querySelectorAll('.cookBtn');
    cookButtonsList.forEach(e => e.addEventListener('click', function(event){
      let parent = event.target.parentElement;
      let targertName = parent.querySelector('h1').innerText;
      let targetRecipeObj = recipeManager.recipeArr.find(e => e.name === targertName);
      userData.logedUser.addCooked(targetRecipeObj);
      hashHasChanged();
    }));

  }
  ////////////////////////////////////////////////////////////////////////////////

  //Create recipe
  let check = function () {
    let newName = document.getElementById("nm").value;
    let newIng = document.getElementById("ing").value;
    let newLink = document.getElementById("lnk").value;
    let newImage = document.getElementById("imgIn").value;

    if (newName == "" || newIng == "" || newLink == "" || newImage == "") {
      return false;
    }
    return true;
  };
  let buttonStateChange = function () {
    document.getElementById("createNew").disabled = !check();
  };
  let createInputs = document.querySelectorAll(".inpt");
  createInputs.forEach(e => {
    e.addEventListener("change", buttonStateChange);
    e.addEventListener("keyup", buttonStateChange);
  }) 
  document
    .getElementById("createNew")
    .addEventListener("click", function createRecipe(event) {
      event.preventDefault();
      let newName = document.getElementById("nm").value;
      let newIng = document.getElementById("ing").value;
      let newLink = document.getElementById("lnk").value;
      let newImage = document.getElementById("imgIn").value;
      recipeManager.addRecipe(newName, newLink, newIng, newImage);
      document.getElementById('form').reset();
    });

  //My profile - edit
  document
    .getElementById("editProf")
    .addEventListener("click", function editProf(event) {
      event.preventDefault();
      let newUserName = document.getElementById("userName").value;
      let newUserAge = document.getElementById("userAge").value;
      let newUserAdress = document.getElementById("userAdress").value;
      let newUserImage = document.getElementById("userPic").value;

      if (
        newUserName == "" ||
        newUserAge == "" ||
        newUserAdress == "" ||
        newUserImage == ""
      ) {
        alert("To edit your profile fill all the empty spaces!");
      } else {
        userData.editUser(newUserName, newUserAge, newUserAdress, newUserImage);
        document
          .querySelector("#headerProfImg")
          .setAttribute("src", `${newUserImage}`);
        document.getElementById('profForm').reset();
      }
    });

    //My profile - coocked
    return print;
})();


let printCooked = (function(){
  function printCooked(){
    let cookedNames = [];
    let cookedCounters = [];
    let cookedArr = userData.logedUser.arrCooked;
    console.log(cookedArr);
    cookedArr.forEach(e => {
      cookedNames.unshift(e.name);
      cookedCounters.unshift(e.cookedCounter);
    })

    console.log(cookedNames);
    console.log(cookedCounters);

    let namesCol = document.getElementById("nameCol");
    let countersCol = document.getElementById("counterCol");

    namesCol.innerHTML = '';
    countersCol.innerHTML = '';

    cookedNames.forEach(e => {
      let textElement = document.createElement('h2');
      textElement.innerText = e;
      namesCol.appendChild(textElement)
    })

    cookedCounters.forEach(e => {
      let textElement = document.createElement('h2');
      textElement.innerText = e;
      countersCol.appendChild(textElement)
    })

  }

  return printCooked
})()