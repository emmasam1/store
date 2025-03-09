import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // You can use any icon for the search bar

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="bg-black text-white fixed w-full top-0 left-0 z-10 py-4 px-6 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-2xl font-bold">
          <a href="/">Logo</a>
        </div>

        {/* Search Bar on the right */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="py-2 px-4 rounded-full text-black focus:outline-none bg-white"
          />
          <FaSearch size={20} className="text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
