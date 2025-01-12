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

export const getWorks = async () => {
  const data: {
    contents: Array<{ id: string; title: string; date: Date; img: { url: string }; description: string }>
  } = await client().get({
    endpoint: 'works',
  })

  return data.contents
}
