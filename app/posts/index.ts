import type React from 'react'
import ReactComponentComposition, {
  attributes as reactComponentComp,
} from './react-component-composition.mdx'
import UseActionState, {
  attributes as useActionStateAttr,
} from './use-action-state.mdx'

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
    published: reactComponentComp.published,
    slug: reactComponentComp.slug,
    tags: reactComponentComp.tags,
    title: reactComponentComp.title,
    preview: reactComponentComp.preview,
    content: ReactComponentComposition,
  },
  {
    published: useActionStateAttr.published,
    slug: useActionStateAttr.slug,
    tags: useActionStateAttr.tags,
    title: useActionStateAttr.title,
    preview: useActionStateAttr.preview,
    content: UseActionState,
  },
]
