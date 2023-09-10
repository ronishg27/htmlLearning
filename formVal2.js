function resetForm(e) {
  e.preventDefault();
  document.querySelector("#myForm").reset();
}

function submit(e) {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let address = document.querySelector("#address").value;

  let genderInput = document.querySelector('input[name="gender"]:checked');
  let gender = genderInput ? genderInput.value : "No gender selected";

  let course = document.querySelector("#courseOption");
  let selectedIndex = course.selectedIndex;
  let selectedCourseInput = course.options[selectedIndex].value;
  let selectedCourse =
    selectedCourseInput === "Choose..."
      ? "No course selected"
      : selectedCourseInput;

  // let cin = document.querySelector("#courseOption");
  // let ci = cin.options[cin.selectedIndex].text; //works well
  //reading terms value
  const termsArray = [
    "I will not use my mobile phone during the class.",
    "I will do my assignments regularly.",
  ];
  let terms = document.querySelectorAll('input[name="terms"]');
  let selectedTermsValues = [];
  terms.forEach(function (term) {
    if (term.checked) selectedTermsValues.push(term.value);
  });

  document.querySelector("#formData").innerHTML = "Name: " + name + "<br>";
  document.querySelector("#formData").innerHTML += "Email: " + email + "<br>";
  document.querySelector("#formData").innerHTML +=
    "Address: " + address + "<br>";
  document.querySelector("#formData").innerHTML += "Gender: " + gender + "<br>";
  document.querySelector("#formData").innerHTML +=
    "Selected Course: " + selectedCourse + "<br>";

  if (!selectedTermsValues.length) {
    document.querySelector("#formData").innerHTML += "No terms accepted<br>";
  } else {
    document.querySelector("#formData").innerHTML += "Terms Accepted:";
    selectedTermsValues.forEach(function (i) {
      document.querySelector("#formData").innerHTML += termsArray[i] + "<br>";
    });
  }
}

window.onload = function () {
  document.querySelector("#submitBtn").addEventListener("click", submit);
};
