// // import { useState } from "react";
// // import { FaBars, FaTimes, FaUser } from "react-icons/fa";
// // import { NavLink } from "react-router-dom";

// // const Header = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <header 
// //       className="relative bg-cover bg-center text-white px-6 py-4" 
// //       style={{ backgroundImage: "url('/assets/background.jpg')" }}
// //     >
// //       {/* Dark Overlay for better visibility */}
// //       <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

// //       <div className="relative flex justify-between items-center z-10">
// //         {/* Logo */}
// //         <div className="text-red-600 text-4xl font-bold cursor-pointer">
// //           MovieHive
// //         </div>

// //         {/* Navigation */}
// //         <nav className="hidden md:flex w-1/2 justify-evenly text-lg">
// //           {["Home", "Explore", "Trending", "Genres", "Watchlist"].map((item) => (
// //             <a 
// //               key={item} 
// //               href={`#${item.toLowerCase()}`} 
// //               className="relative transition duration-300 hover:text-red-500"
// //             >
// //               {item}
// //               <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
// //             </a>
// //           ))}
// //         </nav>

// //         {/* Sign In / Profile */}
// //         {/* Sign In as a NavLink Styled as a Button */}
// //     <NavLink 
// //     to="/login"
// //     className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 flex items-center space-x-2 transition"
// //     >
// //   <FaUser />
// //   <span>Sign In</span>
// // </NavLink>


// //         {/* Mobile Menu */}
// //         <div className="md:hidden">
// //           <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
// //             {isOpen ? <FaTimes /> : <FaBars />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Nav */}
// //       {isOpen && (
// //         <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-center py-4 md:hidden">
// //           {["Home", "Explore", "Trending", "Genres", "Watchlist"].map((item) => (
// //             <a 
// //               key={item} 
// //               href={`#${item.toLowerCase()}`} 
// //               className="block py-2 text-lg transition hover:text-red-500"
// //             >
// //               {item}
// //             </a>
// //           ))}
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Header;



// import { useState } from "react";
// import { FaBars, FaTimes, FaUser } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header 
//       className="relative bg-cover bg-center text-white px-6 py-4" 
//       style={{ backgroundImage: "url('/assets/background.jpg')" }}
//     >
//       {/* Dark Overlay for better visibility */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

//       <div className="relative flex justify-between items-center z-10">
//         {/* Logo */}
//         <div className="text-red-600 text-4xl font-bold cursor-pointer">
//           MovieHive
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex w-1/2 justify-evenly text-lg">
//           {["Home", "Explore", "Trending", "Genres", "Watchlist"].map((item) => (
//             <NavLink 
//               key={item} 
//               to={`/${item.toLowerCase()}`} 
//               className="relative transition duration-300 hover:text-red-500"
//             >
//               {item}
//             </NavLink>
//           ))}
//         </nav>

//         {/* 🔥 Sign In as a NavLink Styled as a Button */}
//         <NavLink 
//           to="/login"
//           className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 flex items-center space-x-2 transition"
//         >
//           <FaUser />
//           <span>Sign In</span>
//         </NavLink>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-center py-4 md:hidden">
//           {["Home", "Explore", "Trending", "Genres", "Watchlist"].map((item) => (
//             <NavLink 
//               key={item} 
//               to={`/${item.toLowerCase()}`} 
//               className="block py-2 text-lg transition hover:text-red-500"
//             >
//               {item}
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      className="relative bg-cover bg-center text-white px-6 py-4" 
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      {/* Dark Overlay for better visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative flex justify-between items-center z-10">
        {/* Logo */}
        <div className="text-red-600 text-4xl font-bold cursor-pointer">
          MovieHive
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex w-1/2 justify-evenly text-lg">
          <NavLink to="/" className="relative transition duration-300 hover:text-red-500">
            Home
          </NavLink>
          <NavLink to="/explore" className="relative transition duration-300 hover:text-red-500">
            Explore
          </NavLink>
          <NavLink to="/trending" className="relative transition duration-300 hover:text-red-500">
            Trending
          </NavLink>
          <NavLink to="/genres" className="relative transition duration-300 hover:text-red-500">
            Genres
          </NavLink>
          <NavLink to="/watchlist" className="relative transition duration-300 hover:text-red-500">
            Watchlist
          </NavLink>
        </nav>

        {/* 🔥 Sign In as a NavLink Styled as a Button */}
        <NavLink 
          to="/login"
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 flex items-center space-x-2 transition"
        >
          <FaUser />
          <span>Sign In</span>
        </NavLink>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-center py-4 md:hidden">
          <NavLink to="/" className="block py-2 text-lg transition hover:text-red-500">
            Home
          </NavLink>
          <NavLink to="/explore" className="block py-2 text-lg transition hover:text-red-500">
            Explore
          </NavLink>
          <NavLink to="/trending" className="block py-2 text-lg transition hover:text-red-500">
            Trending
          </NavLink>
          <NavLink to="/genres" className="block py-2 text-lg transition hover:text-red-500">
            Genres
          </NavLink>
          <NavLink to="/watchlist" className="block py-2 text-lg transition hover:text-red-500">
            Watchlist
          </NavLink>
          <NavLink 
            to="/login"
            className="block bg-red-600 px-4 py-2 rounded hover:bg-red-700 w-fit mx-auto mt-2 flex items-center space-x-2 transition"
          >
            <FaUser />
            <span>Login</span>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
