import PagePreviewSection from '../../components/PagePreviewSection/PagePreviewSection';
import BeMemberComponent from '../../components/BeMemberComponent/BeMemberComponent';
import bgSection from '../../assets/img/headers/abouthealth.jpg';
import Accordeon from '../../components/Accordeon/Accordeon';
import { PagePreviewData } from '../../interfaces/ComponentsInterfaces';
const Health = () => {
  const data: PagePreviewData = {
    bgSection: bgSection,
    contentBlockBgColor: '#FA96AA',
    contentTitle: 'SPØRG OM SUNDHED',
    contentSubtitle: ['Herunder har vi samlet spørgsmål og svar om sundhed.', 'Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion'],
    titleColor: '#fff',
    contentColor: '#fff'
  };

  return (
    <>
      <PagePreviewSection {...data} />
      <Accordeon />
      <BeMemberComponent />
    </>
  );
};

export default Health;
