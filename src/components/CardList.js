import React from "react";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};

function CardList({ slice, loadMore, loading }) {
  return (
    <div className=" container flex flex-col">
      {loading ? (
        <>
          <ImSpinner2 className="mx-auto animate-spin text-white text-4xl mt-[100px]" />
        </>
      ) : (
        <div className="container mt-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {slice.map((ship, index) => {
              return (
                <Link key={index} to={`/ship/${index}`} style={linkStyle}>
                  <div className="card bg-white m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                    <div className="m-3">
                      <h2 className="text-lg mb-2">{ship.name}</h2>
                      <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                        {ship.model}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <button
            className="bg-white mt-12 btn btn-dark d-block w-32 rounded-lg font-bold shadow-xl hover:bg-black hover:text-white p-2"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default CardList;
