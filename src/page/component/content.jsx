import { useCallback, useEffect, useState } from "react";
import Card from "./card";
import Pagination from "./pagination";

const Content = (props) => { 
    let [articles, setArticles] = useState([]);
    let [loading, setLoading] = useState(true);
    let [fetchResult, setFetchResult] = useState("");
    let [header, setHeader] = useState("");
    let [totalResults, setTotalResults] = useState(0);
    let [page, setPage] = useState(props.page);

    // const token = "a381d3bb363344dd8f10820abf108323"
    // const token = "5be7d56373774432b6f59713eebbfdba"
    const token = "48fc76a73f9342b690e5a4bed5e4d1c7"

    const getAsrticles = useCallback(
        (data) => {
            if (data.searchQuery !== "") {
                if (data.category !== "general") {
                    fetchData(`https://newsapi.org/v2/top-headlines?q=${data.searchQuery}&language=${data.lang}&category=${data.category}&page=${data.page}&apiKey=${token}`)

                    setHeader(`Shearch result for "${data.searchQuery}" in ${data.category.charAt(0).toUpperCase() + data.category.slice(1)}`)
                } else {
                    fetchData(`https://newsapi.org/v2/everything?q=${data.searchQuery}&language=${data.lang}&page=${data.page}&apiKey=${token}`)

                    setHeader(`Shearch result for "${data.searchQuery}"`)
                }
            } else {
                fetchData(`https://newsapi.org/v2/top-headlines?language=${data.lang}&category=${data.category}&page=${data.page}&apiKey=${token}`)

                if (data.category === "general") {
                    setHeader("Top Headlines")
                } else {
                    setHeader(`Top Headlines in ${data.category.charAt(0).toUpperCase() + data.category.slice(1)}`)
                }
            }
        }, []
    )

    const fetchData = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.totalResults !== 0 && data.status === "ok") {
                    setArticles(data.articles)
                    setTotalResults(data.totalResults)
                } else if (data.status === "ok") {
                    // request success but no result
                    setFetchResult("No result found")
                    setArticles([])
                    setTotalResults(0)
                } else if (data.status === "error") {
                    // request error
                    setFetchResult(data.message)
                    setArticles([])
                    setTotalResults(0)
                }
                setLoading(false)
            })
    }

    const showAllCards = () => {
        return articles.map((item, key) => {
            return (
                <Card
                    key={key}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    urlToImage={item.urlToImage}
                    publishedAt={item.publishedAt}
                    source={item.source.name}
                />
            )
        })
    }

    let changePage = (page) => { 
        setPage(page)
        props.changePage(page)
    }

    useEffect(() => { 
        setArticles([])
        setTotalResults(0)
        setFetchResult("")
        setLoading(true)
        setPage(props.page)
        getAsrticles(props)
    }, [props, getAsrticles])

    return (
        <div className="container my-2" id="content">
            <h1 className="my-3">{header}</h1>
            <Pagination page={page} totalResults={totalResults} changePage={changePage} />
            {loading && <div className="col-12 text-center"><div className="spinner-border text-primary" style={{ width: "4rem", height: "4rem" }} role="status"></div></div>}
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
                {fetchResult !== "" ? fetchResult : showAllCards()}
            </div>
            <Pagination page={page} totalResults={totalResults} changePage={changePage} />
        </div>
    )
}

export default Content;