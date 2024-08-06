 const Crop = async () => {
    return fetch('http://localhost:7051/api/v1/crop/crop', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json()) // Parsing the JSON response
        .then(data => {
            console.log("Login Data ============== ", data);
            return data;
        })
        .catch(error => {
            console.log("Error on login ========= ", error);
        });

};
export {Crop}
