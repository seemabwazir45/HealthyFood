import styles from '../app.module.css';


const container = ({ children }) => {
  return (
    <div className={`${styles.container} mt-4 p-4`}>
      {children}
    </div>
  );
};

export default container;

 