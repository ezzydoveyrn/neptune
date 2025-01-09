import Styles from "./Body.module.css"
import LandingPage from "./assets/LandingPage/LandingPage.jsx"

function Body(){
  return(
    <main className={Styles.main}>
      <LandingPage />
    </main>
  );
}
export default Body;