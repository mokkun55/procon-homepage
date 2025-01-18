export type MicroCmsContentsType = {
  endpoint: (typeof EndpointList)[number]
  limit: number
  offset?: number
}

export const EndpointList = ['works', 'posts'] as const
