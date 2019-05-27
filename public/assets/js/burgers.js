$(function () {

    (".eatBurger").on("click", function (event) {

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
    })







}); 