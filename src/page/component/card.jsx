const Card = (props) => { 
    let d = new Date(props.publishedAt);
    return (
        <div className="col">
            <div className="card">
                <img className="card-img-top"
                    src={props.urlToImage}
                    alt="" />
                <div className="card-body">
                    <p className="card-text"><small className="text-muted">Source: {props.source}</small></p>
                    <h4 className="card-title"><a href={props.url} target="_blank" rel="noreferrer">{props.title}</a></h4>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-muted">Published at: {d.toDateString()}</small></p>
                </div>
            </div>
        </div>
    )
}

export default Card