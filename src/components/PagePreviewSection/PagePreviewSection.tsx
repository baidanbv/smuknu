import { PagePreviewData } from '../../interfaces/ComponentsInterfaces';
import Button from '../Button/Button';

import styles from './PagePreviewSection.module.scss';

const PagePreviewSection = ( data : PagePreviewData) => {
  return (
    <section className={styles.PagePreviewSection} data-testid="PagePreviewSection" style={{ background: `url(../../${data.bgSection}) no-repeat center / cover` }}>
      <div className={`wrapper ${styles.contentBlock}`} style={{ backgroundColor: data.contentBlockBgColor }}>
        <h1 className={styles.contentTitle} style={{ color: data.titleColor }}>
          {data.contentTitle}
        </h1>
        {data.contentSubtitle.map((subtitle, index) => (
          <p key={index} className={styles.contentSubtitle} style={{ color: data.contentColor }}>
            {subtitle}
          </p>
        ))}
        {data.btnTitle && (
          <a href="#featuredProducts" className={styles.moveToFeatured}>
            <Button btnTitle={data.btnTitle} />
          </a>
        )}
      </div>
    </section>
  );
};

export default PagePreviewSection;
