import "./style.scss";

const SideBar = (props) => {
    return (
        <>
            <aside className="sidebar">
                <div className="logo-wrapper">
                    <div className="logo">
                    </div>
                </div>
                <nav>
                    <a href="" className={props.page === 'dashboard' ? 'active' : ''}>
                        <i class="fa-solid fa-house"></i>
                        <p>Dashboard</p>
                    </a>
                    <a href="" className={props.page === 'cars' ? 'active' : ''}>
                        <i class="fa-solid fa-truck"></i>
                        <p>Cars</p>
                    </a>
                </nav>
            </aside>
            <aside className={!!props.hideSideBar === true ? 'hide sub-sidebar' : 'show sub-sidebar'}>
                <p className="title">{props.page}</p>
                <nav>
                    <a>{props.page}</a>
                </nav>
            </aside>
        </>
    );
}
 
export default SideBar;