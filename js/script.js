document.addEventListener("DOMContentLoaded", () => {
  // Controle de Tamanho da Fonte (Acessibilidade)
  let currentFontSize = 16;
  const root = document.documentElement;

  document.getElementById("font-inc").addEventListener("click", () => {
    if (currentFontSize < 22) {
      currentFontSize += 2;
      root.style.setProperty("--base-font-size", `${currentFontSize}px`);
    }
  });

  document.getElementById("font-dec").addEventListener("click", () => {
    if (currentFontSize > 12) {
      currentFontSize -= 2;
      root.style.setProperty("--base-font-size", `${currentFontSize}px`);
    }
  });

  document.getElementById("font-reset").addEventListener("click", () => {
    currentFontSize = 16;
    root.style.setProperty("--base-font-size", "16px");
  });

  // Alternador de Modo (Alta Fidelidade vs Wireframe)
  const btnAlta = document.getElementById("btn-alta");
  const btnWireframe = document.getElementById("btn-wireframe");

  btnWireframe.addEventListener("click", () => {
    document.body.style.filter = "grayscale(100%) contrast(120%)";
    btnWireframe.classList.add("active");
    btnAlta.classList.remove("active");
  });

  btnAlta.addEventListener("click", () => {
    document.body.style.filter = "none";
    btnAlta.classList.add("active");
    btnWireframe.classList.remove("active");
  });
});