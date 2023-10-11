import Link from "next/Link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" passHref>
            <div className="navbar-item">
              <h1>Content Manager</h1>
            </div>
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="control has-icons-left">
                <input className="input is-rounded" type="email" placeholder="Search" />
                <span className="icon is-left">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
            <Link href="/" passHref>
              <div className="navbar-item is-size-5 has-text-weight-semibold">
                Home
              </div>
            </Link>
            <Link href="/resources/new" passHref>
              <div className="navbar-item is-size-5 has-text-weight-semibold">
                Add
              </div>
            </Link>
            <div className="navbar-item is-size-5 has-text-weight-semibold">
              Features
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
