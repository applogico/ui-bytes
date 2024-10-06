import { Link, NavLink } from '@remix-run/react'
import { intlFormat } from 'date-fns'
import React from 'react'

import { Badge } from '~/components/ui/badge.tsx'
import { Button } from '~/components/ui/button.tsx'
import { posts } from '~/posts'

interface Props {
  tag?: string
}

export default function PostLists({
  tag,
}: Props) {
  return posts.map(
    ({
      slug,
      title,
      published,
      preview,
      tags,
    }) => {
      if (tag && !tags?.includes(tag)) return null

      const publishedStr = intlFormat(published, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      return (
        <article
          key={slug}
          className="prose flex flex-col justify-start p-2 dark:prose-invert"
        >
          <h3 className="mb-1">{title}</h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            <time dateTime={publishedStr}>
              {publishedStr}
            </time>
            {tags &&
              tags.map((tag) => (
                <NavLink
                  key={tag}
                  to={`/blog?tag=${tag}`}
                >
                  <Badge className="text-ellipsis whitespace-nowrap">
                    {tag}
                  </Badge>
                </NavLink>
              ))}
          </div>
          <p>{preview}</p>
          <Link
            to={`/blog/${slug}`}
            className="self-end"
          >
            <Button variant="outline">
              Read full post
            </Button>
          </Link>
        </article>
      )
    },
  )
}
