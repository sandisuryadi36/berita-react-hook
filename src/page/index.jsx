import Navbar from "./component/navbar";
import React, {useState} from "react";
import SearchBar from "./component/searchbar";

const Page = () => { 
    let [category, setCategory] = useState("general");
    let [searchQuery, setSearchQuery] = useState("");

    const searchRef = React.createRef();

    const categoryHandler = (value) => { 
        setCategory(value);
    }

    const changeSearch = (value) => { 
        setSearchQuery(value);
    }

    return (
        <div>
            <Navbar category={categoryHandler} />
            <SearchBar searchQuery={changeSearch} searchRef={searchRef} />
        </div>
    );
}

export default Page