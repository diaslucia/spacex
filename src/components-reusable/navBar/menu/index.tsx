import styles from "./menu.module.scss";
import arrow from "/assets/images/arrow.png";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Menu = ({
  name,
  picture,
}: {
  name: string | undefined;
  picture: string | undefined;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { logout } = useAuth0();
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <div className={styles.container} onClick={() => setIsOpen(!isOpen)}>
        <img src={picture} alt={name} className={styles.img} />
        <p className={styles.name}>{name}</p>
        <img
          src={arrow}
          alt="arrow"
          className={
            isOpen ? `${styles.arrow}` : `${styles.arrow} ${styles.arrowDown}`
          }
        />
      </div>

      <div
        className={
          isOpen
            ? `${styles.dropdown}`
            : `${styles.dropdown} ${styles.dropdownClosed}`
        }
      >
        <p
          className={styles.dropdownItem}
          onClick={() => {
            navigate("/profile"), setIsOpen(!isOpen);
          }}
        >
          Profile
        </p>
        <p
          className={styles.dropdownItem}
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log out
        </p>
      </div>
    </section>
  );
};

export default Menu;
