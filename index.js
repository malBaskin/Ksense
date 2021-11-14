import FetchWrapper from "./fetch-wrapper.js";

const api = new FetchWrapper('https://jsonplaceholder.typicode.com/');

const output = document.querySelector("#user-table");


document.addEventListener("DOMContentLoaded", () => {
	api.get("users").then(data =>{
		 //output.innerHTML = '';
		data.forEach(user => {
			console.log(user.name);
			
			try{

        		output.insertAdjacentHTML("beforeend",`<td> <button onclick="openMenu()">${user.name}</button></td>`)
    		}
    		catch(error){
       			 console.error(error)
    		}
			
		})
		//table.textContent = data;
	})
})