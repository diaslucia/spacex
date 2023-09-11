import { useAuth0 } from "@auth0/auth0-react";
import styles from "./profile.module.scss";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? children : <Navigate to="/" replace />;
  };

  return (
    <PrivateWrapper>
      <div className={styles.container}>profile</div>
    </PrivateWrapper>
  );
};

export default Profile;
