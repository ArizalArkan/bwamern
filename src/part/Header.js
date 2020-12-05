import React from "react";
import Button from "elements/Button";
import BrandIcon from "part/iconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  const navItem = [
    { text: 'Home', href: '/' },
    { text: 'Browse By', href: '/browse-by' },
    { text: 'Stories', href: '/stories' },
    { text: 'Agent', href: '/agent' }
  ]

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {navItem.map(nav => (
                <li className={`nav-item ${getNavLinkClass(`${nav.href}`)}`}>
                  <Button className="nav-link" type="link" href={`${nav.href}`}>
                    {nav.text}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
