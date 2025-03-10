import { getContent } from '@/feature/cms/hooks/MicroCmsContents'
import { EndpointList, type MicroCmsContentsType } from '@/feature/cms/hooks/MicroCmsContentsTypes'
import { type NextRequest, NextResponse } from 'next/server'

// GET /api/cms/content
export async function GET(request: NextRequest): Promise<NextResponse> {
  const params = request.nextUrl.searchParams
  const endpoint = params.get('endpoint') as MicroCmsContentsType['endpoint']
  const id = params.get('id')
  if (!endpoint || !id || EndpointList.includes(endpoint) === false) {
    return NextResponse.json({ error: 'Invalid query parameters' }, { status: 400 })
  }
  const contents = await getContent({ endpoint, id })
  return NextResponse.json(contents)
}
