import React from "react";

function Header({ setSearch, search }) {
  return (
    <div className="bg-black flex ">
      <img
        src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=1200&aspectRatio=1.78&format=jpeg"
        className="w-96 ml-12 "
        alt="starwars"
      />

      <div className="flex items-center justify-center w-1/3 ml-16">
        <input
          className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2"
          type="text"
          placeholder="Search ships here..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Header;
