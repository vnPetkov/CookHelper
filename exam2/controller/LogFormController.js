(function () {

  //login page controll
  loginBtn.addEventListener("click", function (event) {
    if (logUsername.value === "" || logPass.value === "") {
      logErr.innerHTML = "The fields are not filled!";
    } 
    else {
      let validationResult = userData.validateUser(logUsername.value.trim(), logPass.value.trim());
      if (validationResult){
        let url = location.href;
        let hashIndex = url.indexOf('#')
        let clearedUrl = url.slice(0,hashIndex+1)
        let newUrl = clearedUrl + 'recipePage'
        location.replace(`${newUrl}`);
        let profImg =  document.querySelector("#headerProfImg")
        if(userData.logedUser.img){
          profImg.setAttribute("src", `${userData.logedUser.img}`);
        }
        else{
          profImg.setAttribute("src", defProfImg);
        }
        logErr.innerHTML = '';
      }
      else{
        logErr.innerHTML = "The username or password is incorrect!";
      }
      document.getElementById('logForm').reset();
    }
  });
  goToRegister.addEventListener("click", function (event) {
    logErr.innerHTML = '';
    hashHasChanged();
  });

  //register page control
  regBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (regUsername.value === "" || regPass1.value === "" || regPass2.value === ""
        || regName.value === "" || regAge.value === ""  || regAddress.value === ""){
      regErr.innerHTML = "The fields are not filled";
    } else if (regPass1.value !== regPass2.value) {
      regErr.innerHTML = "The two passwords are not the same!";
    } else if (
      userData.addUser(
        regUsername.value.trim(),
        regPass1.value.trim(),
        regName.value.trim(),
        regAge.value.trim(),
        regAddress.value.trim()
      )
    ) {
      regErr.innerHTML = "Your registration is successful!";
      hashHasChanged();
    } else {
      regErr.innerHTML = "The username or password is taken!";
    }
    document.getElementById('regForm').reset();
  });
  goToLogin.addEventListener("click", function (event) {
    regErr.innerHTML = '';
    hashHasChanged();
  });
})();

