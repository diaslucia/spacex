import { useQuery } from "@apollo/client";
import styles from "./rocket.module.scss";
import { useParams } from "react-router-dom";
import { RocketType } from "@/utils/typescript/types";
import { GET_ROCKET } from "@/hooks/apollo";
import LoaderPage from "@/components-reusable/loaderPage";

const Rocket = () => {
  const { id } = useParams();
  const { data, loading } = useQuery<RocketType>(GET_ROCKET, {
    variables: { rocketId: id },
  });

  console.log(data?.rocket);

  if (loading) return <LoaderPage />;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data?.rocket.name}</h1>
      <p className={styles.subtitle}>{data?.rocket.description}</p>
    </div>
  );
};

export default Rocket;
