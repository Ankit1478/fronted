import { notFound } from "next/navigation"
import { allAuthors, allPosts } from "contentlayer/generated"
import { ChevronLeft } from "lucide-react"

import { Mdx } from "@/components/mdx-components"

import "@/styles/mdx.css"
import Image from "next/image"
import Link from "next/link"

import { cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const metadataDescriptions = {
  "5-captivating-five-minute-bedtime-stories-for-free": `Discover enchanting 5 minute bedtime stories perfect for busy nights. These free five minute bedtime stories spark imagination and create magical moments with kids.`,
  "create-magical-bedtime-stories": `Transform bedtime with AI-powered stories. Craft personalized bedtime stories in seconds. Each bedtime story becomes a magical adventure for kids and parents alike.`,
};

async function getPostFromParams(params) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}) {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    metadataBase: new URL('https://sleeptales.ai'),
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: metadataDescriptions[post.slugAsParams],
      type: "article",
      url: post.slug,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: '@sleepytalesHQ',
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound()
  }

  const authors = post.authors?.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author.trim()}`)
  )

  return (
    <article className="container relative max-w-3xl py-3 lg:py-5 min-h-[calc(100dvh_-_theme(spacing.16))]">
      <div>
        <div className="flex py-3 lg:py-5">
          <a href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            See all posts
          </a>
        </div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://x.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border transition-colors"
          priority
        />
      )}
      <Mdx code={post.body.code} storyButtonsEnabled={post.slugAsParams == '5-captivating-five-minute-bedtime-stories-for-free'} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <a href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </a>
      </div>
    </article>
  )
}
