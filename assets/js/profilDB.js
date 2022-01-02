var infoProfil = document.getElementById('infoProfil')
var bio = document.getElementById('bioNama')

infoProfil.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget
  var recipient = button.getAttribute('dataNama')
  var modalTitle = infoProfil.querySelector('.modal-title')

  modalTitle.textContent = recipient
  if(recipient == "Muhammad Wahyu Syafi'uddin"){
    bio.textContent = "ODIN"
  }
  else if(recipient == "ANJAY HEKER"){
      bio.textContent = "Heker Gaool"
  }
  else if(recipient == "Mak Lo Heker"){
      bio.textContent = "Heker Insaf"
  }else{
      bio.textContent = "ADA ERROR, TANYA DEVNYA"
  }
  
})