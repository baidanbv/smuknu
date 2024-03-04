
export interface Review {
  _id: string;
  name: string;
  byline: string;
  description: string;
  image: string;
  created: Date;
}

export interface PagePreviewData {
  bgSection: string;
  contentBlockBgColor: string;
  contentTitle: string;
  contentSubtitle: string[];
  titleColor: string;
  contentColor: string;

  contentWidth?: string;
  btnTitle?: string;
}

