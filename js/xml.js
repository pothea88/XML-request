const url = "https://jsonplaceholder.typicode.com/todos";
const syn = true;
const method = "GET";
const request = new XMLHttpRequest();
request.open(method, url, syn);
request.onload = () => {
    const data = JSON.parse(request.response);
    console.log(data);
    data.forEach (el => {
        if (el.id <= 5) {
            let ajax = document.querySelector('table');
            ajax.innerHTML += `
                <tr>
                    <td>${el.id}</td>
                    <td>${el.userId}</td>
                    <td>${el.title}</td>
                    <td>${el.completed}</td>
                </tr>
            `
        }
    })
    console.log(data);
}
request.send();