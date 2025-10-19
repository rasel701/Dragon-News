import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categorys = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="text-lg font-bold">All Categorys</h2>
      <div className="flex flex-col gap-2 mt-5">
        {categories.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn bg-base-300"
                : "btn bg-base-100 border-none hover:bg-base-200 font-semibold text-accent"
            }
            key={item.id}
            to={`/category/${item.id}`}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
