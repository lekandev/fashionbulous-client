const NavBar = () => {
    return (
        <div className="navbar">
            <h1>Fashionbulous</h1>
            <ul>
                <li>
                    About
                </li>
                <li>
                    Featured
                </li>
                <li>
                    Newest
                </li>
                <li>
                    Designer
                </li>
            </ul>

            <style jsx>
                {`
                    .navbar {
                        display: flex;
                        justify-content: space-between;
                        padding: 10px;
                        border-radius: 100px;
                        background-color: #FFFDD0;
                        position: relative;
                        top: 10px;
                    }

                    h1 {
                        font-weight: 700;
                    }

                    ul {
                        display: flex;
                        list-style-type: none;
                    }

                    li {
                        margin: 10px;
                    }
                `}
            </style>
        </div>
    )
}

export default NavBar
