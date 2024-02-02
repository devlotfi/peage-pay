import styles from './web-shared.module.css';

/* eslint-disable-next-line */
export interface WebSharedProps {}

export function WebShared(props: WebSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebShared!</h1>
    </div>
  );
}

export default WebShared;
