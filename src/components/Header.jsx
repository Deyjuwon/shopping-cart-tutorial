import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-10 bg-slate-500 text-white">
        <div>
            <p className='text-2xl font-semibold'>shopee</p>
        </div>
        <nav>
            <ul className="flex items-center gap-5">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'./cart'}>Cart</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
