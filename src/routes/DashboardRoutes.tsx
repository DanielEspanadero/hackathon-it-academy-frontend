import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Home } from "../components/home/Home";
import { Nav } from "../components/nav/Nav";
import { News } from "../components/news/News";
import { Pokedex } from "../components/pokedex/Pokedex";
import { Videogames } from "../components/videogames/Videogames";
import { ScrollToTop } from '../helpers/ScrollToTop';

export const DashboardRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/videojuegos" element={<Videogames />} />
                <Route path="/noticias" element={<News />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
