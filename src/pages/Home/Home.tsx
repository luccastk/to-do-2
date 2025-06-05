import { PageTitle } from "../../components/Page";
import { CardStatus } from "../../components/Tasks";
import CardCompleted from "../../components/Tasks/CardCompleted/CardCompleted";
import CardTask from "../../components/Tasks/CardTask";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <PageTitle title={"Welcome back, Luccas 👋"} />
      <div className={styles.main}>
        <CardTask />
        <div className={styles.tasks}>
          <CardStatus />
          <CardCompleted />
        </div>
      </div>
    </div>
  );
};

export default Home;
