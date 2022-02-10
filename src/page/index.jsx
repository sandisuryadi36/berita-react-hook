import Navbar from "./component/navbar";
import React, {useState} from "react";
import SearchBar from "./component/searchbar";

const Page = () => { 
    let [category, setCategory] = useState("general");
    let [searchQuery, setSearchQuery] = useState("");

    const searchRef = React.createRef();

    const changeSearch = (value) => { 
        setSearchQuery(value);
    }

    return (
        <div>
            <Navbar category={(v) => setCategory()} />
            <SearchBar searchQuery={changeSearch} searchRef={searchRef} />
        </div>
    );
}

export default Page