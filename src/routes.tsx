import { Routes as ReactRoutes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Home from "./pages/home";
import Detail from "./pages/home/detail";

const Routes = () => {
    const location: any = useLocation();
    useEffect(() => {
        if (location.pathname !== "/") {
            window.scroll(0, 0);
        }
    }, [location]);

    return (
        <ReactRoutes>
            {/* <Route path="/detailpokemon" element={<DetailPokemon />} />
            <Route path="/mypokemon" element={<MyPokemon />} /> */}
            <Route path={`/pokemon/${location?.state}`} element={<Detail />} />
            <Route path="/" element={<Home />} />
        </ReactRoutes>
    );
};

export default Routes;
