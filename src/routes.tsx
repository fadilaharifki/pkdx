import { Routes as ReactRoutes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Home from "./pages/home";

const Routes = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname !== "/") {
            window.scroll(0, 0);
        }
    }, [location]);

    return (
        <ReactRoutes>
            {/* <Route path="/detailpokemon" element={<DetailPokemon />} />
            <Route path="/mypokemon" element={<MyPokemon />} />
            <Route path="/about" element={<About />} /> */}
            <Route path="/" element={<Home />} />
        </ReactRoutes>
    );
};

export default Routes;
