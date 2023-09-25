$(document).ready(function () {
  $("button").click(function () {
    $.get("https://reqres.in/api/users?page=1", (response, status) => {
      if (status == "success") {
        if (response.data.length > 0) {
          $("#thd").append(`<tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Photo</th>
      </tr>`);

          response.data.map((e) => {
            $("#tbdy").append(
              `<tr> 
              <td>${e.id}</td>
              <td> ${e.first_name} ${e.last_name}</td>
              <td> ${e.email}</td> 
              <td> <img src = "${e.avatar}"></td>
              </tr> `
            );
          });
        }
      } else {
        // $('#apiFailuer')
        console.log("Error loading data");
      }
    });
  });
});
