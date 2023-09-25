$(document).ready(function () {
  $("button").click(function () {
    $.post(
      "https://reqres.in/api/users",
      {
        first_name: "Name",
        last_name: "lastname",
        address: "bhaktapur, Nepal",
      },
      function (response, status) {
        if (status == "success") {
          console.log("Post Data " + response["address"]);
        } else {
          console.log("Error: " + status);
        }
      }
    );
  });
});
