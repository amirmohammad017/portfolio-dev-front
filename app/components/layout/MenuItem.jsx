import { NavLink } from "react-router";

const MenuItem = ({ color = `text-blue-500`, to, children }) => {
  return (
    <>
      <li className="capitalize  ">
        <NavLink
          className={({ isActive }) =>
            isActive ? color : `text-white hover:text-blue-500 transition`
          }
          to={to}
        >
          {children}
        </NavLink>
      </li>
    </>
  );
};

export default MenuItem;
