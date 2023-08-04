import React from 'react';
import { HomePage } from 'src/types';
import styles from './PostList.module.sass'
import { Post } from '@/molecules/index';

interface Props {
  data: HomePage
}

export const PostList: React.FC<Props>= ({data}) => {

  const {
    posts,
    homeTitle
  } = data

  const sortedPostsByDate = posts.sort((x, y) => Number(y.timestamp) - Number(x.timestamp))

  return (
    <div className={styles.home}>
        <p className={styles.title}>{homeTitle}</p>
        <div className={styles.list}>
          {sortedPostsByDate.map((post, index) => (
            <Post key={index} data={post}/>
          ))}
        </div>
    </div>
  )
}