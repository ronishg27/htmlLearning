let userObj = {
  name: "",
};

const submit = document.querySelector("#submitButton");
submit.addEventListener("click", function () {
  let name2 = document.querySelector("#nameInput").value;
  userObj.name = name2;
  console.log(userObj);
  console.log(userObj);
});
