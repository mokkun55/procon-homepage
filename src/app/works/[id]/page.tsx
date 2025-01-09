type Props = { params: { id: string } }

export default function Page({ params }: Props) {
  const { id } = params
  return <div>{id}</div>
}
