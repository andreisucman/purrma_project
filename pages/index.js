import Project from "../components/Project";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Mission from "../components/Mission";
import Avatars from "../components/Avatars";
import FundUs from "../components/FundUs";
import CheckApp from "../components/CheckApp";
import Roadmap from "../components/Roadmap";
import Footer from "../components/common/Footer";
import ToTop from "../components/common/ToTop";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <Hero />
        <Mission />
        <Avatars />
        <Project />
        <Team />
        <Roadmap />
        <FundUs />
        <CheckApp />
        <ToTop elementId={"header"} />
        <Footer />
      </div>
    </div>
  );
}
