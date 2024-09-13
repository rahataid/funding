import Logo from "@components/logo";
import MainMenu from "@components/menu/main-menu";
import MobileMenu from "@components/menu/mobile-menu";
import { useOffcanvas, useSticky } from "@hooks";
import BurgerButton from "@ui/burger-button";
import clsx from "clsx";
import PropTypes from "prop-types";
import headerData from "../../data/header.json";
import menuData from "../../data/menu.json";
import Head from "next/head";

const Header = ({ className }) => {
    const sticky = useSticky();
    const { offcanvas, offcanvasHandler } = useOffcanvas();

    return (
        <>
            <header
                className={clsx(
                    "rn-header haeder-default black-logo-version header--fixed header--sticky",
                    sticky && "sticky",
                    className
                )}
            >
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            <Logo logo={headerData.logo} />
                            <div
                                className="mainmenu-wrapper"
                                style={{ marginLeft: "auto" }}
                            >
                                <nav
                                    id="sideNav"
                                    className="mainmenu-nav d-none d-xl-block"
                                >
                                    <MainMenu menu={menuData} />
                                </nav>
                            </div>
                            <div className="header-right d-none d-xl-block">
                                <div className="setting-option header-btn">
                                    <div className="icon-box">
                                        <a
                                            className="btn btn-medium btn-primary"
                                            href="/contact-form"
                                            style={{ borderRadius: "50px" }}
                                        >
                                            Schedule For Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="header-right">
                            {/* {!isAuthenticated && (
                                <div className="setting-option header-btn">
                                    <div className="icon-box">
                                        <Button
                                            color="primary-alta"
                                            className="connectBtn"
                                            size="small"
                                            onClick={() => {
                                                push("/login");
                                            }}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </div>
                            )} */}
                            {/* {isAuthenticated && (
                                <div className="setting-option rn-icon-list user-account">
                                    <UserDropdown
                                        accounts={accounts}
                                        balances={balances}
                                        details={user}
                                    />
                                </div>
                            )} */}

                            <div className="setting-option mobile-menu-bar d-block d-xl-none">
                                <div className="hamberger">
                                    <BurgerButton onClick={offcanvasHandler} />
                                </div>
                            </div>
                            {/* <div
                                id="my_switcher"
                                className="setting-option my_switcher"
                            >
                                <ColorSwitcher />
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                menu={menuData}
                logo={headerData.logo}
            />
        </>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
