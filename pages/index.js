import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

import { callPrivate, callPublic, callRBAC } from "../utils/api";

export default function Home() {
  const [publicResponse, setPublicResponse] = useState(null);
  const [privateResponse, setPrivateResponse] = useState(null);
  const [RBACResponse, setRBACResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const p = await callPublic();
      setPublicResponse(p.message);

      const pr = await callPrivate();
      setPrivateResponse(pr.message);

      const rb = await callRBAC();
      setRBACResponse(rb.message);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.nav}>
          <Link href="/private">Go to private page</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.description}>
          <h1 className={styles.heading}>Homepage</h1>
          <p>Public API Response: {publicResponse}</p>
          <p>Private API Response: {privateResponse}</p>
          <p>RBAC API Response: {RBACResponse}</p>
          <a href="/api/auth/login" className="button">
            Login
          </a>
        </section>
      </main>
    </>
  );
}
