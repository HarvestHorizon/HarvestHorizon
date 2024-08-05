const  Crop = async () => {
    return fetch('http://localhost:8080/api/v1/fertilizers',
        {
        method: 'GET',
        body: JSON.stringify
        <({

        }),
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
export { Crop }