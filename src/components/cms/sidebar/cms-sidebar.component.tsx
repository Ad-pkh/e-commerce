import { FaSitemap, FaTag } from "react-icons/fa6";
import {
  HiCog,
  HiCurrencyDollar,
  HiFilm,
  HiHome,
  HiShoppingBag,
  HiShoppingCart,
  HiUserGroup,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const adminMenu = [
  {
    name: "Home",
    url: "/",
    icon: (
      <HiHome className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },

  {
    name: "Dashboard",
    url: "/admin",
    icon: (
      <HiCog className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    name: "Banner Management",
    url: "/admin/banner",
    icon: (
      <HiFilm className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    name: "Category Management",
    url: "/admin/category",
    icon: (
      <FaSitemap className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    name: "Product Management",
    url: "/admin/product",
    icon: (
      <HiShoppingBag className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    name: "Brand Management",
    url: "/admin/brand",
    icon: (
      <FaTag className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    name: "User Management",
    url: "/admin/user",
    icon: (
      <HiUserGroup className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    name: "Orders Management",
    url: "/admin/order",
    icon: (
      <HiShoppingCart className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    name: "Transcation Management",
    url: "/admin/transcation",
    icon: (
      <HiCurrencyDollar className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
];
const Sidebar = () => {
  return (
    <>
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            {adminMenu.map((item: any, i: number) => (
              <li key={i}>
                <NavLink
                  to={item.url}
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
