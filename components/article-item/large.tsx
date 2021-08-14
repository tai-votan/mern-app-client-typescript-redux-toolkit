import NextLink from '../next-link';
import Image from 'next/image';
import styles from './large.module.css';
import { toSlug, stripHTML } from '@/utils/utils';
import Tags from '../tag';
import { ArticleItemLargeProps } from '@/interfaces';

export default function ArticleItemLarge({
  avatar,
  name,
  userName,
  publishDate,
  slug,
  title,
  category,
  excerpt,
  tags,
  coverImage,
  likeCount,
  commentCount,
}: ArticleItemLargeProps) {
  const href = `/categories/${toSlug(category)}/${slug}`;
  return (
    <article className="p-5 space-y-4">
      <div className="flex items-center space-x-2">
        <NextLink
          title={userName}
          href={`@${userName}`}
          className="text-sm font-medium"
        >
          <Image
            src={avatar}
            width={40}
            height={40}
            alt={name}
            className="rounded-full"
          />
        </NextLink>
        <div className="flex flex-col leading-snug">
          <NextLink
            title={userName}
            href={`@${userName}`}
            className="text-sm font-medium"
          >
            {name}
          </NextLink>
          <span className="text-xs text-gray-500">{publishDate}</span>
        </div>
      </div>
      <div className="flex flex-wrap space-y-4 lg:space-y-0">
        <div className="lg:w-auto lg:flex-1 pr-0 lg:pr-5 space-y-1">
          <h2 className="text-xl font-semibold">
            <NextLink title={title} href={href}>
              {title}
            </NextLink>
          </h2>
          <h3 className="font-medium text-green-700">
            <NextLink title={category} href={`/categories/${toSlug(category)}`}>
              {category}
            </NextLink>
          </h3>
          <NextLink title={stripHTML(excerpt)} href={href} className="block">
            <p className={styles.excerpt}>{stripHTML(excerpt)}</p>
          </NextLink>
          {tags && <Tags tags={tags} />}
        </div>
        {coverImage && (
          <NextLink title={title} href={href} className={styles.coverImage}>
            <Image
              src={coverImage}
              layout="intrinsic"
              width={1200}
              height={630}
              alt={title}
              className="rounded-md"
            />
          </NextLink>
        )}
      </div>
      <div className="flex items-center space-x-8">
        <button className="flex items-center focus:outline-none space-x-2">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
            <path d="M496.656 285.683C506.583 272.809 512 256 512 235.468c-.001-37.674-32.073-72.571-72.727-72.571h-70.15c8.72-17.368 20.695-38.911 20.695-69.817C389.819 34.672 366.518 0 306.91 0c-29.995 0-41.126 37.918-46.829 67.228-3.407 17.511-6.626 34.052-16.525 43.951C219.986 134.75 184 192 162.382 203.625c-2.189.922-4.986 1.648-8.032 2.223C148.577 197.484 138.931 192 128 192H32c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h96c17.673 0 32-14.327 32-32v-8.74c32.495 0 100.687 40.747 177.455 40.726 5.505.003 37.65.03 41.013 0 59.282.014 92.255-35.887 90.335-89.793 15.127-17.727 22.539-43.337 18.225-67.105 12.456-19.526 15.126-47.07 9.628-69.405zM32 480V224h96v256H32zm424.017-203.648C472 288 472 336 450.41 347.017c13.522 22.76 1.352 53.216-15.015 61.996 8.293 52.54-18.961 70.606-57.212 70.974-3.312.03-37.247 0-40.727 0-72.929 0-134.742-40.727-177.455-40.727V235.625c37.708 0 72.305-67.939 106.183-101.818 30.545-30.545 20.363-81.454 40.727-101.817 50.909 0 50.909 35.517 50.909 61.091 0 42.189-30.545 61.09-30.545 101.817h111.999c22.73 0 40.627 20.364 40.727 40.727.099 20.363-8.001 36.375-23.984 40.727zM104 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" />
          </svg>
          {likeCount && <span className="text-base">{likeCount}</span>}
        </button>
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
            <path d="M280 272H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm96-96H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 384c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176s224 79 224 176-100.5 176-224 176z" />
          </svg>
          {commentCount && <span>{commentCount}</span>}
        </div>
        <button className="focus:outline-none">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 384 512">
            <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z" />
          </svg>
        </button>
      </div>
    </article>
  );
}
