import FetchWrapper from "./fetch-wrapper.js";

const api = new FetchWrapper('https://jsonplaceholder.typicode.com/');

const output = document.querySelector("#user-table");
const postsOutput= document.querySelector("#user-data");
//let userID = [];

document.addEventListener("DOMContentLoaded", () => {
	api.get("users").then(data =>{
		data.forEach(user => {
			//userID = user.id;

			try{

        		output.insertAdjacentHTML("beforeend",`<td class="user-data"> <button onclick="openMenu()">${user.name}</button></td>`)
    			api.get("posts").then(data => {
					data.forEach(post => {
						try{
							if(user.id == post.userId)
							{
        						postsOutput.insertAdjacentHTML("beforeend",`<div class="card"> <li>${post.title}</li></div>`)
							}
						}
						catch(error){
       			 			console.error(error)
    					}
					})
			
				})
    		}
    		catch(error){
       			 console.error(error)
    		}
    		
		//table.textContent = data;
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