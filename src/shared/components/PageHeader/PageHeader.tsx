import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className={`t-title t-ellipsis ${styles.container}`}>{title}</div>
  );
};

export default PageHeader;
