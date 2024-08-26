import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({
  children,
  onClick,
  className,
  viewVariant = "default",
}) => {
  return (
    <button
      className={classNames(styles.root, className, {
        [styles.default]: viewVariant === "default",
        [styles.big]: viewVariant === "big",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
