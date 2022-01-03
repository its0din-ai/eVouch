

var infoProfil = document.getElementById('infoProfil')
var gmbrOrang0 = document.getElementById('person0Img')
var gmbrOrang1 = document.getElementById('person1Img')
var gmbrOrang2 = document.getElementById('person2Img')

var gmbrBio = document.getElementById('gambarBio')

var bioNama = document.getElementById('bioNama')
var bioNim = document.getElementById('bioNim')
var bioAlamat = document.getElementById('bioAlamat')
var bioBirth = document.getElementById('bioBirth')
var bioHobby = document.getElementById('bioHobby')
var bioMotto = document.getElementById('bioMotto')

infoProfil.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget
  var namaOrang = button.getAttribute('dataNama')
  var modalTitle = infoProfil.querySelector('.modal-title')

  modalTitle.textContent = namaOrang
  if(namaOrang == "MUHAMMAD WAHYU SYAFI'UDDIN"){
      bioNama.textContent = "MUHAMMAD WAHYU SYAFI'UDDIN"
      bioNim.textContent = "L200210056"
      bioAlamat.textContent = "KLATEN, JAWA TENGAH"
      bioBirth.textContent = "KLATEN, 15 MEI 2002"
      bioHobby.textContent = "Bermain CTF"
      bioMotto.textContent = "COGITO ERGO SUM!"
      gmbrBio.alt = "Gambar-Odin"
      gmbrBio.src = gmbrOrang1.src
    }
    else if(namaOrang == "RIFAN ARDYANSYAH"){
      bioNama.textContent = "RIFAN ARDYANSYAH"
      bioNim.textContent = "L200210045"
      bioAlamat.textContent = "GULI, NOGOSARI, BOYOLALI, JAWA TENGAH"
      bioBirth.textContent = "BOYOLALI, 30 MARET 2004"
      bioHobby.textContent = "Mikir, Mencari Hal Baru"
      bioMotto.textContent = "Jadilah bermanfaat. Bila tidak bisa, minimal jangan menyusahkan orang lain"
      gmbrBio.alt = "Gambar-Rifan"
      gmbrBio.src = gmbrOrang0.src
    }
    else if(namaOrang == "NAUFAL RAFID ARDANU"){
      bioNama.textContent = "NAUFAL RAFID ARDANU"
      bioNim.textContent = "L200210008"
      bioAlamat.textContent = "PURWODADI, GROBOGAN, JAWA TENGAH"
      bioBirth.textContent = "GROBOGAN, 25 APRIL 2003"
      bioHobby.textContent = "Eksperimen"
      bioMotto.textContent = "Be Yourself and Never Surrender"
      gmbrBio.alt = "Gambar-Naufal"
      gmbrBio.src = gmbrOrang2.src
    }else{
      bioNama.textContent = "[404] DATA NOT FOUND"
      bioNim.textContent = "[404] DATA NOT FOUND"
      bioAlamat.textContent = "[404] DATA NOT FOUND"
      bioBirth.textContent = "[404] DATA NOT FOUND"
      bioHobby.textContent = "[404] DATA NOT FOUND"
      bioMotto.textContent = "[404] DATA NOT FOUND"
      gmbrBio.alt = "Ada ERROR, bilangin ke DEV nya :)"
      gmbrBio.src = ""
  }
  
})