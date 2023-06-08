var pesanan = [];
var totalHarga = 0;
var bayar = 0;
var kembalian = 0;

function tambahPesanan(menu, harga, jumlah) {
  pesanan.push({ menu: menu, harga: harga * jumlah, hargaPerItem: harga, jumlah: jumlah });
  totalHarga += harga * jumlah;
  updateDaftarPesanan();
  updateTotalHarga();
}

function tambahJumlah(index) {
  pesanan[index].jumlah++;
  pesanan[index].harga += pesanan[index].hargaPerItem;
  totalHarga += pesanan[index].hargaPerItem;
  updateDaftarPesanan();
  updateTotalHarga();
}

function kurangiJumlah(index) {
  if (pesanan[index].jumlah > 1) {
    pesanan[index].jumlah--;
    pesanan[index].harga -= pesanan[index].hargaPerItem;
    totalHarga -= pesanan[index].hargaPerItem;
    updateDaftarPesanan();
    updateTotalHarga();
  }
}

function hapusPesanan(index) {
  var harga = pesanan[index].harga;
  pesanan.splice(index, 1);
  totalHarga -= harga;
  updateDaftarPesanan();
  updateTotalHarga();
}

function updateDaftarPesanan() {
  var daftarPesanan = document.getElementById('pesanan');
  daftarPesanan.innerHTML = '';

  for (var i = 0; i < pesanan.length; i++) {
    var pesananItem = document.createElement('li');
    pesananItem.innerHTML = pesanan[i].menu 
      + ' | '
      + ' Rp ' 
      + pesanan[i].harga 
      + ' (' + pesanan[i].jumlah + ')'
      + ' <button class="btn btn-success" onclick="tambahJumlah(' + i + ')">+</button>'
      + ' <button class="btn btn-warning" onclick="kurangiJumlah(' + i + ')">-</button>'
      + ' <button class="btn btn-danger" onclick="hapusPesanan(' + i + ')">Hapus</button>';
    daftarPesanan.appendChild(pesananItem);
  }
}

function updateTotalHarga() {
  var totalHargaElement = document.getElementById('totalHarga');
  totalHargaElement.innerHTML = totalHarga;
}

function tampilkanPesan(pesan) {
  var pesanElement = document.getElementById('pesan');
  pesanElement.innerHTML = pesan;
}

function cariPesanan(menu) {
  for (var i = 0; i < pesanan.length; i++) {
    if (pesanan[i].menu === menu) {
      return i;
    }
  }
  return -1;
}

function tambahJumlahPesanan(menu, jumlah) {
  var index = cariPesanan(menu);

  if (index !== -1) { 
    pesanan[index].jumlah += jumlah;
    pesanan[index].harga += pesanan[index].hargaPerItem * jumlah;
    totalHarga += pesanan[index].hargaPerItem * jumlah;

    updateDaftarPesanan();
    updateTotalHarga();
    tampilkanPesan('Jumlah pesanan ' + menu + ' ditambah ' + jumlah);
  } else {
    tampilkanPesan('Pesanan ' + menu + ' tidak ditemukan.');
  }
}

function kurangiJumlahPesanan(menu, jumlah) {
  var index = cariPesanan(menu);

  if (index !== -1) {
    if (pesanan[index].jumlah > jumlah) {
      pesanan[index].jumlah -= jumlah;
      pesanan[index].harga -= pesanan[index].hargaPerItem * jumlah;
      totalHarga -= pesanan[index].hargaPerItem * jumlah;
    } else {
      totalHarga -= pesanan[index].harga;
      pesanan.splice(index, 1);
    }

    updateDaftarPesanan();
    updateTotalHarga();
    tampilkanPesan('Jumlah pesanan ' + menu + ' dikurangi ' + jumlah);
  } else {
    tampilkanPesan('Pesanan ' + menu + ' tidak ditemukan.');
  }
}

function Tunai(){
  bayar = parseFloat(document.getElementById('tunai').value);
  
  kembalian = bayar - totalHarga;
  
  if (kembalian >= 0) {
      document.getElementById('kembalian').textContent = kembalian;
      } else if (kembalian = 0){
      document.getElementById('kembalian').textContent = 'Pembayaran Pas';
      } else { 
          document.getElementById('kembalian').textContent = 'Jumlah pembayaran tidak cukup.'
      }
  }