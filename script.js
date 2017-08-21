// HTML DOM body Property

function timeOutPage() {
    document.body.innerHTML = "Sorry this page has timed out.";
    var x = document.body;
    x.style.color = "black";
    x.style.backgroundColor = "white";
}

function myDefault() {
  document.getElementById("header").innerHTML = "defaultHeader";
  document.getElementById("body").innerHTML = "defaultBody";
  document.getElementById("footer").innerHTML = "defaultFooter";
  var x = document.body;
  x.style.color = "black";
  x.style.backgroundColor = "white";
}

function mySet1() {
  document.getElementById("header").innerHTML = "mySet1Header";
  document.getElementById("body").innerHTML = "mySet1Body";
  document.getElementById("footer").innerHTML = "mySet1Footer";

  var x = document.body;
  x.style.color = "red";
  x.style.backgroundColor = "green";

}

function mySet2() {
  document.getElementById("header").innerHTML = "mySet2Header";
  document.getElementById("body").innerHTML = "mySet2Body";
  document.getElementById("footer").innerHTML = "mySet2Footer";

  var x = document.body;
  x.style.color = "blue";
  x.style.backgroundColor = "red";

}

function mySet3() {
  document.getElementById("header").innerHTML = "mySet3Header";
  document.getElementById("body").innerHTML = "mySet3Body";
  document.getElementById("footer").innerHTML = "mySet3Footer";

  var x = document.body;
  x.style.color = "green";
  x.style.backgroundColor = "yellow";

}
