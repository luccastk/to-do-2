import { BaseIcon } from "../../Base";
import { ButtonCreate } from "../../Buttons";
import styles from "./CardContainer.module.scss";

type CardContainerProps = {
  title: string;
  icon: React.ReactNode;
  variant?: "default" | "withButton";
  handleCreate?: () => void;
};

const CardContainer = ({
  title,
  icon,
  variant = "default",
  handleCreate,
  children,
}: React.PropsWithChildren<CardContainerProps>) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <BaseIcon>{icon}</BaseIcon>
        <span>{title}</span>
        {variant === "withButton" ? (
          <div className={styles.button}>
            <ButtonCreate
              label="Add Tasks"
              handleCreate={() => handleCreate?.()}
            />
          </div>
        ) : null}
      </div>
      <div className={styles.card__content}>{children}</div>
    </div>
  );
};

export default CardContainer;
