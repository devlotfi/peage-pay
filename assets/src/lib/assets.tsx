import styles from './assets.module.css';

/* eslint-disable-next-line */
export interface AssetsProps {}

export function Assets(props: AssetsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Assets!</h1>
    </div>
  );
}

export default Assets;
