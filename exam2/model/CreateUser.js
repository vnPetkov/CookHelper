let User = (function () {
    let ClassUser = class User {
      constructor(username, password, name, age, adress, img = '') {
        this.username = username;
        this.password = password;
  
        this.name = name;
        this.age = age;
        this.adress = adress;
        this.img = img;
  
        this.arrFav = [];
        this.arrCooked = [];
      }
      addFav (object) {
        this.arrFav.push(object);
      }
      removeFav (index) {
        this.arrFav.splice(index, 1);
      }
      addCooked (object) {
        console.log(object.cookedCounter);
        if(object.cookedCounter){
          object.cookedCounter++;
        }
        else{
          object.cookedCounter = 1;
          this.arrCooked.push(object);
        }
        
      }
  

    }
    return ClassUser;
})();
// let newUser = new User ('vasilman', 'vasilman95', 'Vasilcho', 25, 'Silivr');
// newUser.addFav({name:'ZDR'});
// newUser.addFav({name:'KO PR'});
// console.log(newUser.arrFav);
// console.log(5);