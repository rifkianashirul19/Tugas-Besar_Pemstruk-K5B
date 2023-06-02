function cetakStruk() {
    if (pesanan.length === 0) {
        alert('Tidak ada pesanan untuk dicetak.');
        return;
    }

    var struk = '=========== Warung Makan K5B ===========\n';
    for (var i = 0; i < pesanan.length; i++) {
        struk += pesanan[i].menu + ' - Rp ' + pesanan[i].harga + '\n';
    }
    struk += '----------------------------------------\n';
    struk += 'Total Harga: Rp ' + totalHarga + '\n';
    struk += '========================================';

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