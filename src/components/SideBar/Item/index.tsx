import Link from 'next/link'

type Props = {
  url: string
  text: string
}

export const Item = ({ url, text }: Props): React.ReactNode => {
  return (
    <div>
      <Link href={url}>{text}</Link>
    </div>
  )
}
