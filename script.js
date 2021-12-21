function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("flex");
}

tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        "primary-color": "#1B6D80",
      },
      boxShadow: {
        "3xl": "2px 2px 10px 2px rgba(0, 0, 0, 0.3)",
      },
    },
  },
};
