function myFunction() {
    var menu = document.getElementById("menu-retract");
    var button = document.getElementById("button-mobile-hover");

        if(button.classList.contains("clicked")){
            console.log('baba boi!'); 
            menu.classList.remove("active-menu");
            button.classList.remove("clicked");
        }else{
            menu.classList.add("active-menu");
            button.classList.add("clicked");
            console.log('boi babou!');
        }
        
  }
  function showDropDown(){
      console.log('obrgado deus!')

      var liItem = document.getElementById("show-li")

      liItem.classList.add("li-show");

      console.log(liItem)
  }