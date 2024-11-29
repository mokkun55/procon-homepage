import Link from 'next/link'

export const Fotter = () => {
  return (
    <div className="m-0 p-5 pb-20 text-black bg-gray-50">
      <div className="m-10">
        <Link href="https://www.ktc.ac.jp/">
          <h1 className="text-3xl">近畿大学工業高等専門学校</h1>
        </Link>
        <h2 className="text-xl">プログラミング技術部</h2>
      </div>
      <div className="my-3">
        <p>-部員向け-</p>
        <ul>
          <li>欠席連絡フォーム</li>
        </ul>
      </div>
      <p>© Kindai University Technical College Programming Culb</p>
    </div>
  )
}
