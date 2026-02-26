import React from "react";

const AwardsCard = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.left}>
        <p style={styles.title}>AWARDS NIGHT</p>
        <p style={styles.date}>
          <span style={styles.dateNumber}>
            3<sup style={styles.sup}>rd</sup>
          </span>{" "}
          <span style={styles.month}>OCTOBER</span> <br />
          <span style={styles.year}>2025</span>
        </p>
      </div>
      <div style={styles.right}>
        <p style={styles.venueLine}>
          <span style={styles.pin}>📍</span>
          <strong>Venue</strong>
        </p>
        <p style={styles.address}>
          <strong>1 Great George Street</strong>,<br />
          London, SW1P 3AA
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    width: "fit-content",
    fontFamily: "'Segoe UI', sans-serif",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "0px",
    overflow: "hidden",
    margin: "50px auto",
  },
  left: {
    backgroundColor: "#fff",
    padding: "20px 30px",
    clipPath: "polygon(0 0, 92% 0, 100% 100%, 0% 100%)",
    textAlign: "left",
  },
  title: {
    fontSize: "16px",
    color: "#000",
    fontWeight: "400",
    marginBottom: "8px",
  },
  date: {
    margin: 0,
    lineHeight: 1.2,
    color: "#14006D",
    fontWeight: 700,
    fontSize: "28px",
  },
  dateNumber: {
    fontSize: "34px",
  },
  sup: {
    fontSize: "14px",
    verticalAlign: "super",
  },
  month: {
    fontSize: "26px",
    color: "#000",
    fontWeight: "600",
  },
  year: {
    fontSize: "28px",
    color: "#14006D",
    fontWeight: "700",
  },
  right: {
    backgroundColor: "#f4f4f4",
    padding: "20px 24px",
    fontSize: "14px",
    lineHeight: 1.6,
    minWidth: "220px",
    color: "#333",
  },
  venueLine: {
    fontWeight: "600",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    marginBottom: "6px",
  },
  pin: {
    color: "red",
    marginRight: "6px",
    fontSize: "16px",
  },
  address: {
    margin: 0,
  },
};

export default AwardsCard;
