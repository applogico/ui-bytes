import type React from 'react'
import Test, {
  attributes as testAttr,
} from './test.mdx'

interface Posts {
  title: string
  slug: string
  content: React.ElementType
}

export const posts: Array<Posts> = [
  {
    slug: testAttr.slug,
    title: testAttr.title,
    content: Test,
  },
]
