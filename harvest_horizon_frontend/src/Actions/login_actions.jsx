const login = async (username, password) => {
    return fetch('http://localhost:7051/api/v1/user/login', {
        method: 'POST',
        body: JSON.stringify({
            email_id: username,
            password: password
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

export { login }