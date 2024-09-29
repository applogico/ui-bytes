import React from 'react'
import { posts } from '~/posts'

export default function Index() {
  return posts.map(({ slug, title }) => {
    return (
      <article
        key={slug}
        className="prose dark:prose-invert lg:prose-xl"
      >
        <h1>{title}</h1>
      </article>
    )
  })
}
