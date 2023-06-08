function cetakStruk() {
    if (pesanan.length === 0) {
        alert('Tidak ada pesanan untuk dicetak.');
        return;
    }

    var struk = '========== STAR TERK Drink K5B =========\n';
    struk += '    Kalimantan Instite Of Tehcnology    \n';
    struk += '      Pemrograman Terstruktur B         \n';
    struk += '            Project Group 5             \n';
    struk += ' Jl. Soekarno Hatta KM.15, Karang Joang \n';
    struk += '----------------------------------------\n';
    for (var i = 0; i < pesanan.length; i++) {
        struk += pesanan[i].menu 
        + ' ' 
        + pesanan[i].jumlah + 'x'
        + '                    Rp ' + pesanan[i].harga + '\n';
    }
    struk += '----------------------------------------\n';
    struk += 'Sub Total                     : Rp ' + totalHarga + '\n';
    struk += '----------------------------------------\n';
    struk += 'Total Harga                   : Rp ' + totalHarga + '\n';
    struk += '========================================\n';
    struk += 'Tunai                         : Rp ' + bayar +'\n'
    struk += 'Kembalian                     : Rp ' + kembalian+'\n'
    struk += '========================================\n';

    // Membuka opsi cetak di browser
    if (window.print) {
        var printWindow = window.open('', '', 'width=1080,height=720');
        printWindow.document.write('<pre>' + struk + '</pre>');
        printWindow.document.close();
        printWindow.print();
    } else {
        alert('Maaf, browser Anda tidak mendukung fitur cetak.');
    }
}