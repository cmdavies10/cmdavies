$(function() {
    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $("#add-burger").on("click", function(event) {
        console.log("add working");
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("new burger added");
            location.reload();
        });
    });



});