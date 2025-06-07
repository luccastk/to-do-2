import styles from "./PageTitle.module.scss";

type PageTitleProps = {
  title: string;
};

const PageTitle = ({
  title,
  children,
}: React.PropsWithChildren<PageTitleProps>) => {
  return (
    <div className={styles.container}>
      <span className={`ellipsis ${styles.title}`}>{title}</span>
      {children}
    </div>
  );
};

export default PageTitle;
