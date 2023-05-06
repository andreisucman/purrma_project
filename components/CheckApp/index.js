import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import app1 from "../../public/assets/app1.webp";
import app2 from "../../public/assets/app2.webp";
import styles from "./CheckApp.module.scss";

const CheckApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle
          icon={"icon icon__rocket icon_m"}
          title={"Check our app"}
          id="app"
        />
        <div className={styles.content}>
          <Image
            src={app1}
            height={400}
            alt="purrma token"
            className={styles.image}
          />
          <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "https://purrma.com")}
          >
            <div className="icon icon__web" />
            Web
          </button>
            <button className={styles.button} disabled={true}>
              <div className="icon icon__apple icon_m" />
              iOS (soon)
            </button>
            <button className={styles.button} disabled={true}>
              <div className="icon icon__android icon_m" />
              Android (soon)
            </button>
          </div>
          <Image
            src={app2}
            height={400}
            alt="purrma token"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckApp;
