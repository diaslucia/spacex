import styles from "./loaderPage.module.scss";

const LoaderPage = () => {
  return (
    <section className={styles.container}>
      <span className={styles.spinner}></span>
    </section>
  );
};

export default LoaderPage;
