import type { NextApiRequest, NextApiResponse } from 'next'
import postsData from "@/data/posts.json"

export default async function getPostData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(postsData)
}
