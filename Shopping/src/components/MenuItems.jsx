import React from "react";
import { useNavigate } from "react-router-dom";

const MenuItems = ({ name }) => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate(`/${name}`);
  }
  return (
    <button
      className="text-white border px-6 py-3 rounded-[6px]"
      onClick={clickHandler}>
      {name}
    </button>
  );
};

export default MenuItems;
