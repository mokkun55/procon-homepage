type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function page(props: Props) {
  const params = await props.params;
  const { id } = params
  return <div>{id}</div>
}
