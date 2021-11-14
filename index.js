import FetchWrapper from "./fetch-wrapper.js";

const api = new FetchWrapper('https://jsonplaceholder.typicode.com/');

 const output = document.querySelector("#user-rows");


document.addEventListener("DOMContentLoaded", () => {
	api.get("users").then(data =>{
		 //output.innerHTML = '';
		data.forEach(user => {
			console.log(user.name);
			output.insertAdjacentHTML("beforeend",`<td>${user.name.value}</td>`)
		})
		//table.textContent = data;
	})
})