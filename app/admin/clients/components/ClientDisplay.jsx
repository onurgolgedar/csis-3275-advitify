import Link from "next/link";
import styles from "../Admin.module.css";
import { useClient } from "../../../components/useClient"

export default function ClientDisplay({ searchParams }) {
  const clients = useClient() || [];


  return (
    <tbody>
      {clients.length !== 0 ? (
        clients.map((client, index) => {
          return (
            <tr key={index}>
              <td className={styles.tableCell}>{client.id}</td>
              <td className={styles.tableCell}>{client.fName}</td>
              <td className={styles.tableCell}>{client.lName}</td>
              <td className={styles.tableCell}>{client.email}</td>
              <td className={styles.tableCell}>{client.phone}</td>
              <td className={styles.tableCell}>
                {searchParams.action === undefined ||
                  searchParams.action === "add" ? (
                  <Link className={styles.detail} href="#">
                    Detail
                  </Link>
                ) : searchParams.action === "edit" ? (
                  <Link
                    className={styles.btn}
                    href={`/admin/clients?action=edit&fName=${client.fName}&lName=${client.lName}&email=${client.email}&phone=${client.phone}`}
                  >
                    EDIT
                  </Link>
                ) : (
                  <Link className={styles.btn} href="#">
                    DELETE
                  </Link>
                )}
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
