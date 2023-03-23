const form = document.getElementById("form");

form.onsubmit = submitForm;

function submitForm(event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  if (firstName == "") {
    const errorMsg = document.getElementById("firstNameErrorMsg");
    errorMsg.style.display = "block";
    return;
  }
  if (lastName == "") {
    const errorMsg = document.getElementById("lastNameErrorMsg");
    errorMsg.style.display = "block";
    return;
  }
  if (email == "") {
    const errorMsg = document.getElementById("emailErrorMsg");
    errorMsg.style.display = "block";
    return;
  }

  fetch("http://localhost:5000/api/user", {
    method: "POST",
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      res.json().then((data) => console.log(data));
    })
    .catch(handleError);
}

function handleResponse(res) {
  res.json().then((data) => console.log(data));
}

function handleError(err) {
  console.log(err);
}

// function sayHi(name, email) {
//   console.log("Hii " + name);
// }

// const sayHi1 = (name, email) => {
//   console.log("Hii " + name);
// };
