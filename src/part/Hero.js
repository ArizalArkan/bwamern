import React from "react";
import ImageHero from "Assets/images/img-hero.jpg";
import ImageHero_ from "Assets/images/img-hero-frame.jpg";
import IconCities from "Assets/images/icons/icon-cities.svg";
import IconTrevler from "Assets/images/icons/icon-traveler.svg";
import IconTreasure from "Assets/images/icons/icon-treasure.svg";
import Button from 'elements/Button'

import formatNumber from 'utils/formatNumber'

export default function Hero(props) {

    const _showMeNow = () => {
        window.scroll({
            top: props.refMontPicked.current.offsetTop - 30,
            behavior: 'smooth'
        })
    }

    const dataTravel = [
        { src: `${IconTrevler}`, data: `${props.data.travelers}`, text: 'travelers' },
        { src: `${IconTreasure}`, data: `${props.data.treasures}`, text: 'treasure' },
        { src: `${IconCities}`, data: `${props.data.cities}`, text: 'cities' }
    ];

    return (<section>
        <div className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pt-4" style={{ width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy Work, <br />
                        Start Your Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
                        We provide what you need to enjoy holiday with family Safety and healty to relax from your busy activity
                    </p>
                    <Button className="btn px-5 py-2" hasShadow isPrimary onClick={_showMeNow}>
                        Show Me Now
                    </Button>

                    <div className="row" style={{ marginTop: 80 }}>
                        {dataTravel.map(data => (
                            <div className="col-auto" style={{ marginRight: 30 }}>
                                <img height="36" width="36" src={data.src} alt={`${data.data} ${data.text}`} />
                                <h6 className="mt-3">
                                    {formatNumber(data.data)} <span className="text-gray-500 font-weight-light">
                                        {data.text}
                                    </span>
                                </h6>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style={{ width: 520, height: 410 }}>
                        <img src={ImageHero} alt="hero" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />
                        <img src={ImageHero_} alt="hero" className="img-fluid position-absolute" style={{ margin: '0px -15px -15px 0' }} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
