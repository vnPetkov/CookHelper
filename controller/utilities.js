//Login pages
const logPage = getById("logForm");
const regPage = getById("regForm");
//login fields
const logUsername = getById("logUsername");
const logPass = getById("logPassword");
//login buttons
const loginBtn = getById("logBtn");
const goToRegister = getById("goToRegister");
//register fields
const regUsername = getById("regUsername");
const regPass1 = getById("regPassword1");
const regPass2 = getById("regPassword2");
const regName = getById("regName");
const regAge = getById("regAge");
const regAddress = getById("regAddress");
//register buttons
const regBtn = getById("regBtn");
const goToLogin = getById("goToLogin");
//errors
const logErr = document.querySelector("#logForm p");
const regErr = document.querySelector("#regForm p");

//Error page
const errorPage = getById("errorPage");

//User pages
const recipePage = getById("recipePage");
const allRecipesCont = getById("allrecipesCont");

const favPage = getById("favPage");
const createPage = getById("createPage");
const profPage = getById("profPage");

//others
const recipeArr = JSON.parse(localStorage.getItem("recipeArr"));

function getById(id) {
  return document.getElementById(id);
}

const header = document.querySelector("header");
const logOut = document.getElementById('logOut');

const defProfImg = '../view/img/guest.png';