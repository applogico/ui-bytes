import {
  Await,
  useParams,
} from '@remix-run/react'
import React, { lazy, Suspense } from 'react'

export default function Post() {
  const { slug } = useParams()
  const Component = lazy(
    () => import(`../posts/${slug}.mdx`),
  )

  return (
    <Await resolve={Component}>
      <Suspense fallback="loading...">
        <div className="flex flex-col items-center">
          <div className="prose max-w-full p-2 dark:prose-invert md:p-4">
            <Component />
          </div>
        </div>
      </Suspense>
    </Await>
  )
}
export function ErrorBoundary() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="prose text-5xl font-bold">
          BOOM!
        </h1>
      </div>
    </div>
  )
}
