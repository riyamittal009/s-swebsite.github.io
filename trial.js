var myVar;
function myFunction1000() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("everything").style.display = "block";
  document.getElementById("headerwork").style.height = "100vh";
}
