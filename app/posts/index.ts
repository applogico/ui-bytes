import type React from 'react'
import Test, {
  attributes as testAttr,
} from './test.mdx'

interface Posts {
  published: number
  slug: string
  tags?: string[]
  title: string
  preview: string
  content: React.ElementType
}

export const posts: Array<Posts> = [
  {
    published: testAttr.published,
    slug: testAttr.slug,
    tags: testAttr.tags,
    title: testAttr.title,
    preview: testAttr.preview,
    content: Test,
  },
]
