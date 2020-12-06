import React from 'react'
import Button from 'elements/Button'

export default function MostPick(props) {
    return (
        <section className="container">
            <h4 className="mb-3">Most Picked</h4>
            <div className="container-grid">
                {props.data.map((data, index) => {
                    return (
                        <div className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}>
                            <div className="card card-feature">
                                <div className="tag">
                                    ${data.price}
                                    <span className="font-weight-light">
                                        per {data.unit}
                                    </span>
                                </div>
                                <figure className="img-wrapper">
                                    <img src={data.imageUrl} alt={data.name} className="img-cover" />
                                </figure>
                                <div className="meta-wrapper">
                                    <Button className="streched-link d-block text-white" type="link" href={`/properties/${data._id}`}>
                                        <h5>{data.name}</h5>
                                    </Button>
                                    <span>
                                        {data.city}, {data.country}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
