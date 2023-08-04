import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PostMolecule } from 'src/types';
import styles from './Post.module.sass'
import { getDisplayDate } from 'src/utils/time';

interface Props {
  data: PostMolecule
}

export const Post: React.FC<Props> = ({data}) => {

  const {
    timestamp,
    id,
    image,
    title,
    tags,
    description
  } = data

  const postData = getDisplayDate(timestamp)

  return (
    <Link 
      href={`/blog/${id}`}
      className={styles.component}
      aria-label="blog post"
      >
      <Image 
        src={image}
        alt={`post image ${id}`}
        className={styles.image}
        width={344}
        height={241.537}
        sizes='344px'
      />
      <p className={styles.title}>
        {title} #{id}
      </p>
      <div className={styles.tagLayout}>
        {tags.map((tag, index) => (
          <p 
            key={index} 
            className={styles.tag}
          >
            {tag}
          </p>
        ))}
        <p className={styles.tag}>
          {postData}
        </p>
      </div>
      <p className={styles.description}>
        {description}
      </p>
      <p className={styles.data}>
        {postData}
      </p>
    </Link>
  )
}