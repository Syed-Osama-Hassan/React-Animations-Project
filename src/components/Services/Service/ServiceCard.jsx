import React from 'react'

export const ServiceCard = (props) => {
    return (
        <>
            <div className="card mb-3" style={{maxWidth: "600px"}}>
                <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.image} alt="" width="200px" height="220px"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.paragraph}
                    </p>
                    <p className="card-text">
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </p>
                </div>
                </div>
                </div>
                </div>
            </>
    )
}
