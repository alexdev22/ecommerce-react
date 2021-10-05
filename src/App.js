import React from "react";
import NavBar from "./components/NavBar";
import PlantsGrid from "./components/PlantsGrid";
import SearchBar from "./components/SearchBar";

const App = () => {
    return (
        <div>
            <NavBar />
            <SearchBar />
            <PlantsGrid />
        </div>
    );
};

export default App;
