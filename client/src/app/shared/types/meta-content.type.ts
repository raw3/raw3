type TwitterCard = 'summary' | 'summary_large_image';

export interface MetaContent {
  title: string;
  description: string;
  twitterCard: TwitterCard;
  image?: ImageMetaContent;
}

export interface ImageMetaContent {
  url: string;
  alt: string;
  type: string;
  width: string;
  height: string;
}
