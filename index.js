import FetchWrapper from "./fetch-wrapper.js";

const api = new FetchWrapper('https://jsonplaceholder.typicode.com/');

 const output = document.querySelector("#user-table");


document.addEventListener("DOMContentLoaded", () => {
	api.get("users").then(data =>{
		output.innerHTML ='';
		console.log(data[1].name);
		data.forEach(user => {
			output.insertAdjaacentHTML("beforeend",`<td>${user.name}</td>`)
		})
		//table.textContent = data;
	})
})