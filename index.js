import FetchWrapper from "./fetch-wrapper.js";

const api = new FetchWrapper('https://jsonplaceholder.typicode.com/');

const output = document.querySelector("#user-table");
const postsOutput= document.querySelector("#posts-list");
let userID = 0;

document.addEventListener("DOMContentLoaded", () => {
	api.get("users").then(data =>{
		data.forEach(user => {
			userID = user.id;
			//console.log(userID);
			try{

        		output.insertAdjacentHTML("beforeend",`<td class="user-data"> <button onclick="openMenu()">${user.name}</button></td>`)
    		}
    		catch(error){
       			 console.error(error)
    		}
			
		})
		//table.textContent = data;
	})
	api.get("posts").then(data => {
		data.forEach(post => {
			if(post.id == userID)
			try{

        		postsOutput.insertAdjacentHTML("beforeend",`<td class="card"> ${post.title}</td>`)
    		}
    		catch(error){
       			 console.error(error)
    		}
		})
	})
})


function getPosts(){
 	api.get("posts").then(data =>{
		data.forEach(post => {
			let userID = user.id;
			console.log(userID);
		try{


			postsOutput.insertAdjacentHTML("beforeend",`<li><div class="card">[${posts.category}] ${posts.title}</div></li>`)
		}
		catch(error){
		 		console.error(error)
		}

		})
	})
 }