import Navbar from "./component/navbar";
import React, {useState} from "react";
import SearchBar from "./component/searchbar";
import Content from "./component/content";
import Footer from "./component/footer";

const Page = () => { 
    let [category, setCategory] = useState("general");
    let [searchQuery, setSearchQuery] = useState("");
    let [page, setPage] = useState(1);
    let lang = "id";

    const searchRef = React.createRef();

    const categoryHandler = (category) => { 
        setCategory(category);
        setSearchQuery("");
        searchRef.current.value = "";
        setPage(1);
    }

    const searchHandler = (searchQuery) => { 
        setSearchQuery(searchQuery);
        setPage(1);
    }

    const changePage = (page) => { 
        setPage(page);
    }

    return (
        <div>
            <Navbar category={categoryHandler} />
            <SearchBar searchQuery={searchHandler} searchRef={searchRef} />
            <Content
                category={category}
                searchQuery={searchQuery}
                page={page}
                lang={lang}
                changePage={changePage}
            />
            <Footer />
        </div>
    );
}

export default Page