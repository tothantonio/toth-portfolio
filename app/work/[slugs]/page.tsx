import {notFound} from "next/navigation"
import {CustomMdx} from  'app/components/mdx'
import {getWorkPosts} from 'app/work/Utils'
import {baseUrl} from 'app/sitemap'

export async function generateStaticParams() {
    let posts = getWorkPosts()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

export function generateMetadata({params}) {
    let post = getWorkPosts().find((post) => post.slug === params.slug)
    if (!post) {
        return
    }

    let {
        title,
        publishedAt: publishedTime,
        summary: description,
        image
    } = post.metadata
    let ogImage = image
        ? image
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${baseUrl}/work/${post.slug}`,
            images: [
                {
                    url: ogImage
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage]
        }
    }
}

export default function Work({ params }) {
    let post = getWorkPosts().find((post) => post.slug === params.slug)
  
    if (!post) {
      notFound()
    }
  
    return (
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'My Portfolio',
              },
            }),
          }}
        />
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        </div>
        <article className="prose">
          <CustomMdx source={post.content} />
        </article>
      </section>
    )
  }