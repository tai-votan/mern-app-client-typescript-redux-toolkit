import Image from 'next/image';
import NextLink from '../next-link';
import styles from './index.module.css';

interface TrendingBlogProps {
  avatar: string;
  userName: string;
  name: string;
}

export default function TrendingBlog(props: TrendingBlogProps) {
  const { avatar, userName, name } = props;
  return (
    <div className="flex items-start py-3 space-x-2">
      <span className="text-xl font-semibold opacity-75 text-gray-500">01</span>
      <NextLink
        title={userName}
        href={`@${userName}`}
        className="text-sm font-medium"
      >
        <Image
          alt={name}
          width={40}
          height={40}
          src={avatar}
          className="rounded-full"
        />
      </NextLink>
      <div className="flex flex-col flex-1 truncate">
        <h4 className="font-medium leading-snug tracking-tight">
          <NextLink title={name} href={`@${userName}`}>
            {name}
          </NextLink>
        </h4>
        <NextLink
          title={name}
          href={`@${userName}`}
          className="text-sm block text-gray-500"
        >
          sayedalesawy.hashnode.dev
        </NextLink>
      </div>
      <button className={styles.follow} data-title="Follow blog">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 384 512">
          <path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
        </svg>
      </button>
    </div>
  );
}
