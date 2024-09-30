import { useSearchParams } from '@remix-run/react'
import React from 'react'
import PostLists from '~/components/posts-list.tsx'

export default function Index() {
  const [searchParams] = useSearchParams()

  return (
    <PostLists
      tag={searchParams.get('tag') ?? undefined}
    />
  )
}
