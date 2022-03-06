let userData = (function () {
  class UserData {
    constructor() {
      if (!localStorage.getItem("userArr")) {
        let userArr = [];
        let logedUser = {};
        localStorage.setItem("userArr", JSON.stringify(userArr));
        localStorage.setItem("logedUser", JSON.stringify(logedUser));
      }
      this.userArr = JSON.parse(localStorage.getItem("userArr"));
      this.logedUser = JSON.parse(localStorage.getItem("logedUser"));
      Object.setPrototypeOf(this.logedUser, User.prototype);
    }

    addUser(username, password, name, age, adress, img='') {
      if (!this.existsUser(username, password)) {
        this.userArr.push(new User(username, password, name, age, adress));
        localStorage.setItem("userArr", JSON.stringify(this.userArr));
        return true;
      } else {
        return false;
      }
    }
    existsUser(username, password) {
      return this.userArr.some(
        (e) => e.username === username || e.password === password
      );
    }
    validateUser(username, password) {
      let result = this.userArr.findIndex(
        (e) => e.username === username && e.password === password
      );
      if (result >= 0) {
        this.logedUser = this.userArr[result];
        localStorage.setItem("logedUser", JSON.stringify(this.logedUser));
        return true;
      }
      else{
        return false;
      }
    }
    editUser(name, age, adress, image){
      this.logedUser.name = name;
      this.logedUser.age = age;
      this.logedUser.adress = adress;
      this.logedUser.img = image;
      localStorage.setItem("logedUser", JSON.stringify(this.logedUser));
    }
    logoutUser(){
      let username = this.logedUser.username;
      let ind = this.userArr.findIndex(e => e.username === username);
      this.userArr[ind] = this.logedUser;
      localStorage.setItem("userArr", JSON.stringify(this.userArr));
      userData.logedUser = {};
      localStorage.setItem("logedUser", JSON.stringify(userData.logedUser));
      
    }

  }
  return new UserData();
})();