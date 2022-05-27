import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="flex justify-center items-center flex-4 text-white text-lg bg-gradient-to-br from-orange-500 to-red-500">
      <Link href="/kiit">
        KIIT
      </Link>
      </div>
      <div className="flex justify-center items-center flex-5 text-white text-lg bg-gradient-to-br from-sky-500 to-indigo-500">
      <Link href="/home">
        KTF
      </Link>
      </div>
      <div className="flex justify-center items-center flex-4 text-white text-lg bg-gradient-to-br from-sky-500 to-blue-500">
      <Link href="/msc">
        MSC
      </Link>
      </div>
    </main>
  )
}

export default Home
