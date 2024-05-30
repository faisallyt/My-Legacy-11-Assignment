import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav className="bg-black flex flex-row p-6 justify-evenly">
      <div className="flex flex-row gap-8">
        <MenuItems name={"lists"} />
        <MenuItems name={"bookMarks"} />
      </div>
    </nav>
  );
};

export default Navbar;
