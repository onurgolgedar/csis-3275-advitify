import Link from "next/link";
import styles from "../Admin.module.css";
import { getTestCandidateData } from "../../../api/fetchSample/testData";

export default async function CandidateDisplay() {
  const data = await getTestCandidateData();
  const { data: candidates } = await data.json();

  return (
    <tbody>
      {candidates.length !== 0 ? (
        candidates.map((candidate, index) => {
          return (
            <tr key={index}>
              <td className={styles.tableCell}>{candidate.id}</td>
              <td className={styles.tableCell}>{candidate.fName}</td>
              <td className={styles.tableCell}>{candidate.lName}</td>
              <td className={styles.tableCell}>{candidate.email}</td>
              <td className={styles.tableCell}>{candidate.phone}</td>
              <td className={styles.tableCell}>
                <Link className={styles.candidateDetail} href="#">
                  Detail
                </Link>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td className={styles.tableCell}></td>
          <td className={styles.tableCell}></td>
          <td className={styles.tableCell}></td>
          <td className={styles.tableCell}></td>
          <td className={styles.tableCell}></td>
          <td className={styles.tableCell}></td>
        </tr>
      )}
    </tbody>
  );
}
