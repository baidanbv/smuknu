import bgSection from '../../assets/img/headers/front.jpg';

import PagePreviewSection from '../../components/PagePreviewSection/PagePreviewSection';
import Reviews from '../../components/Reviews/Reviews';
import FeaturedBeauty from '../../components/FeaturedProducts/FeaturedProducts';
import BeMemberComponent from '../../components/BeMemberComponent/BeMemberComponent';
import { PagePreviewData } from '../../interfaces/ComponentsInterfaces';

const Home = () => {
  const data: PagePreviewData = {
    bgSection: bgSection,
    contentBlockBgColor: '#F7F0F2',
    contentTitle: 'SKØNHED FOR ALLE',
    contentSubtitle: ['Alt hvad du behøver... SMUK NU'],
    titleColor: '#000',
    contentColor: '#000',
    btnTitle: 'Se udvalgte produkter'
  };

  return (
    <>
      <PagePreviewSection {...data} />
      <FeaturedBeauty  />
      <Reviews />
      <BeMemberComponent />
    </>
  );
};

export default Home;
