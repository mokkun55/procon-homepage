import { createClient } from 'microcms-js-sdk'

export const getClient = () => {
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