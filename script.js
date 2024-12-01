// Rooms dropdown JS

function openNav0() {
  document.getElementById("myNav0").style.height = "100%";
}

function closeNav0() {
  document.getElementById("myNav0").style.height = "0%";
}

// Tabs JS

function openRoom(evt, RoomNum) {
  openNav0();
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(RoomNum).style.display = "block";

}