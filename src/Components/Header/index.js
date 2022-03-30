import React from 'react';
import {Link} from "react-router-dom";
import logo from "../Header/img/Logo.png";
import loupe from "../Header/img/Loupe.png";
import favourites from "../Header/img/Favourites.png"
import trash from "../Header/img/Trash.png"
import {Button, Form} from 'react-bootstrap';
import "./style.css"

const Header = () => {
    return (
        <div>
            <div className="container">
                <nav className="nav">
                    <div className="nav__link" >
                        <div className="nav__right-side">
                            <Link href="#"  to={'/'}>
                                <h5 className="nav__item" >О нас</h5>
                            </Link>
                            <Link href="#"  to={'/'}>
                                <h5 className="nav__item" >Коллекции</h5>
                            </Link>
                            <Link href="#"  to={'/'}>
                                <h5 className="nav__item">Новости</h5>
                            </Link>
                        </div>
                        <div className="nav__left-side">
                            <Link href="#"  to={'/'}>
                                <h5 className="nav__item"><span>Тел:</span>+996 000 00 00 00</h5>
                            </Link>

                        </div>
                    </div>
                </nav>
                <div className="container menu__header ">
                    <div className="header__logo">
                        <Link to={"/"}>
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className="menu__search">
                        <Form className="" >
                            <Form.Group className="mb-3 menu__group"  controlId="formBasicEmail">
                                <Form.Control className="menu__input" type="email" placeholder="Поиск"  />
                                <img src={loupe} alt=""/>

                            </Form.Group>
                        </Form>
                    </div>
                    <div className="menu__icons">
                        <div className="icon">
                            <span>
                                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9495 19.8404C11.0842 19.9779 11.2676 20.0543 11.4596 20.0543C11.6516 20.0543 11.835 19.9779 11.9697 19.8404L21.1345 10.5571C23.5141 8.14777 23.5141 4.22572 21.1345 1.81539C19.9786 0.644602 18.4416 0 16.8052 0C15.1689 0 13.6328 0.644602 12.4769 1.81443L11.4596 2.8458L10.4422 1.81539C9.28636 0.644602 7.74934 0 6.11393 0C4.47756 0 2.94054 0.644602 1.78467 1.81539C-0.594891 4.22572 -0.594891 8.14777 1.78467 10.5562L10.9495 19.8404ZM2.80394 2.82097C3.68851 1.92617 4.86444 1.43245 6.11297 1.43245C7.36246 1.43245 8.53743 1.92617 9.42105 2.82192L10.9485 4.36897C11.2169 4.64113 11.6994 4.64113 11.9678 4.36897L13.4953 2.82097C14.3817 1.92617 15.5567 1.43245 16.8052 1.43245C18.0547 1.43245 19.2297 1.92617 20.1143 2.82097C21.9455 4.67647 21.9455 7.69511 20.1143 9.55156L11.4596 18.3191L2.80394 9.55061C0.972697 7.69607 0.972697 4.67647 2.80394 2.82097Z" fill="#515151"/>
                            </svg>
                            </span>


                            {/*<img src={favourites} alt="favourites"/>*/}
                            <p className="icons__text">
                                Избранное
                            </p>
                        </div>
                        <span className="icon__span">
                            <svg width="1" height="24" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<line opacity="0.6" x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#D3D3D3"/>
</svg>

                        </span>
                        <div className="icon">
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.9351 20.0336L20.7491 8.51772C20.7002 8.0402 20.2979 7.67725 19.8179 7.67725H4.21319C3.73446 7.67725 3.33246 8.03898 3.28221 8.51523L2.0644 20.0368C1.9639 21.0423 2.2991 22.0529 2.9838 22.8097C3.66855 23.5659 4.6398 24.0001 5.64879 24.0001H18.3825C19.3868 24.0001 20.349 23.5747 21.0213 22.8322C21.7029 22.081 22.0359 21.0623 21.9351 20.0336ZM19.6346 21.5748C19.3113 21.9312 18.8666 22.1275 18.3825 22.1275H5.64911C5.16818 22.1275 4.70285 21.9181 4.37233 21.5529C4.04182 21.1878 3.87986 20.7031 3.9273 20.2284L5.05582 9.55014H18.973L20.0722 20.2216C20.1221 20.7281 19.9664 21.2087 19.6346 21.5748Z" fill="#515151"/>
                                <path d="M12.1708 0C9.2109 0 6.80273 2.40811 6.80273 5.36803V8.6138H8.6753V5.36803C8.6753 3.44053 10.2433 1.87256 12.1708 1.87256C14.0983 1.87256 15.6665 3.44053 15.6665 5.36803V8.6138H17.5388V5.36803C17.5388 2.40811 15.1307 0 12.1708 0Z" fill="#515151"/>
                            </svg>

                            </span>

                            {/*<img src={trash} alt="trash"/>*/}
                            <p className="icons__text">
                                Корзина
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;