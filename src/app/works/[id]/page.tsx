type Props = {
  params: {
    id: string
  }
}

export default async function page({ params }: Props) {
  const { id } = await params
  return <div>{id}</div>
}
