import styles from "../Admin.module.css";
import { Suspense } from "react";
import NotificationDisplay from "./NotificationDisplay";
import CandidateDisplay from "./CandidateDisplay";

export default async function AdminMain() {
  return (
    <div className={styles.content}>
      <section>
        <h3>Notification</h3>
        <div className={styles.section}>
          <Suspense fallback={<p>loading...</p>}>
            <NotificationDisplay />
          </Suspense>
        </div>
      </section>
      <section>
        <h3>Pending Candidate</h3>
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
              <CandidateDisplay />
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
