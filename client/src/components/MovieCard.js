import React from "react";


function MovieCard ({movie}) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-3">
                    <div className="card">
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                                <img className="" src={movie.image} alt={movie.title}/>
                            </div>
                            <div className="card-body">
                                <h2>{movie.title}</h2>
                                <p className="card-text">{movie.rating} /5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;