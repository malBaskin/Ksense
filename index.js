import FetchWrapper from "./fetch-wrapper.js";

const api = new FetchWrapper('https://jsonplaceholder.typicode.com/');

const output = document.querySelector("#user-table");
const postsOutput= document.querySelector("#popup-list");


document.addEventListener("DOMContentLoaded", () => {
	api.get("users").then(data =>{
		 //output.innerHTML = '';
		data.forEach(user => {
			console.log(user.name);
			
			try{

        		output.insertAdjacentHTML("beforeend",`<td class="user-data"> <button onclick="openMenu()">${user.name}</button></td>`)
    		}
    		catch(error){
       			 console.error(error)
    		}
			
		})
		//table.textContent = data;
	})
})


function getPosts(){
 	api.get("posts").then(data =>{
 		data.forEach(posts => {
 			try{

        		postsOutput.insertAdjacentHTML("beforeend",`<li><div class="card">[${posts.category}] ${posts.title}</div></li>`)
    		}
    		catch(error){
       			 console.error(error)
    		}
 		})
 	})
 }