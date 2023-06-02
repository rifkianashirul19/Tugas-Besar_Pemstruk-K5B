function database() {
    fetch('data.json')
        .then(function(response){
            return response.json();
            }
        )
        .then(function(data){
            console.log(data);
            }
        )
        .catch(function(error){
            console.log('Data tidak di temukan: ',error)
            }
        )
}