// Add your code here
function submitData() {
    let name = 'Steve';
    let email = 'steve@steve.com'

return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({ name, email })
})
.then(response => response.json())
.then(data => {
    let id = data.id;
    let idElement = document.createElement('p');
    idElement.textContent = `New ID: ${id}`;
    document.body.appendChild(idElement);
})
.catch(error => {
    console.error('Error:', error);
    let errorElement = document.createElement('p');
    errorElement.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorElement);
});
}

