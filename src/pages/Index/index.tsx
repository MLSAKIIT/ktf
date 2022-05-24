import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="flex justify-center items-center flex-4 text-white text-lg bg-gradient-to-br from-orange-500 to-red-500">
      <Link to="/kiit">
        KIIT
      </Link>
      </div>
      <div className="flex justify-center items-center flex-5 text-white text-lg bg-gradient-to-br from-sky-500 to-indigo-500">
      <Link to="/home">
        KTF
      </Link>
      </div>
      <div className="flex justify-center items-center flex-4 text-white text-lg bg-gradient-to-br from-sky-500 to-blue-500">
      <Link to="/msc">
        MSC
      </Link>
      </div>
    </main>
  )
}

export default Index