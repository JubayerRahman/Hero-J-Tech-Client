import { Link } from "react-router-dom"
import errorImg from "../../assets/anushka-sharma404.webp"
import { MdErrorOutline } from "react-icons/md";


const Errorpage = () => {
  return (
    <div className="flex flex-col-reverse p-[10px] md:flex-row justify-center md:justify-around items-center h-screen">
      <div>
        <h1 className="text-[100px] flex items-center text-red-700">404 <MdErrorOutline /></h1>
        <p className="text-xl">It seems you went on a wrong route. Go back!</p>
        <Link to="/">
        <button className="bg-gray-600 text-white text-xl p-[15px] my-[20px] rounded-md">Home</button>
        </Link>
      </div>
      <img draggable="false" className="w-[700px] " src={errorImg} />
    </div>
  )
}

export default Errorpage
