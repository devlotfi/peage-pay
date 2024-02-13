import styles from './testing-project.module.css';

/* eslint-disable-next-line */
export interface TestingProjectProps {}

export function TestingProject(props: TestingProjectProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TestingProject!</h1>
    </div>
  );
}

export default TestingProject;
