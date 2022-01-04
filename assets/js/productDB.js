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
    // console.log("OK") [DEBUGGER]
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

// ROW 2
var genshin = document.getElementById('genshin')
var valo = document.getElementById('valorant')
var pb = document.getElementById('pointblank')
var mc = document.getElementById('minecraft')

genshin.src = "https://images.tokopedia.net/img/attachment/2020/11/6/66301108/66301108_e9bc121f-edb0-4179-a3fd-9df4567aeb73.png?ect=4g"
valo.src = "https://images.tokopedia.net/img/attachment/2020/7/1/66301108/66301108_c76472c9-90fd-493b-886c-9e6e8213a951.png?ect=4g"
pb.src = "https://images.tokopedia.net/img/attachment/2019/9/24/66301108/66301108_5bd4c250-4fcb-4ba6-be35-fd3b516c9cbd.png?ect=4g"
mc.src = "https://images.tokopedia.net/img/attachment/2020/8/11/66301108/66301108_6fd36e7c-32ec-4c9e-8c6e-3ed9b5a65eb4.jpg?ect=4g"

// ROW 3
var apex = document.getElementById('apex')
var fifa = document.getElementById('fifa')
var roblox = document.getElementById('roblox')
var lor = document.getElementById('runeterra')

apex.src = "https://images.tokopedia.net/img/attachment/2020/12/3/66301108/66301108_a15c1d89-4ce9-4135-b5b8-9954822769cd.png?ect=4g"
fifa.src = "https://images.tokopedia.net/img/attachment/2020/3/17/66301108/66301108_e4527ffe-e18b-4523-a5ef-6a1b4c4b7cb9.jpg?ect=4g"
roblox.src = "https://images.tokopedia.net/img/attachment/2020/2/12/44945993/44945993_a71b9423-7555-4147-a028-031c46e2806d.jpeg?ect=4g"
lor.src = "https://images.tokopedia.net/img/attachment/2020/6/4/66301108/66301108_c7d9d819-c7fe-4b51-b472-36d0ae8492f6.png?ect=4g"

// ROW 4
var ff = document.getElementById('freefire')
var mole = document.getElementById('mobilelegends')
var pubgm = document.getElementById('pubgm')
var codm = document.getElementById('codm')

ff.src = "https://images.tokopedia.net/img/attachment/2020/4/1/66301108/66301108_b278da84-f425-4958-bdcb-43c96da0c05a.png?ect=4g"
mole.src = "https://images.tokopedia.net/img/attachment/2019/9/24/66301108/66301108_0ae79264-8298-496b-b64a-967d9bb5dca2.jpg?ect=4g"
pubgm.src = "https://images.tokopedia.net/img/attachment/2019/9/24/66301108/66301108_1210df04-593a-4ca8-b002-41fa32b858a0.jpg?ect=4g"
codm.src = "https://images.tokopedia.net/img/attachment/2019/10/23/47231715/47231715_0272fbec-8633-4636-9afd-d5a792672168.jpg?ect=4g"
  


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

    else if(proName == "Genshin Impact"){
        prodImg.src= genshin.src
        modalTitle.textContent = "Genshin Impact"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "Valorant"){
        prodImg.src= valo.src
        modalTitle.textContent = "Valorant"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "Pointblank"){
        prodImg.src= pb.src
        modalTitle.textContent = "Pointblank Beyond Limits"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "Minecraft"){
        prodImg.src= mc.src
        modalTitle.textContent = "Minecraft"
        coba.textContent = "Pilih Vouchernya"
        
    }
    
    else if(proName == "Apex Legends"){
        prodImg.src= apex.src
        modalTitle.textContent = "Apex Legends"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "Fifa Points"){
        prodImg.src= fifa.src
        modalTitle.textContent = "Fifa Points"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "Roblox"){
        prodImg.src= roblox.src
        modalTitle.textContent = "Roblox"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "Legends of Runeterra"){
        prodImg.src= lor.src
        modalTitle.textContent = "Legends of Runeterra"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "Free Fire"){
        prodImg.src= ff.src
        modalTitle.textContent = "Free Fire"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "Mobile Legends"){
        prodImg.src= mole.src
        modalTitle.textContent = "Mobile Legends"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "PUBG Mobile"){
        prodImg.src= pubgm.src
        modalTitle.textContent = "PUBG Mobile"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else if(proName == "Call of Duty Mobile"){
        prodImg.src= codm.src
        modalTitle.textContent = "Call of Duty Mobile"
        coba.textContent = "Pilih Vouchernya"
        
    }

    else{
        prodImg.src= ""
        modalTitle.textContent = "Database Error"
        coba.textContent = "Pilih Vouchernya"
        
    }
})