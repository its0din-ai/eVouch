

// Fungsi biar bisa login pake enter
$("#passInput").keypress(function(event) {
  if (event.keyCode === 13) {
      $("#btnLogin").click();
  }
});


// Fungsi Login
function login() {
  var mail = document.getElementById("mailInput").value;
  var pass = document.getElementById("passInput").value;
  var x = document.getElementById("gblkp");
  const mailDb = "admin"                                     // Email Admin
  const passDb = "admin123"                                 // Password Admin

  console.log(mail)
  console.log(pass)
  x.style.display = "none";
  if (mail === mailDb && pass === passDb) {
    location.replace("http://127.0.0.1:5500/co.html")}
  else{
      x.style.display = "block";
    }
}
