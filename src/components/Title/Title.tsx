import styles from './Title.module.scss';

export enum TitlePartPosition { 
  First = 'first',
  Last = 'last'

}

interface TitleProps {
  partOne: string;
  partTwo: string;
  partPosition: TitlePartPosition;
 }

const Title = ({ partOne, partTwo, partPosition }: TitleProps) => {
  return (
    <h2 className={styles.Title} data-testid="Title">
      <span className={`${partPosition === TitlePartPosition.First ? styles.first : ''}`}>{partOne}</span>
      <span className={`${partPosition === TitlePartPosition.Last ? styles.last : ''}`}>{partTwo}</span>
    </h2>
  );
};

export default Title;
