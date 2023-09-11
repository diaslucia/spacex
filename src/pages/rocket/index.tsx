import styles from "./rocket.module.scss";
import { useParams } from "react-router-dom";

const Rocket = () => {
  let { id } = useParams();

  return <div className={styles.container}></div>;
};

export default Rocket;
