import styles from "./button.module.scss";

const Button = ({
  onClick,
  text,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
