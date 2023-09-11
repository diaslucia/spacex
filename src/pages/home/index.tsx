import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        ADVANCED ROCKETS <br /> AND SPACECRAFTS
      </h1>
      <a className={styles.link}>Learn more _</a>
    </div>
  );
};

export default Home;
