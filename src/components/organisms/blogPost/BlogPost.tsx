import { Post } from "src/types";
import styles from './BlogPost.module.sass'
import Image from "next/image";
import { SignUp, ScrollToTop } from "@/atoms/index";
import { EventInfo, DescriptionParagraphs } from "@/molecules/index";
import React from "react";

interface Props {
    data: Post
}

export const BlogPost: React.FC<Props> = ({data}) => {
    const {
        title,
        titleDescription,
        timestamp,
        image,
        event,
        descriptionTitle,
        paragraphs
    } = data

    return (
        <div className={styles.blogPost}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.titleDescription}>{titleDescription}</p>
            <p className={styles.timestamp}>{timestamp}</p>
            <Image
                src={image}
                alt="blog image"
                width={0}
                height={0}
                sizes="1020px"
                priority={true}
                quality={100}
                className={styles.image}
            />
            <div className={styles.captions}>
                <EventInfo data={event} timestamp={timestamp}/>
                <SignUp/>
            </div>
            <div className={styles.description}>
                <h2 className={styles.descriptionTitle}>{descriptionTitle}</h2>
                <DescriptionParagraphs paragraphs={paragraphs}/>
                <p className={styles.learn}>Learn more</p>
            </div>
            <ScrollToTop/>
        </div>
    )
}