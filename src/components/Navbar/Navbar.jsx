import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <section className="flex justify-between py-5 px-10 shadow-lg">
            {/* nav header */}
            <div className="text-4xl font-bold text-gray-600">
                 <h2>Amajhon</h2>
            </div>
            <nav>
                <ul className="flex text-xl font-medium gap-5">
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Products</NavLink></li>
                    <li><NavLink>About</NavLink></li>
                </ul>
            </nav>

        </section>
    );
};

export default Navbar;