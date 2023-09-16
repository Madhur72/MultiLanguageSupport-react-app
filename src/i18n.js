import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          home: "Home",
          about: "About",
          contact: "Contact Us",
          language: "Language",
          homeContent: "This program demonstrates the usage of React with the i18next library for multi-language support. It includes a Navbar with navigation links and a language switcher that allows users to change the language of the application.",
          aboutContent: "I am a skilled Full Stack Developer with expertise in building robust and scalable web applications. My experience includes proficiency in both front-end and back-end development technologies. I am proficient in a wide range of programming languages, frameworks, and tools, allowing me to create end-to-end solutions that meet business requirements efficiently and effectively.",
          contactMessage: "Get in touch with me At: +91 8770563453/madhurdubey72@gmail.com ",
        },
      },
      es: {
        translation: {
          home: "Inicio",
          about: "Acerca de",
          contact: "Contacto",
          language: "Idioma",
          homeContent: "Este programa demuestra el uso de React con la biblioteca i18next para soporte en varios idiomas. Incluye una barra de navegación con enlaces de navegación y un selector de idioma que permite a los usuarios cambiar el idioma de la aplicación.",
          aboutContent: "Soy un desarrollador Full Stack capacitado con experiencia en la creación de aplicaciones web robustas y escalables. Mi experiencia incluye dominio de tecnologías de desarrollo front-end y back-end. Domino una amplia gama de lenguajes, marcos y herramientas de programación, lo que me permite crear soluciones de un extremo a otro que satisfacen los requisitos comerciales de manera eficiente y efectiva.",
          contactMessage: "Ponte en contacto conmigo al: +91 8770563453/madhurdubey72@gmail.com",
        },
      },
      Hi: {
        translation: {
          home: "होम",
          about: "मेरे बारे में",
          contact: "संपर्क करें",
          language: "भाषा",
          homeContent: "यह प्रोग्राम React का उपयोग i18next पुस्तकालय के साथ बहुभाषा समर्थन का प्रदर्शन करता है। इसमें एक नेविगेशन बार शामिल है जिसमें नेविगेशन लिंक्स और एक भाषा चयनकर्ता शामिल है जो उपयोगकर्ताओं को ऐप्लिकेशन की भाषा बदलने की अनुमति देता है।",
          aboutContent: "मैं एक पूर्ण स्टैक डेवलपर हूं जिसे वेब ऐप्लिकेशन के शक्तिशाली और मापनीय बनाने में अनुभव है। मेरा अनुभव फ्रंट-एंड और बैक-एंड डेवलपमेंट तकनीकों को स्वामित्व में शामिल है। मेरे पास प्रोग्रामिंग की एक विस्तार श्रेणी है, जिससे मुझे यथार्थ और प्रभावी तरीके से व्यापार आवश्यकताओं को पूरा करने के लिए एक-एक से लेकर समाधान बनाने की क्षमता है।",
          contactMessage: "मुझसे संपर्क करें: +91 8770563453/madhurdubey72@gmail.com",
        },
      },
      fr: {
        translation: {
          home: "Accueil",
          about: "À propos de moi",
          contact: "Contactez-moi",
          language: "Langue",
          homeContent: "Ce programme démontre l'utilisation de React avec la bibliothèque i18next pour prendre en charge plusieurs langues. Il comprend une barre de navigation avec des liens de navigation et un sélecteur de langue permettant aux utilisateurs de changer la langue de l'application.",
          aboutContent: "Je suis un développeur Full Stack compétent avec de l'expérience dans la création d'applications web robustes et évolutives. Mon expérience inclut la maîtrise des technologies de développement front-end et back-end. Je maîtrise un large éventail de langages, de frameworks et d'outils de programmation, ce qui me permet de créer des solutions de bout en bout qui répondent efficacement et efficacement aux besoins commerciaux.",
          contactMessage: "Contactez-moi au : +91 8770563453/madhurdubey72@gmail.com",
        },
      },
      
    },
  });

export default i18n;
