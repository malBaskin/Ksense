import FetchWrapper from "./fetch-wrapper.js";

const api = new FetchWrapper('https://jsonplaceholder.typicode.com/');

const table = document.querySelector("#user-table");

document.addEventListener("onload", () => {
	api.get("users").then(data =>{
		console.log(data);
		//table.textContent = data;
	})
})