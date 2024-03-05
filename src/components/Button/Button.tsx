
import styles from './Button.module.scss';

interface ButtonProps { 
  btnTitle: string;

}

const Button = ({ btnTitle }: ButtonProps) => {
  return (
    <button className={styles.Button}>
      {btnTitle}
    </button>
  );
};

export default Button;
