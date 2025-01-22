export type MicroCmsContentsType = {
  endpoint: (typeof EndpointList)[number]
  limit: number
  offset?: number
}

export type MicroCmsContentType = {
  endpoint: (typeof EndpointList)[number]
  id: string
}

export const EndpointList = ['works', 'posts'] as const
