window.onload = () => {
  function setDefaultLanguage() {
    const pathname = window.location.pathname;
    const languageSelector = document.getElementById("language");
    console.log(languageSelector);

    if (pathname === "/") {
      languageSelector.options[0].setAttribute("selected", "selected");
    }
    // else if (pathname.includes("-de")) {
    //   languageSelector.options[1].setAttribute("selected", "selected");
    // } else if (pathname.includes("-ita")) {
    //   languageSelector.options[2].setAttribute("selected", "selected");
    // }
    else if (pathname.includes("-cro")) {
      languageSelector.options[1].setAttribute("selected", "selected");
    }
  }

  setDefaultLanguage();
};

function changeLanguage(selectedOption) {
  const value = selectedOption.value;

  if (value === "english") {
    window.open("../index.html", "_self");
    return;
  } else if (value === "german") {
    window.open("../index-de.html", "_self");
    return;
  } else if (value === "italian") {
    window.open("../index-ita.html", "_self");
    return;
  } else if (value === "croatian") {
    window.open("../index-cro.html", "_self");
    return;
  }
}
