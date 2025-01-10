import type { GetServerSideProps } from 'next'

type Props = { id: string }

export default function Page({ id }: Props) {
  return <div>{id}</div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params
  return {
    props: { id },
  }
}
