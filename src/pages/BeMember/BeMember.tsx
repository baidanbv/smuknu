import PagePreviewSection from '../../components/PagePreviewSection/PagePreviewSection';
import bgSection from '../../assets/img/headers/subscribers.jpg';
import SubscribeForm from '../../components/SubscribeForm/SubscribeForm';
import { PagePreviewData } from '../../interfaces/ComponentsInterfaces';

const BeMember = () => {
  const data: PagePreviewData = {
    bgSection: bgSection,
    contentBlockBgColor: '#fff',
    contentTitle: 'BLIV MEDLEM',
    contentSubtitle: ['Opret dig som medlem og få flere fordele og nyheder I det øjeblik vi har dem.', ' Send gerne ris eller ros med når du melder dig ind, vi er altid parate til dialog.'],
    titleColor: '#FA96AA',
    contentColor: '#000',
    contentWidth: '285px'
  };

  return (
    <>
      <PagePreviewSection {...data} />
      <SubscribeForm />
    </>
  );
};

export default BeMember;
