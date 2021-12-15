// function gblk() {
//     var x = document.getElementById("gblkp");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

function login() {
  var mail = document.getElementById("mailInput").value;
  var pass = document.getElementById("passInput").value;
  var x = document.getElementById("gblkp");
  const mailDb = "admin@evouch.com"
  const passDb = "admin123" 

  console.log(mail)
  console.log(pass)
  x.style.display = "none";
  if (mail === mailDb && pass === passDb) {
    location.replace("http://127.0.0.1:5500/co.html")}
  else{
      x.style.display = "block";
    }


}