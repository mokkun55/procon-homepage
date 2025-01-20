import { getContents } from '@/feature/cms/hooks/MicroCmsContents'
import { EndpointList, type MicroCmsContentsType } from '@/feature/cms/hooks/MicroCmsContentsTypes'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<NextResponse> {
  const params = request.nextUrl.searchParams
  const endpoint = params.get('endpoint') as MicroCmsContentsType['endpoint']
  const limit = Number(params.get('limit'))
  const offset = Number(params.get('offset'))
  if (!endpoint || !limit || EndpointList.includes(endpoint) === false) {
    return NextResponse.json({ error: 'Invalid query parameters' }, { status: 400 })
  }
  const contents = await getContents({ endpoint, limit: limit, offset: offset ? offset : 0 })
  return NextResponse.json(contents)
}
