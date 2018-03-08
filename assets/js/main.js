// Event for char typing
var load = document.getElementById("loading");
document.getElementById("charName").addEventListener("input", function(){
    if(this.value == ""){
        document.getElementById("barResult").innerHTML = "";
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "logic.php?search=" + this.value);

    load = document.getElementById("loading");
    var img = document.createElement("img");
    load.innerHTML = "";

    img.src = "./assets/img/loading.gif";
    load.appendChild(img);

    xhr.onload = function (ev) {
      var heroes = JSON.parse(this.responseText);

      var div = document.getElementById("barResult");
      var ul = document.createElement("ul");
      ul.setAttribute("id","list");
      div.innerHTML = "";
      load.innerHTML = "";
      for(var i = 0; i < heroes.length; i++){
          var li = document.createElement("li");
          li.setAttribute("id",heroes[i]["id"]);
          li.className = "item";
          var a = document.createElement("a");
          var img = document.createElement("img");
          img.src = heroes[i]["icon"];

          li.innerHTML = heroes[i]["name"];
          li.appendChild(img);
          ul.appendChild(li);
      }
      div.appendChild(ul);


        document.getElementById("list").addEventListener("click",function(e) {

            if(e.target && e.target.nodeName == "LI") {


                var content = document.getElementById("content");
                content.style.display = "block";
                content.innerHTML = "";

                var xh = new XMLHttpRequest();
                xh.open("GET", "logic.php?id=" + e.target.id);

                var loading = document.createElement("img");
                loading.src = "./assets/img/loading.gif";
                content.appendChild(loading);

                xh.onload = function () {
                    content.innerHTML = "";

                    var charInfo = JSON.parse(this.responseText);
                    var divv = document.createElement("div");


                        divv.setAttribute("class","hero-"+charInfo["id"]);
                        content.innerHTML += "<div class='hero-img'><img src='" + charInfo["img"] + "' alt=''></div>";
                        content.innerHTML += "<div class='hero-name'><span>Name: </span>" + charInfo["name"] + "</div>";
                        content.innerHTML += "<div class='hero-health'><span>Health: </span>" + charInfo["base_health"] + "</div>";
                        content.innerHTML += "<div class='hero-mana'><span>Mana: </span>" + charInfo["base_mana"] + "</div>";
                        content.innerHTML += "<div class='hero-hregen'><span>Health Regen: </span>" + charInfo["base_health_regen"] + "</div>";
                        content.innerHTML += "<div class='hero-mregen'><span>Mana Regen: </span>" + charInfo["base_mana_regen"] + "</div>";
                        content.innerHTML += "<div class='hero-att-range'><span>Range: </span>" + charInfo["attack_range"] + "</div>";
                        content.innerHTML += "<div class='hero-proj-speeed'><span>Projectile speed: </span>" + charInfo["projectile_speed"] + "</div>";
                        content.innerHTML += "<div class='hero-att-speed'><span>Attack speed: </span>" + charInfo["attack_rate"] + "</div>";
                        content.innerHTML += "<div class='hero-move-speed'><span>Move speed: </span>" + charInfo["move_speed"] + "</div>";
                        content.innerHTML += "<div class='hero-turn-rate'><span>Turn speed: </span>" + charInfo["turn_rate"] + "</div>";
                        content.innerHTML += "<div class='hero-armor'><span>Armor: </span>" + charInfo["base_armor"] + "</div>";
                        content.innerHTML += "<div class='hero-main-attr'><span>Primary attr: </span>" + charInfo["primary_attr"] + "</div>";



                };


                xh.send();

            }
        });

    };
    xhr.send();
});

//getting id from the links



