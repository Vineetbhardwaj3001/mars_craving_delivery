$(document).ready(function(){
  $("#button").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
   
        window.location.hash = hash;
      });
    }
  });
});

function up(){
  var x = document.getElementById("up");
  if (x.innerHTML >=0){
    x.innerHTML++;
  }
}
function down(){
  var x = document.getElementById("up");
  if (x.innerHTML >= 1){
    x.innerHTML--;
  }
}

function up1(){
  var x = document.getElementById("up1");
  if (x.innerHTML >=0){
    x.innerHTML++;
  }
}
function down1(){
  var x = document.getElementById("up1");
  if (x.innerHTML >= 1){
    x.innerHTML--;
  }
}

function up2(){
  var x = document.getElementById("up2");
  if (x.innerHTML >=0){
    x.innerHTML++;
  }
}
function down2(){
  var x = document.getElementById("up2");
  if (x.innerHTML >= 1){
    x.innerHTML--;
  }
}

function up3(){
  var x = document.getElementById("up3");
  if (x.innerHTML >=0){
    x.innerHTML++;
  }
}
function down3(){
  var x = document.getElementById("up3");
  if (x.innerHTML >= 1){
    x.innerHTML--;
  }
}

function up4(){
  var x = document.getElementById("up4");
  if (x.innerHTML >=0){
    x.innerHTML++;
  }
}
function down4(){
  var x = document.getElementById("up4");
  if (x.innerHTML >= 1){
    x.innerHTML--;
  }
}

function up5(){
  var x = document.getElementById("up5");
  if (x.innerHTML >=0){
    x.innerHTML++;
  }
}
function down5(){
  var x = document.getElementById("up5");
  if (x.innerHTML >= 1){
    x.innerHTML--;
  }
}

function deliver(){
  document.getElementById('check').className = "success";
  setTimeout(function(){location.href = "index.html#order";}, 5000);
}