//Dinamik Olarak Element Oluşturmak

const cardBody = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");


const link = document.createElement("a");

link.id="goMyWebSite";
link.className="btn btn-dark btn-sm mt-3";
link.href="http://tuncayalbayrak.com";
link.target="_blank";
link.textContent="Kişisel Web Siteme Git";


cardBody.appendChild(link);




/*

<li class="list-group-item d-flex justify-content-between">Todo 4
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>


*/


const todo = document.createElement("li");
todo.className="list-group-item d-flex justify-content-between";
todo.textContent="Todo 5";

const todoA = document.createElement("a");
todoA.href="#";
todoA.className="delete-item";

const todoi = document.createElement("i");
todoi.className="fa fa-remove";




todoA.appendChild(todoi);
todo.appendChild(todoA);

todoList.appendChild(todo);




