import { Link, NavLink } from '@remix-run/react'
import { intlFormat } from 'date-fns'
import React from 'react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { posts } from '~/posts'

export default function Index() {
  return (
    <div className="mx-4">
      <h2 className="prose py-4 tracking-tight dark:prose-invert sm:py-8 sm:text-4xl">
        Recent posts
      </h2>
      <section className="flex w-full flex-wrap gap-4">
        {posts.map(
          ({
            slug,
            title,
            published,
            preview,
            tags,
          }) => {
            const publishedStr = intlFormat(
              published,
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              },
            )
            return (
              <article
                key={slug}
                className="justify-startdark:prose-invert prose flex flex-col p-2"
              >
                <h3 className="mb-1">{title}</h3>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={publishedStr}>
                    {publishedStr}
                  </time>
                  {tags &&
                    tags.map((tag) => (
                      <NavLink
                        to={`/posts?tag=${tag}`}
                      >
                        <Badge>{tag}</Badge>
                      </NavLink>
                    ))}
                </div>
                <p>{preview}</p>
                <Link
                  to={`/posts/${slug}`}
                  className="self-end"
                >
                  <Button variant="outline">
                    Read full post
                  </Button>
                </Link>
              </article>
            )
          },
        )}
      </section>
    </div>
  )
}
