function add_task(){
    const my_task = document.getElementById("task_box").value;
    console.log(my_task);
    const list_element = document.createElement("li");
    list_element.textContent = my_task;
    const remove_button = document.createElement("button");
    remove_button.textContent = "Remove";
    remove_button.addEventListener("click", function() {
        list_element.remove();
    });
    list_element.appendChild(remove_button);
    document.getElementById("todo").appendChild(list_element);
}
document.getElementById("addbutton").addEventListener("click",add_task)