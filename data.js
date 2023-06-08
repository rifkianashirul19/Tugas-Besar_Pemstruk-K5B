fetch('data.json')
  .then(response => response.json())
  .then(data => {
    var tableBody = document.querySelector('#data-table tbody');

    data.forEach(item => { 
      var row = document.createElement('tr');
      var nomorCell = document.createElement('td');
      var namaCell = document.createElement('td');
      var hargaCell = document.createElement('td');
      var aksiCell = document.createElement('td');
      var addButton = document.createElement('button');

      nomorCell.textContent = item.nomor;
      namaCell.textContent = item.nama;
      hargaCell.textContent = item.harga;

      addButton.textContent = 'Pesan';
      addButton.classList.add('btn', 'btn-primary');
      addButton.addEventListener('click', function() {
        tambahPesanan(item.nama, item.harga, 1);
      });

      row.appendChild(nomorCell);
      row.appendChild(namaCell);
      row.appendChild(hargaCell);
      aksiCell.appendChild(addButton);
      row.appendChild(aksiCell);

      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });