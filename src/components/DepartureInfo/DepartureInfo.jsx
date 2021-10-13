import STYLES from "./DepartureInfo.scss";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const DepartureInfo = ({ time, airport }) => {
  return (
    <div className={getClassName("departure-info")}>
      <p>{time}</p>
      <p className={getClassName("departure-info__airport-name")}>{airport}</p>
    </div>
  );
};

export default DepartureInfo;
