import styles from "./PageTitle.module.scss";

type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className={styles.title}>
      <span>{title}</span>
    </div>
  );
};

export default PageTitle;
