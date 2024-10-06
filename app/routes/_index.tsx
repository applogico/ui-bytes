import React from 'react'
import PostLists from '~/components/posts-list.tsx'

export default function Index() {
  return (
    <div className="mx-4">
      <h2 className="prose py-4 tracking-tight dark:prose-invert sm:py-8 sm:text-4xl">
        Recent posts
      </h2>
      <section className="flex flex-col gap-4">
        <PostLists />
      </section>
    </div>
  )
}
