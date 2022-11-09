import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vouchers</title>
        <meta name="description" content="vouuchers demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
