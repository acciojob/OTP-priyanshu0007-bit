const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {
  code.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");

    if (e.target.value !== "" && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (code.value !== "") {
        code.value = "";
      }
      else if (index > 0) {
        codes[index - 1].value = "";
        codes[index - 1].focus();
      }
    }

    if (
      !/^\d$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "Tab"
    ) {
      e.preventDefault();
    }
  });
});