import styles from './admin-shared.module.css';

/* eslint-disable-next-line */
export interface AdminSharedProps {}

export function AdminShared(props: AdminSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AdminShared!</h1>
    </div>
  );
}

export default AdminShared;
