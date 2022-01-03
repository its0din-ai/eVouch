// Back to top
var btn = $("#topp")

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '100');
  });

var gaada = document.getElementById("fitur");
gaada.style.display = "none";
function kasihTau(){
    gaada.style.display = "block";
    console.log("OK")
}

// DB GAMBAR PRODUK
// Urutan:
// Row 1 = Steam, PlayStore, Razer, PS Gift
// Row 2 = Genshin, Valo, PB, Minecraft
// Row 3 = Apex, Fifa, Roblox, LoR
// Row 4 = FF, MoLe, PUBGM, CODM

// ROW 1
var stm = document.getElementById('steam-w')
var ply = document.getElementById('playstore')
var rzr = document.getElementById('razer')
var psg = document.getElementById('playstation')

stm.src = "https://images.tokopedia.net/img/attachment/2019/9/27/66301108/66301108_7b8b9fe1-e484-41cf-bd64-ccd417a51b3a.png?ect=4g"
ply.src = "https://images.tokopedia.net/img/attachment/2020/3/1/66301108/66301108_b0f2723c-bd0f-46ac-ab9c-4d0af068eb73.png?ect=4g"
rzr.src = "https://images.tokopedia.net/img/attachment/2019/10/7/66301108/66301108_ed814435-e3be-4825-9f4c-37a5609b70ad.png?ect=4g"
psg.src = "https://images.tokopedia.net/img/attachment/2021/10/27/66301108/66301108_9ecc0f28-2ceb-404f-9a92-da3b3cccbbfb.png?ect=4g"

// // ROW 2
// var genshin = document.getElementById('genshin')
// var valo = document.getElementById('valorant')
// var pb = document.getElementById('pointblank')
// var mc = document.getElementById('minecraft')

// genshin.src = ""
// valo.src = ""
// pb.src = ""
// mc.src = ""

// // ROW 3
// var apex = document.getElementById('apex')
// var fifa = document.getElementById('fifa')
// var roblox = document.getElementById('roblox')
// var lor = document.getElementById('runeterra')

// apex.src = ""
// fifa.src = ""
// roblox.src = ""
// lor.src = ""

// // ROW 4
// var ff = document.getElementById('freefire')
// var mole = document.getElementById('mobilelegends')
// var pubgm = document.getElementById('pubgm')
// var codm = document.getElementById('codm')

// ff.src = ""
// mole.src = ""
// pubgm.src = ""
// codm.src = ""
  


// Product Info Modal
var infoProd = document.getElementById('productModal')
infoProd.addEventListener('show.bs.modal', function (event) {
    gaada.style.display = "none";


    var button = event.relatedTarget
    var proName = button.getAttribute('name')
    var modalTitle = infoProd.querySelector('.modal-title')
    var coba = infoProd.querySelector('#coba')
    var harga = document.getElementById("listVoucher").value

    $("#listVoucher").change(function () {
        var selectedItem = $(this).val();
        var abc=$(this).find(':selected').data("value");
        coba.textContent = abc
       });


    var prodImg = document.getElementById('prodImg')
    if(proName == "Steam"){
        prodImg.src= stm.src
        modalTitle.textContent = "Steam Wallet"
        coba.textContent = "Pilih Vouchernya"

    }

    else if(proName == "Google Play"){
        prodImg.src= ply.src
        modalTitle.textContent = "Google Play Wallet"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "Razer Gold"){
        prodImg.src= rzr.src
        modalTitle.textContent = "Razer Gold"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "PS Gift Card"){
        prodImg.src= psg.src
        modalTitle.textContent = "Playstation Gift Card"
        coba.textContent = "Pilih Vouchernya"
        
    }




})