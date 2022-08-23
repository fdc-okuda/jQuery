$(document).ready(function(){
    $("#btn-add-todo").on("click", function(){
        let todo_string = $("#text-todo-item").val();
        // - validating
        if (todo_string.length == 0) {
            return alert("please enter something!!!");
        }
        // - copy item
        let todo_clone = $('.todo-master').clone();
        // - remove master class
        todo_clone.removeClass('todo-master');
        // - give custom event
        todo_clone.find(".todo-item-check").on("change", function(){
            // returns true or false
            let todo_clone_checked = $(this).is(':checked');
            let todo_clone_style = "";
            if (todo_clone_checked) {
                todo_clone_style = "line-through";
            } else {
                todo_clone_style = "none";
            }
            todo_clone.find(".todo-item-label").css({
                "text-decoration": todo_clone_style
            })
        })
        // - give custom event
        todo_clone.find(".todo-item-delete").on("click", function(){
            todo_clone.remove();
        })
        // - find specific class inside the cloned item and replace the content
        todo_clone.find(".todo-item-label").html(todo_string);
        
        // - append
        $("#todo-container").append(todo_clone);
        $("#text-todo-item").val("");
    });
});