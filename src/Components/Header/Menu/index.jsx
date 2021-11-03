import React from 'react';

//Custom Imports
import './index.scss';

const Menu = ()=>{
    return (
        <>
            <button type="button" className="menu-button">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.12497 4.49991H34.875C35.4961 4.49991 36 3.49182 36 2.24995C36 1.0079 35.496 0 34.875 0H1.12497C0.503947 0 0 1.00808 0 2.24995C0 3.49182 0.504041 4.49991 1.12497 4.49991Z" fill="white"/>
                <path d="M34.875 15.75H1.12497C0.503947 15.75 0 16.7581 0 18C0 19.2418 0.504041 20.2499 1.12497 20.2499H34.875C35.4961 20.2499 36 19.2418 36 18C36 16.7581 35.4961 15.75 34.875 15.75Z" fill="white"/>
                <path d="M34.875 31.5001H12.375C11.754 31.5001 11.25 32.5082 11.25 33.75C11.25 34.9921 11.7541 36 12.375 36H34.875C35.4961 36 36 34.9919 36 33.75C36.0001 32.508 35.4961 31.5001 34.875 31.5001Z" fill="white"/>
                </svg>
            </button>
            <nav>
                <ul>
                    <a href="/">
                        <li>
                            início
                        </li>
                    </a>
                    <a href="/">
                        <li>
                            quem sou
                        </li>
                    </a>
                    <a href="/">
                        <li>
                            loja virtual
                        </li>
                    </a>
                    <a href="/">
                        <li>
                            contato
                        </li>
                    </a>
                    <a href="/">
                        <li className="support">
                            suporte
                        </li>
                    </a>
                </ul>
            </nav>
        </>
    );
}

export default Menu;