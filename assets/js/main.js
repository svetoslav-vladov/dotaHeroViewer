// Event for char typing
var load = document.getElementById("loading");
document.getElementById("charName").addEventListener("input", function(){
    if(this.value == ""){
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "logic.php?search=" + this.value);
    xhr.onprogress = function () {
        load = document.getElementById("loading");
        var img = document.createElement("img");
        load.innerHTML = "";

        img.src = "./assets/img/loading.gif";
        load.appendChild(img);
    };
    xhr.onload = function (ev) {
      var heroes = JSON.parse(this.responseText);

      var div = document.getElementById("barResult");
      var ul = document.createElement("ul");
      div.innerHTML = "";
      load.innerHTML = "";
      for(var i = 0; i < heroes.length; i++){
          var li = document.createElement("li");
          li.innerHTML = heroes[i];
          ul.appendChild(li);
      }
      div.appendChild(ul);

    };
    xhr.send();
});

