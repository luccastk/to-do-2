import styles from "./DonutChart.module.scss";

type DonutChartProps = {
  value: number;
};

const DonutChart = ({ value }: DonutChartProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.donut__corner}
        style={{
          background: `conic-gradient(#4ade80 0% ${value}%, transparent ${value}% 100%)`,
        }}
      ></div>
      <div className={styles.donut__center}></div>
      <div className={styles.donut__label}>{value}%</div>
    </div>
  );
};

export default DonutChart;
