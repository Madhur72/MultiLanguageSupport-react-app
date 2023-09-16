// components/Navbar.js
import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav>
      <div>
        <a href="/">{t("home")}</a>
        <a href="/about">{t("about")}</a>
        <a href="/contact">{t("contact")}</a>
      </div>
      <div>
        <select onChange={changeLanguage} value={i18n.language}>
          <option value="en">English</option>
          <option value="Hi">Hindi</option>
          <option value="es">Español</option>
          <option value="fr">French</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
