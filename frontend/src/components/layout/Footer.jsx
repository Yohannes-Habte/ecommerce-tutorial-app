
import { footerSections } from "../../data/staticData";
import { Link } from "react-router-dom";
import { footer } from "../../styles/uiConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`${footer.container}`} aria-label="Footer Section">
      <div className={`${footer.sectionsContainer}`}>
        {footerSections.map((section) => (
          <section key={section.title} className={`${footer.section}`}>
            <h3 className={`${footer.heading}`}>{section.title}</h3>
            {section.links.map((link) => (
              <Link to={link.to} key={link.label} className={`${footer.link}`}>
                {link.label}
              </Link>
            ))}
          </section>
        ))}
      </div>

      <hr className="my-6 border-t border-gray-700 dark:border-gray-600" />

      <p className={`${footer.copyRight}`}>© {currentYear} LisaConsult. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
