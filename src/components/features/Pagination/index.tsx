import { Pagination as MantinePagination } from '@mantine/core'

type Props = {
  total: number
  activePages: number
  onChange: (page: number) => void
  className?: string
}

export const Pagination = (props: Props) => {
  return (
    <>
      <MantinePagination
        total={props.total}
        value={props.activePages}
        onChange={props.onChange}
        className={props.className}
      />
    </>
  )
}
