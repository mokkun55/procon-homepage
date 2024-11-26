import Image from 'next/image'
import Link from 'next/link'
import { textCss } from '../app/style/style'

export const Header = () => {
  return (
    <div>
      <div className="sticky w-full top">
        <div className="flex p-2">
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
        </div>
      </div>
    </div>
  )
}
