import { getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function Post({ params }: { params: { slug: string } }) {
    const {slug} = params 
    
    const post = await getPostBySlug(slug)

    if(!post) {
        notFound()
    }

    const {metadata, content} = post
    const { title, image, author, publishedAt} = metadata

  return (
   <section>
    <div>
        <Link href="/posts">
        <ArrowLeftIcon/>
        <span>back to posts</span>
        </Link>

        {image && (
            <div>
                <Image
                src={image}
                alt={title || ''}
                className='object-cover'
                fill />
            </div>
        )}
        <header>
            <h1 className='title'>{title}</h1>
            <p>
                {author} / {publishedAt}
            </p>
        </header>
        <main>
            <MDXRemote  source={content}/> 
        </main>

    </div>
   </section>
  )
}
