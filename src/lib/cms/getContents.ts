import { createClient } from 'microcms-js-sdk'

const client = () => {
  if (!process.env.MICROCMS_API_KEY) {
    throw new Error('MicroCMSのAPIキーが設定されていません')
  }
  if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error('MicroCMSのサービスドメインが設定されていません')
  }
  return createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  })
}

export type Works = {
  id: string
  title: string
  date: Date
  img: { url: string }
  description: string
}

export const getContents = async (endpoint: 'works') => {
  const data = await client().get({
    endpoint: endpoint,
  })

  return data.contents
}
