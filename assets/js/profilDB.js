var infoProfil = document.getElementById('infoProfil')
var bio = document.getElementById('bioNama')
var gmbrBio = document.getElementById('gambarBio')

infoProfil.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget
  var recipient = button.getAttribute('dataNama')
  var modalTitle = infoProfil.querySelector('.modal-title')

  modalTitle.textContent = recipient
  if(recipient == "Muhammad Wahyu Syafi'uddin"){
      bio.textContent = "ODIN"
      gmbrBio.src = "./assets/img/profile-w.png"
    }
    else if(recipient == "ANJAY HEKER"){
      bio.textContent = "Heker Gaool"
      gmbrBio.src = "./assets/img/l.png"
    }
    else if(recipient == "Mak Lo Heker"){
      bio.textContent = "Heker Insaf"
      gmbrBio.src = "./assets/img/r.png"
    }else{
      bio.textContent = "ADA ERROR, TANYA DEVNYA"
      gmbrBio.src = ""
  }
  
})