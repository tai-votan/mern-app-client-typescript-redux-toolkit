import { NextLink } from '@/components';
import { toSlug } from '@/utils/utils';
import { TagProps } from '@/interfaces';

export default function Tags({ tags = '' }: TagProps) {
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
