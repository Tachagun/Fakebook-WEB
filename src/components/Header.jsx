import { useUserStore } from "../stores/userStore";
import {
  FakebookLogo,
  FriendIcon,
  HomeIcon,
  MarketIcon,
  MenuIcon,
  MessengerIcon,
  NotificationIcon,
  PlayIcon,
  SearchIcon,
} from "../icons";
import { Link } from "react-router";
import Avatar from "./Avatar";
("");

function Header() {
  const logout = useUserStore((state) => state.logout);
  const user = useUserStore(state=>state.user)
  return (
    <div className="flex justify-between px-3 h-14 w-full shadow-lg bg-white fixed top-0 z-10">
      {/* Search Bar */}
      <div className="flex-1 flex gap-2 items-center pe-2">
        <FakebookLogo className="w-12" />
        <label className="input rounded-full">
          <SearchIcon className="w-5 opacity-60" />
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      {/* Navigator */}
      <div className="flex-1 flex gap-2 justify-center ">
        <Link
          to="/"
          className="flex justify-center w-20 hover:border-2 hover:border-blue-900"
        >
          <HomeIcon className="w-9" />
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:border-2 hover:border-blue-900"
        >
          <PlayIcon className="w-9" />
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:border-2 hover:border-blue-900"
        >
          <MarketIcon className="w-10" />
        </Link>
        <Link
          to="/friends"
          className="flex justify-center w-20 hover:border-2 hover:border-blue-900"
        >
          <FriendIcon className="w-10" />
        </Link>
      </div>
      {/* Right + Dropdown Menu */}
      <div className="flex-1 flex gap-3 justify-end ">
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MenuIcon className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MessengerIcon className="w-7" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <NotificationIcon className="w-8" />
          </div>
        </div>
        <div className="dropdown dropdown-end">
         <div tabIndex={0} role="button" className="btn btn-circle w-12 mt-2 hover:scale-101">
         <Avatar className='w-full  rounded-full' menu right='-4' bottom='-4' imgSrc={user.profileImage} />
         </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box mt-1 z-1 w-52 p-2 shadow-sm">
            <li><Link to="/profile">Profile</Link></li>
            <li><a onClick={logout}>Logout</a></li>
            </ul>
          </div>
       
        
      </div>
    </div>
  );
}

export default Header;
