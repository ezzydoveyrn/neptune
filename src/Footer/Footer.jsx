import Styles from "./Footer.module.css"

function Footer(){
  return (
    <footer className={Styles.footer}>
      <div className={Styles.side1}>
        &copy; {new Date().getFullYear()} | All rights reserved
      </div>
      <div className={Styles.socialMediaIcons}>
        follow Developer
        <div className="links">
          <a href="https://facebook.com/ezzydoveyrn" target="_blank">
            Facebook
          </a>
          <a href="https://instagram.com/ezzydoveyrn" target="_blank">
            instagram
          </a>
          <a href="https://youtube.com/ezzydoveyrn" target="_blank">
            youtube
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;