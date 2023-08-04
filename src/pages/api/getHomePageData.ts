import type { NextApiRequest, NextApiResponse } from 'next'
import type { HomePage } from 'src/types'
import homePageData from "@/data/homePage.json"

export default async function getHomePageData(
  req: NextApiRequest,
  res: NextApiResponse<HomePage>
) {
res.status(200).json(homePageData)
}
