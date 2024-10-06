import { useSearchParams } from '@remix-run/react'
import React from 'react'
import PostLists from '~/components/posts-list.tsx'

export default function Index() {
  const [searchParams] = useSearchParams()

  return (
    <div className="mx-4">
      <h2 className="prose py-4 capitalize tracking-tight dark:prose-invert sm:py-8 sm:text-4xl">
        {searchParams.get('tag')}
      </h2>
      <section className="flex flex-col gap-4">
        <PostLists
          tag={
            searchParams.get('tag') ?? undefined
          }
        />
      </section>
    </div>
  )
}
