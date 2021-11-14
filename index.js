import FetchWrapper from "./fetch-wrapper.js";

const api = new FetchWrapper('https://jsonplaceholder.typicode.com/');

 const output = document.querySelector("#user-rows");


document.addEventListener("DOMContentLoaded", () => {
	api.get("users").then(data =>{
		 //output.innerHTML = '';
		data.forEach(user => {
			console.log(user.name);
			
			try{
        		output.insertAdjacentHTML("beforeend",`<td>${user.name}</td>`)
    		}
    		catch(error){
       			 console.error(error)
    		}
			
		})
		//table.textContent = data;
	})
})