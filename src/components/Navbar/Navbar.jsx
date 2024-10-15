import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <section className="flex justify-between py-5 px-10 shadow-lg">
            {/* nav header */}
            <div className="text-4xl font-bold text-gray-600">
                 <h2>Amajhon</h2>
            </div>
            <nav>
                <ul className="flex text-xl font-medium gap-5">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                </ul>
            </nav>

        </section>
    );
};

export default Navbar;