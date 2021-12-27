export interface ArticleItemSmallProps {
  _id?: string;
  avatar: string;
  name: string;
  userName: string;
  slug: string;
  title: string;
  category: string;
  likeCount?: number;
  commentCount?: number;
}

export interface ArticleItemLargeProps extends ArticleItemSmallProps {
  publishDate: string;
  excerpt?: string;
  tags?: string;
  coverImage?: string;
  dateUpdated?: string;
  brief?: string;
}
