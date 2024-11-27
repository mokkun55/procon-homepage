import Image from 'next/image'
import Link from 'next/link'
import { textCss } from '../app/style/style'

export const Header = () => {
  return (
    <div className="sticky top-0 w-full top bg-headercolor shadow-lg backdrop-blur-[5px]">
      <div className="flex p-2 justify-between">
        <Link href="https://www.ktc.ac.jp/">
          <Image
            src="/kindai-logo.png"
            width={30}
            height={30}
            alt="kutc-logo"
            className="inline-block align-middle mr-2"
          />
          <h1
            className={textCss({
              size: 'title',
              class: 'inline-block align-middle',
            })}>
            近畿大学工業高等専門学校
          </h1>
        </Link>
        <div>
          <h1
            className={textCss({
              size: 'title',
              class: 'inline-block align-middle r-0',
            })}>
            プログラミング技術部
          </h1>
          <Image
            src="/node-logo.png"
            width={30}
            height={30}
            alt="node-logo"
            className="inline-block align-middle ml-2"
          />
        </div>
      </div>
    </div>
  )
}
