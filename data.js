fetch('data.json')
    .then(response => response.json())
    .then(data => {
            var tableBody = document.querySelector('#data-table tbody');
    
            data.forEach(item => {
                var row = document.createElement('tr');
                var nomorCell = document.createElement('td');
                var namaCell = document.createElement('td');
                var hargaCell = document.createElement('td');

                nomorCell.textContent = item.nomor;
                namaCell.textContent = item.nama;
                hargaCell.textContent = item.harga;
    
                row.appendChild(nomorCell);
                row.appendChild(namaCell);
                row.appendChild(hargaCell);
        
                tableBody.appendChild(row);
            });
            })
            .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });