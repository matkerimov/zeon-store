import React, {useEffect, useState} from 'react';
import {Button, Card, CardGroup} from "react-bootstrap";
import collection_img from "../Main/img/collection.png";
import './style.css'
import {Link} from "react-router-dom";
import axios from "axios";

const Collections = () => {

    const [collection, setCollection] = useState([])
    const [moreCollection, setMoreCollection] = useState(false)

    useEffect(() => {
        axios(`https://613cea45270b96001798b2e8.mockapi.io/api/collection`)
            .then(({data}) => {
                setCollection(data)
            })
    })




    return (
        <div className="container collections ">
            <h4>Collections</h4>
            <div className="media">
                {
                    collection.map(item => {
                    return (
                        <div key={item.id}>
                            <Link to="/collection2020">
                                <Card className="collections__card">
                                    <Card.Img  variant="top" src={item.image}/>


                                        <Card.Title className="collections__title">{item.title}</Card.Title>

                                    <Card.Footer className="collections__footer">
                                        <Card.Text className="collections__text">
                                            Смотреть все
                                            <span>
                                              <i className="fa-solid fa-chevron-right fa-lg" />
                                            </span>
                                        </Card.Text>
                                    </Card.Footer>
                                </Card>
                            </Link>
                        </div>
                    )
                    })
                }

            </div>








</div>
)
    ;
};

export default Collections;