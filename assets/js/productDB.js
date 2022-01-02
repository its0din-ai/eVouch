var infoProfil = document.getElementById('productModal')
infoProfil.addEventListener('show.bs.modal', function (event) {


    var button = event.relatedTarget
    var recipient = button.getAttribute('name')
    var modalTitle = infoProfil.querySelector('.modal-title')
    var coba = infoProfil.querySelector('#coba')
    var harga = document.getElementById("listVoucher").value

    $("#listVoucher").change(function () {
        var selectedItem = $(this).val();
        var abc=$(this).find(':selected').data("value");
        coba.textContent = abc
       });


    if(recipient == "Steam"){
        modalTitle.textContent = "Steam Wallet"
        // coba.textContent = harga
    }
    else if(recipient == "Google Play"){
        modalTitle.textContent = "Google Play Wallet"
        // coba.textContent = harga
    }
})