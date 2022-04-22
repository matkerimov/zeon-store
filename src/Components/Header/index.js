import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import logo from "../Header/img/Logo.png";
import loupe from "../Header/img/Loupe.png";
import favourites from "../Header/img/Favourites.png"
import trash from "../Header/img/Trash.png"
import {Breadcrumb, Button, Form} from 'react-bootstrap';
import "./style.css"
import ShareIcon from "../CallBack";
import FavoriteIcon from "../Message";
import Message from "../Message";
import CallBack from "../CallBack";
import CallModal from "../CallModal";

const Header = () => {

    const [search, setSearch] = useState('')
    const [open, setOpen] = useState(false)
    const [callModal, setCallModal] = useState(false)
    const navigate = useNavigate()



    const upArrow = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const searchInput = (e) => {
        setSearch(e.target.value)
    }
    const handleSearch = () => {
        setSearch('')
        if (search.trim()) {
            navigate.push(`/browse/${search}`)
        }
    }


    return (
        <div>
            <div className="container header">
                <div className="nav">
                    <div className="nav__right-side">
                        <NavLink to={'/about'} className="nav__item">О нас</NavLink>
                        <NavLink to={'/collections'} className="nav__item">Коллекции</NavLink>
                        <NavLink to={'/news'} className="nav__item">Новости</NavLink>
                    </div>
                    <a href="tel://+996 000 00 00 00" className="nav__contact">Тел:<span>+996 000 00 00 00</span></a>
                </div>
                <div className="container menu__header ">
                    <div className="header__logo">
                        <Link to={"/"}>
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className="menu__search">
                        <Form className="">
                            <Form.Group className="mb-3 menu__group" controlId="formBasicEmail">
                                <Form.Control onKeyPress={el=>{if(el.key==='Enter')handleSearch()}}
                                              className="menu__input" type="text" placeholder="Поиск"/>
                                <img onClick={handleSearch} src={loupe} alt=""/>

                            </Form.Group>
                        </Form>
                    </div>
                    <div className="menu__icons">
                        <div className="icon">
                            <span>
                                <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.9495 19.8404C11.0842 19.9779 11.2676 20.0543 11.4596 20.0543C11.6516 20.0543 11.835 19.9779 11.9697 19.8404L21.1345 10.5571C23.5141 8.14777 23.5141 4.22572 21.1345 1.81539C19.9786 0.644602 18.4416 0 16.8052 0C15.1689 0 13.6328 0.644602 12.4769 1.81443L11.4596 2.8458L10.4422 1.81539C9.28636 0.644602 7.74934 0 6.11393 0C4.47756 0 2.94054 0.644602 1.78467 1.81539C-0.594891 4.22572 -0.594891 8.14777 1.78467 10.5562L10.9495 19.8404ZM2.80394 2.82097C3.68851 1.92617 4.86444 1.43245 6.11297 1.43245C7.36246 1.43245 8.53743 1.92617 9.42105 2.82192L10.9485 4.36897C11.2169 4.64113 11.6994 4.64113 11.9678 4.36897L13.4953 2.82097C14.3817 1.92617 15.5567 1.43245 16.8052 1.43245C18.0547 1.43245 19.2297 1.92617 20.1143 2.82097C21.9455 4.67647 21.9455 7.69511 20.1143 9.55156L11.4596 18.3191L2.80394 9.55061C0.972697 7.69607 0.972697 4.67647 2.80394 2.82097Z"
                                    fill="#515151"/>
                            </svg>
                            </span>

                            <p className="icons__text">
                                Избранное
                            </p>
                        </div>
                        <span className="icon__span">
                            <svg width="1" height="24" viewBox="0 0 1 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
<line opacity="0.6" x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#D3D3D3"/>
</svg>

                        </span>
                        <Link to="/cart">
                            <div className="icon">
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.9351 20.0336L20.7491 8.51772C20.7002 8.0402 20.2979 7.67725 19.8179 7.67725H4.21319C3.73446 7.67725 3.33246 8.03898 3.28221 8.51523L2.0644 20.0368C1.9639 21.0423 2.2991 22.0529 2.9838 22.8097C3.66855 23.5659 4.6398 24.0001 5.64879 24.0001H18.3825C19.3868 24.0001 20.349 23.5747 21.0213 22.8322C21.7029 22.081 22.0359 21.0623 21.9351 20.0336ZM19.6346 21.5748C19.3113 21.9312 18.8666 22.1275 18.3825 22.1275H5.64911C5.16818 22.1275 4.70285 21.9181 4.37233 21.5529C4.04182 21.1878 3.87986 20.7031 3.9273 20.2284L5.05582 9.55014H18.973L20.0722 20.2216C20.1221 20.7281 19.9664 21.2087 19.6346 21.5748Z"
                                    fill="#515151"/>
                                <path
                                    d="M12.1708 0C9.2109 0 6.80273 2.40811 6.80273 5.36803V8.6138H8.6753V5.36803C8.6753 3.44053 10.2433 1.87256 12.1708 1.87256C14.0983 1.87256 15.6665 3.44053 15.6665 5.36803V8.6138H17.5388V5.36803C17.5388 2.40811 15.1307 0 12.1708 0Z"
                                    fill="#515151"/>
                            </svg>

                            </span>

                                <p className="icons__text">
                                    Корзина
                                </p>
                            </div>

                        </Link>
                    </div>
                </div>


                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: "/path"}}>
                    </Breadcrumb.Item>
                </Breadcrumb>

                <div className="floating__buttons">
                    <div className="up__arrow" onClick={upArrow}>
                        <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.3873 0.721353C13.1734 0.493924 12.8267 0.493924 12.6127 0.721353L0.56144 13.5383C0.45837 13.6476 0.400442 13.796 0.400391 13.9508L0.400392 18.8658C0.400392 19.4064 0.400392 19.4495 0.94722 19.4495C1.23267 19.4495 1.10183 19.5125 1.33603 19.2783L12.9995 6.87261L24.663 19.2783C25.1437 19.759 24.9752 19.7418 25.4377 19.2793C25.6584 19.0586 25.5986 19.1466 25.5986 18.8658C25.5986 18.5851 25.5986 13.9508 25.5986 13.9508C25.5989 13.7962 25.5414 13.6478 25.4387 13.5383L13.3873 0.721353Z"
                                fill="#2E2E2C"/>
                        </svg>

                    </div>
                    {
                        callModal ? <CallModal modal={setCallModal}/> : null
                    }

                    {
                        !open ? (
                            <div className="message" onClick={() => setOpen(true)}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.4451 0.333496H4.55621C2.22807 0.333496 0.333984 2.2929 0.333984 4.70131V15.1841C0.333984 17.5925 2.22807 19.5519 4.55621 19.5519H6.2451V24.7933C6.2451 25.1466 6.45072 25.465 6.76612 25.6004C6.87083 25.645 6.98061 25.6668 7.08954 25.6668C7.30952 25.6668 7.52485 25.5782 7.68656 25.4109L13.3502 19.5519H21.4451C23.7732 19.5519 25.6673 17.5925 25.6673 15.1841V4.70131C25.6673 2.2929 23.7732 0.333496 21.4451 0.333496ZM16.5895 10.6646H6.2451C5.77896 10.6646 5.40065 10.4249 5.40065 9.94269C5.40065 9.46048 5.77896 9.22082 6.2451 9.22082H16.5895C17.0557 9.22082 17.434 9.46048 17.434 9.94269C17.434 10.4249 17.0557 10.6646 16.5895 10.6646ZM19.7562 7.1703H6.2451C5.77896 7.1703 5.40065 6.93065 5.40065 6.44844C5.40065 5.96623 5.77896 5.72657 6.2451 5.72657H19.7562C20.2223 5.72657 20.6006 5.96623 20.6006 6.44844C20.6006 6.93065 20.2223 7.1703 19.7562 7.1703Z"
                                        fill="#2E2E2C"/>
                                </svg>
                            </div>
                        ) : (
                            <div className="call__back">
                                <a href="https://web.telegram.org/z/">
                                    <div className="telegram">
                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="44" height="44" rx="6" fill="#0088CC"/>
                                            <path
                                                d="M31.1094 13.3368L10.4244 21.3133C9.01269 21.8803 9.02086 22.6678 10.1654 23.0189L15.476 24.6756L27.7634 16.9231C28.3444 16.5696 28.8752 16.7598 28.4389 17.1471L18.4837 26.1316H18.4814L18.4837 26.1328L18.1174 31.6068C18.654 31.6068 18.8909 31.3606 19.1919 31.0701L21.7714 28.5618L27.1369 32.5249C28.1262 33.0698 28.8367 32.7898 29.0829 31.6091L32.605 15.0098C32.9655 13.5643 32.0532 12.9098 31.1094 13.3368Z"
                                                fill="white"/>
                                        </svg>

                                    </div>
                                </a>
                                <a href="https://web.whatsapp.com/">
                                    <div className="whatsapp">
                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="44" height="44" rx="6" fill="#25D366"/>
                                            <path
                                                d="M28.1924 24.8672C27.873 24.7031 26.2822 23.9238 25.9863 23.8184C25.6904 23.707 25.4736 23.6543 25.2598 23.9824C25.043 24.3076 24.4277 25.0313 24.2344 25.251C24.0469 25.4678 23.8564 25.4941 23.5371 25.333C21.6387 24.3838 20.3936 23.6397 19.1426 21.4922C18.8115 20.9209 19.4736 20.9619 20.0918 19.7285C20.1973 19.5117 20.1445 19.3271 20.0625 19.1631C19.9805 18.999 19.3359 17.4111 19.0664 16.7637C18.8057 16.1338 18.5361 16.2217 18.3398 16.21C18.1523 16.1982 17.9385 16.1982 17.7217 16.1982C17.5049 16.1982 17.1563 16.2803 16.8604 16.5996C16.5645 16.9248 15.7295 17.707 15.7295 19.2949C15.7295 20.8828 16.8867 22.4209 17.0449 22.6377C17.209 22.8545 19.3213 26.1123 22.5645 27.5156C24.6152 28.4004 25.418 28.4766 26.4434 28.3242C27.0674 28.2305 28.3535 27.5449 28.6201 26.7861C28.8867 26.0303 28.8867 25.3828 28.8076 25.248C28.7285 25.1045 28.5117 25.0225 28.1924 24.8672Z"
                                                fill="white"/>
                                            <path
                                                d="M34.3976 17.2061C33.7355 15.6328 32.7863 14.2207 31.5763 13.0078C30.3664 11.7979 28.9543 10.8457 27.3781 10.1865C25.7668 9.50977 24.0558 9.16699 22.2922 9.16699H22.2336C20.4582 9.17578 18.7384 9.52734 17.1213 10.2188C15.5597 10.8867 14.1593 11.8359 12.9611 13.0459C11.7629 14.2559 10.8224 15.6621 10.172 17.2295C9.49821 18.8525 9.15837 20.5781 9.16716 22.3535C9.17595 24.3867 9.66228 26.4053 10.5734 28.21V32.6631C10.5734 33.4072 11.1769 34.0107 11.9211 34.0107H16.3771C18.1818 34.9219 20.2004 35.4082 22.2336 35.417H22.2951C24.05 35.417 25.7521 35.0772 27.3547 34.4121C28.922 33.7588 30.3312 32.8213 31.5383 31.623C32.7482 30.4248 33.7004 29.0244 34.3654 27.4629C35.0568 25.8457 35.4084 24.126 35.4172 22.3506C35.426 20.5664 35.0802 18.835 34.3976 17.2061ZM29.9709 30.0381C27.9172 32.0713 25.1926 33.1904 22.2922 33.1904H22.2424C20.4758 33.1816 18.7209 32.7422 17.1711 31.916L16.925 31.7842H12.8V27.6592L12.6681 27.4131C11.842 25.8633 11.4025 24.1084 11.3937 22.3418C11.382 19.4209 12.4982 16.6787 14.5461 14.6133C16.591 12.5479 19.3244 11.4053 22.2453 11.3936H22.2951C23.7599 11.3936 25.1808 11.6777 26.5197 12.2402C27.8263 12.7881 28.9982 13.5762 30.006 14.584C31.0109 15.5889 31.8019 16.7637 32.3498 18.0703C32.9181 19.4238 33.2023 20.8594 33.1965 22.3418C33.1789 25.2598 32.0334 27.9932 29.9709 30.0381Z"
                                                fill="white"/>
                                        </svg>

                                    </div>
                                </a>

                                <div onClick={() => setCallModal(true)} className="phone">
                                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect width="44" height="44" rx="6" fill="#27AE60"/>
                                        <path
                                            d="M31.442 25.9436C30.9311 25.6924 28.3856 24.4989 27.9121 24.3373C27.4386 24.1668 27.0917 24.0861 26.7495 24.5886C26.4026 25.0867 25.4182 26.1949 25.1088 26.5314C24.8088 26.8635 24.504 26.9038 23.9931 26.6571C20.9554 25.2033 18.963 24.0636 16.9613 20.7748C16.4316 19.8998 17.491 19.9626 18.4802 18.0737C18.6489 17.7416 18.5646 17.459 18.4333 17.2077C18.302 16.9564 17.2707 14.5246 16.8394 13.533C16.4222 12.5683 15.9909 12.7029 15.6769 12.6849C15.3768 12.667 15.0346 12.667 14.6877 12.667C14.3408 12.667 13.783 12.7926 13.3095 13.2817C12.836 13.7797 11.5 14.9777 11.5 17.4096C11.5 19.8415 13.3517 22.1971 13.6048 22.5291C13.8674 22.8612 17.2473 27.8506 22.4367 29.9998C25.7182 31.3548 27.0027 31.4715 28.6434 31.2382C29.6419 31.0946 31.6999 30.0446 32.1265 28.8825C32.553 27.7249 32.553 26.7333 32.4265 26.5269C32.2999 26.3071 31.953 26.1815 31.442 25.9436Z"
                                            fill="white"/>
                                    </svg>

                                </div>

                                <div onClick={() => setOpen(false)} className="close_message">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.6512 10.0005L18.9916 2.65978C19.4477 2.2041 19.4477 1.46473 18.9916 1.00905C18.5356 0.552974 17.797 0.552974 17.341 1.00905L10.0005 8.34979L2.6597 1.00905C2.20364 0.552974 1.46509 0.552974 1.00903 1.00905C0.552979 1.46473 0.552979 2.2041 1.00903 2.65978L8.34986 10.0005L1.00903 17.3413C0.552979 17.7969 0.552979 18.5363 1.00903 18.992C1.23706 19.2196 1.53591 19.3337 1.83436 19.3337C2.13282 19.3337 2.43167 19.2196 2.6597 18.9916L10.0005 11.6509L17.341 18.9916C17.569 19.2196 17.8678 19.3337 18.1663 19.3337C18.4647 19.3337 18.7636 19.2196 18.9916 18.9916C19.4477 18.5359 19.4477 17.7966 18.9916 17.3409L11.6512 10.0005Z"
                                            fill="#1D1D1B"/>
                                    </svg>


                                </div>


                            </div>

                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Header;