import styles from "../Admin.module.css";
import { Suspense } from "react";
import ClientDisplay from "./ClientDisplay";
import Link from "next/link";
import AddClientWindow from "./AddClientWindow";

export default async function AdminClients({ param }) {
  // for switching admin action
  const { searchParams } = param;

  return (
    <div className={styles.content}>
      {searchParams.action === "add" || searchParams.action === "edit" ? (
        <section>
          <AddClientWindow param={param} />
        </section>
      ) : (
        <></>
      )}

      <section>
        <h3>Clients / Consultants </h3>
        <div className={styles.choices}>
          <Link className={styles.btn} href="/admin/clients?action=add">
            ADD
          </Link>
          <span> / </span>
          <Link className={styles.btn} href="/admin/clients?action=edit">
            EDIT
          </Link>
          <span> / </span>
          <Link className={styles.btn} href="/admin/clients?action=delete">
            DELETE
          </Link>
        </div>
        <div className={styles.section}>
          <table className={styles.candidateTable}>
            <thead>
              <tr>
                <th className={styles.tableCell}>No.</th>
                <th className={styles.tableCell}>First Name</th>
                <th className={styles.tableCell}>Last Name</th>
                <th className={styles.tableCell}>Email</th>
                <th className={styles.tableCell}>Phone</th>
                <th className={styles.tableCell}>Detail</th>
              </tr>
            </thead>
            <Suspense fallback={Loading()}>
              <ClientDisplay searchParams={searchParams} />
            </Suspense>
          </table>
        </div>
      </section>
    </div>
  );
}

function Loading() {
  return (
    <tbody>
      <tr>
        <td className={styles.tableCell}></td>
        <td className={styles.tableCell}></td>
        <td className={styles.tableCell}></td>
        <td className={styles.tableCell}></td>
        <td className={styles.tableCell}></td>
        <td className={styles.tableCell}></td>
      </tr>
    </tbody>
  );
}
