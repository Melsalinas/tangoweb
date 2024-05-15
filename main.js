document.addEventListener("DOMContentLoaded", () => {
  const classButtons = document.querySelectorAll(".class-button");
  const inscribirmeButton = document.getElementById("inscribirme-button");

  let selectedPack = "";

  classButtons.forEach((button) => {
    button.addEventListener("click", () => {
      classButtons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      selectedPack = button.textContent;
    });
  });

  // Enviar datos del formulario cuando se clickea el botón "Inscribirme"
  inscribirmeButton.addEventListener("click", () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const role = document.getElementById("role").value;
    const cardType = document.getElementById("cardType").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const card = document.getElementById("card").value;
    const date = document.getElementById("date").value;
    const code = document.getElementById("code").value;
    const fullName = document.getElementById("fullName").value;
    const comment = document.getElementById("comment").value;
    const horario = document.querySelector('input[name="horario"]:checked')
      .nextSibling.textContent;

    const data = {
      firstName,
      lastName,
      age,
      email,
      phoneNumber,
      role,
      cardType,
      cardNumber,
      card,
      date,
      code,
      fullName,
      comment,
      horario,
      selectedPack,
    };

    fetch("https://6644ca70b8925626f88ff566.mockapi.io/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Exito:", data);
        alert("Inscripción exitosa");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al enviar la inscripción");
      });
  });
});
