import { useState } from "react";
import styles from "../styles/Home.module.css";

type Vouchers = {
  name?: string;
  detail?: string;
  status?: "AVAILABLE" | "UNAVAILABLE";
};

const VOUCHERS = [
  {
    name: "Test 1",
    detail: "Detail",
    status: "AVAILABLE",
  },
];

export default function Home() {
  const [vouchers, setVouchers] = useState<Vouchers[]>(VOUCHERS as Vouchers[]);

  // const getVouchers = () => {
  //   const initial = VOUCHERS
  //   for(let [key, value] in Object.entries(localStorage)){
  //     if(value === 'UNAVAILABLE'){

  //     }
  //   }
  // }

  const handleOnClick = (name?: string) => {
    const selected = VOUCHERS.find((vouchers) => vouchers.name === name);
    setVouchers((prev) => [
      ...prev,
      { name: selected?.name, detail: selected?.detail, status: "UNAVAILABLE" },
    ]);
    // localStorage.setItem(name, "UNAVAILABLE");
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Vouchers!</h1>
        <div className={styles.grid}>
          {vouchers.map((v) => {
            return (
              <div
                className={styles.card}
                onClick={() => handleOnClick(v.name)}
              >
                <h3> {v.name} </h3>
                <p> {v.detail} </p>
                <p> {v.status} </p>
              </div>
            );
          })}

          <div className={styles.card}>
            <h3> Name </h3>
            <p> detail </p>
          </div>
          <div className={styles.card}>
            <h3> Name </h3>
            <p> detail </p>
          </div>
          <div className={styles.card}>
            <h3> Name </h3>
            <p> detail </p>
          </div>
          <div className={styles.card}>
            <h3> Name </h3>
            <p> detail </p>
          </div>
          <div className={styles.card}>
            <h3> Name </h3>
            <p> detail </p>
          </div>
          <div className={styles.card}>
            <h3> Name </h3>
            <p> detail </p>
          </div>
          <div className={styles.card}>
            <h3> Name </h3>
            <p> detail </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>for my babyboo</footer>
    </div>
  );
}
