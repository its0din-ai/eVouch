

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
  var x = document.getElementById("slh");
  const mailDb = "admin"                                     // Email Admin
  const passDb = "admin123"                                 // Password Admin

  console.log(mail)
  console.log(pass)
  x.style.display = "none";
  if (mail === mailDb && pass === passDb) {
    location.replace("/co.html")
  } else{
      x.style.display = "block";
    }
}


var infoProfil = document.getElementById('infoProfil')
infoProfil.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget
  var recipient = button.getAttribute('dataNama')
  var modalTitle = infoProfil.querySelector('.modal-title')

  modalTitle.textContent = recipient
})

