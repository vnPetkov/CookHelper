let recipeManager = (function () {
  class Recipe {
    constructor(name, link, ingredients, image) {
      this.name = name;
      this.link = link;
      this.ingredients = ingredients;
      this.imageUrl = image;
    }
  }

  class RecipesManager {
    constructor() {
      if (!localStorage.getItem("recipeArr")) {
        let recipeArr = [];
        for (let i = 0; i < serverRecipes.length; i++) {
          let obj = serverRecipes[i];
          let recipe = new Recipe(
            obj.title,
            obj.href,
            obj.ingredients,
            obj.thumbnail,
          );
          addDefault(recipe);
          function addDefault(object) {
            recipeArr.push(object);
          }
        }
        localStorage.setItem("recipeArr", JSON.stringify(recipeArr));
      }
      this.recipeArr = JSON.parse(localStorage.getItem("recipeArr"));
    }

    addRecipe(name, link, ingredients, image) {
      if (!this.existsRecipe(name)) {
        let newRecipe = new Recipe (name, link, ingredients, image);
        this.recipeArr.unshift(newRecipe);
        localStorage.setItem("recipeArr", JSON.stringify(this.recipeArr));
        return true;
      } 
      else {
        return false;
      }
    }
    existsRecipe(recipeTitle) {
      return this.recipeArr.some(
        (e) => e.name === recipeTitle
      );
    }
    // //////////////////////////////////////
    filterIng(string, arr) {
      let filtered = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].ingredients.toLowerCase().includes(string)) {
          filtered.push(arr[i]);
        }
      }
      return filtered;
    }
    filterName(string, arr) {
      let filtered = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase().includes(string)) {
          filtered.push(arr[i]);
        }
      }
      return filtered;
    }
  }
  return new RecipesManager();
})();
