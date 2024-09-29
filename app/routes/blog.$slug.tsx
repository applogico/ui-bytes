import {
  Await,
  useParams,
} from '@remix-run/react'
import React, { lazy, Suspense } from 'react'
import Test from '../posts/test.mdx'
export default function Post() {
  const { slug } = useParams()
  const Component = lazy(
    () => import(`../posts/${slug}.mdx`),
  )

  return (
    <Await resolve={Component}>
      <Suspense fallback="loading...">
        <div className="flex flex-col items-center">
          <div className="prose dark:prose-invert">
            <Component />
          </div>
        </div>
      </Suspense>
    </Await>
  )
}
export function ErrorBoundary() {
  return <h1>Unknown Error</h1>
}
