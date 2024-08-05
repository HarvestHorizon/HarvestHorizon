const SignupAction = async (firstname,lastname,email_id,password, confirm_password,phone_no) => {
    return fetch('http://localhost:8080/api/v1/user/register', {
        method: 'POST',
        body: JSON.stringify({
           firstname:firstname,
           lastname:lastname,
           email_id:email_id,
            password: password,
            confirm_password:confirm_password,
            phone_no:phone_no

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

export default SignupAction;