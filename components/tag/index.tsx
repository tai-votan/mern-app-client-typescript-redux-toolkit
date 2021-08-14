import NextLink from '../next-link';
import { toSlug } from '@/utils/utils';

interface TagsProps {
  tags: string;
}

export default function Tags({ tags = '' }: TagsProps) {
  return (
    <div className="space-y-2">
      {tags.split(',').map((tag) => (
        <NextLink
          key={tag}
          title={tag}
          href={`/tags/${toSlug(tag)}`}
          className="px-2 pt-1 pb-2 text-gray-800 text-sm bg-gray-200 rounded-md mr-2"
        >
          {`#${tag}`}
        </NextLink>
      ))}
    </div>
  );
}
