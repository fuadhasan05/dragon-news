import React, { use } from "react";
import { NavLink } from "react-router";

const catagoryPromise = fetch("/categories.json").then((res) => res.json());

const Categoris = () => {
  const categories = use(catagoryPromise);

  return (
    <div>
      <h2 className="font-bold"> All Category</h2>
      <div className="grid grid-cols-1 gap-3 mt-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categoris;
