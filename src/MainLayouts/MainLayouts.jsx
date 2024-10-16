import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";


const MainLayouts = () => {
    const navigation=useNavigation();
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
             {
                navigation.state === 'loading'? <Spinner></Spinner>:<Outlet></Outlet>
             }
             

             <Footer></Footer>
        </div>
    );
};

export default MainLayouts;