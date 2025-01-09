import Styles from "./LandingPage.module.css"
import NeptuneImage from "../../../assets/lg.png"

function LandingPage(){
  return (
    <div className={Styles.landingPage}>
      <div className={Styles.side1}>
        <div className={Styles.top}>
          <div className={Styles.side1}>
            <img src={NeptuneImage} alt="Neptune_Logo" />
          </div>
          <div className={Styles.side2}>
            <div className={Styles.heading}>
              <div className={Styles.neptune}>Neptune</div>
              <div className={Styles.connect}>Connect</div>
              <div className={Styles.cyber}>Cyber</div>
            </div>
          </div>
        </div>
        <hr />
        <div className={Styles.bottom}>
          At Neptune Connect Cyber, we specialize in coding, data science, cyber
          security, software development, programming, and web development.
          Located in Nyabioto Junction, Nyamira-Kenya, we also offer computer
          science and computer packages courses to help you excel in the digital
          world.
        </div>
      </div>
      <div className={Styles.side2}>
        <div className={Styles.container}>
          <h3>How can we help you?</h3>
          <form action="index.html" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Ezekiel Ogana"/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="ezekiel********a@gmail.com"/>
            <label htmlFor="number">Phone Number</label>
            <input type="text" name="number" id="number" placeholder="0712345678" />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;