import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'data',
      source: 'blog/*.md',

      schema: z.object({
        tags: z.array(z.string()),
        title: z.string(),
        createdat: z.string(),
        image: z.string().optional().nullable(),
        description: z.string(),
        date: z.date(),
        slug: z.string(),
        online: z.boolean().optional().default(false),
      })
    })
  }
})
