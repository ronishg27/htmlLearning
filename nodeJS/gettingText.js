const submit = document.querySelector("#submitButton");

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  const name = document.querySelector("#nameInput").value;

  const response = await fetch("/saveData", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `nameInput=${encodeURIComponent(nameInput)}`,
  });
  if (response.ok) {
    console.log("Data saved successfully on the server.");
  } else {
    console.error("Failed to save data on the server.");
  }
});
