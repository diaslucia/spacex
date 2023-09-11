import { useAuth0 } from "@auth0/auth0-react";
import styles from "./profile.module.scss";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { isAuthenticated, user } = useAuth0();

  const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
    return isAuthenticated ? children : <Navigate to="/" replace />;
  };

  return (
    <PrivateWrapper>
      <div className={styles.container}>
        <div className={styles.box}>
          <img src={user?.picture} alt={user?.name} className={styles.img} />
          <div>
            <p className={styles.text}>{user?.name}</p>
            <p className={`${styles.text} ${styles.subtext}`}>{user?.email}</p>
          </div>
        </div>
      </div>
    </PrivateWrapper>
  );
};

export default Profile;
