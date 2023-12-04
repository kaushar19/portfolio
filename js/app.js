 // scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
 

function clear_Button() {
  document.getElementById("txtName").value = "";
  document.getElementById("txtNumber").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtMessage").value = "";
}
// // Googlesheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxMdeqEGEW23Q-r-WRReud5ocFaquoPUsr55sqbDf4McSvWGPxszNWo7dL5OgLYNXtqoQ/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
 