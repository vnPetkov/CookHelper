let hashHasChanged = (function () {
  function hashHasChanged() {
    let hash = location.hash.slice(1);
    if (Object.keys(userData.logedUser).length > 0) {
      
      logPage.style.display = "none";
      regPage.style.display = "none";

      document.getElementById('navList').style.display = 'flex';
      document.getElementById('navText').style.display = 'none';
      logOut.style.visibility = 'visible';

      switch (hash) {
        case "recipePage":
          recipePage.style.display = "block";
          favPage.style.display = "none";
          createPage.style.display = "none";
          profPage.style.display = "none";
          errorPage.style.display = "none";
          print(recipeManager.recipeArr, allRecipesCont);
          break;
        case "favPage":
          recipePage.style.display = "none";
          favPage.style.display = "flex";
          createPage.style.display = "none";
          profPage.style.display = "none";
          errorPage.style.display = "none";
          print(userData.logedUser.arrFav, favPage);
          break;
        case "createPage":
          recipePage.style.display = "none";
          favPage.style.display = "none";
          createPage.style.display = "block";
          profPage.style.display = "none";
          errorPage.style.display = "none";
          break;
        case "profPage":
          recipePage.style.display = "none";
          favPage.style.display = "none";
          createPage.style.display = "none";
          profPage.style.display = "block";
          errorPage.style.display = "none";
          printCooked();
          break;
        case "":
          recipePage.style.display = "block";
          favPage.style.display = "none";
          createPage.style.display = "none";
          profPage.style.display = "none";
          errorPage.style.display = "none";
          print(recipeManager.recipeArr, allRecipesCont);
          break;
        default:
          recipePage.style.display = "none";
          favPage.style.display = "none";
          createPage.style.display = "none";
          profPage.style.display = "none";
          errorPage.style.display = "block";
          break;
      }
    } else {
      document.getElementById('navList').style.display = 'none';
      document.getElementById('navText').style.display = 'block';
      logOut.style.visibility = 'hidden';

      if (
        hash == "recipePage" ||
        hash == "favPage" ||
        hash == "createPage" ||
        hash == "profPage"
      ) {

        recipePage.style.display = "none";
        favPage.style.display = "none";
        createPage.style.display = "none";
        profPage.style.display = "none";
        errorPage.style.display = "none";

        logPage.style.display = "block";
        regPage.style.display = "none";

      } else {
        switch (hash) {
          case "loginPage":
            recipePage.style.display = "none";
            favPage.style.display = "none";
            createPage.style.display = "none";
            profPage.style.display = "none";
            errorPage.style.display = "none";

            logPage.style.display = "block";
            regPage.style.display = "none";
            break;
          case "regPage":
            recipePage.style.display = "none";
            favPage.style.display = "none";
            createPage.style.display = "none";
            profPage.style.display = "none";
            errorPage.style.display = "none";

            logPage.style.display = "none";
            regPage.style.display = "block";
            break;
          case "":
            recipePage.style.display = "none";
            favPage.style.display = "none";
            createPage.style.display = "none";
            profPage.style.display = "none";
            errorPage.style.display = "none";

            logPage.style.display = "block";
            regPage.style.display = "none";
            break;
          default:
            recipePage.style.display = "none";
            favPage.style.display = "none";
            createPage.style.display = "none";
            profPage.style.display = "none";
            errorPage.style.display = "block";

            logPage.style.display = "none";
            regPage.style.display = "none";
            break;
        }
      }
    }
  }

  return hashHasChanged;
})();
