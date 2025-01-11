import documentImage from "./documents.png"
import securityImage from "./security.webp"
import Styles from "./Documentary.module.css"
function Documentary(){
  return(
    <div className={Styles.documentary}>
      <img src={documentImage} alt="documents" />
      <img src={securityImage} alt="documents" />
    </div>
  );
}

export default Documentary;