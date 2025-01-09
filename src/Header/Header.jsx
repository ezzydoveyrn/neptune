import Styles from "./header.module.css"
function Header(){
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <h1>
          <a href="index.html">Neptune Connect Cyber</a>
        </h1>
      </div>
      <div className={Styles.links}>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;