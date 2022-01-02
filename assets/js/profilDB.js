var infoProfil = document.getElementById('infoProfil')
infoProfil.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget
  var recipient = button.getAttribute('dataNama')
  var modalTitle = infoProfil.querySelector('.modal-title')

  modalTitle.textContent = recipient
})