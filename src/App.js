import React from "react";
import NavBar from "./components/NavBar";
import PlantsGrid from "./components/PlantsGrid";
import SearchBar from "./components/SearchBar";
import './styles/style.css'

const App = () => {
    return (
        <main>
            <NavBar />
            <SearchBar />
            <PlantsGrid />
        </main>
    );
};

export default App;
