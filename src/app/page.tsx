import Image from "next/image";
import "./page.css";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div id="top">
        <div id="top-container">
          <Link href="https://www.ktc.ac.jp/">
            <Image
              src="/kindai-logo.png"
              width={30}
              height={30}
              alt="kutc-logo"
              className="inline-block align-middle mr-2"
            />
            <h1 className="inline-block align-middle">
              近畿大学工業高等専門学校
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
