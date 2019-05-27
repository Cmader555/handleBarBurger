$(function () {

  $(".eatBurger").on("click", function (event) {
    console.log("you clicked the eat button!")
    event.preventDefault();
    let id = $(this).data("id");
    let newDevoured = true;

    let newBurgerDev = {
      devoured: newDevoured
    };


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerDev
    }).then(
      function () {
        console.log("change burger to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {

    console.log("you clicked the make a burger button!")
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burga").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );

  })
});


