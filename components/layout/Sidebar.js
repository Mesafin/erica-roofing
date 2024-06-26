import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <ul className="navigation">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="/services">Services</Link>

          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/roof-repairing-services">Roof Repair</Link>
            </li>
            <li>
              <Link href="/flat-roofing-services">Flat Roofing</Link>
            </li>
            <li>
              <Link href="/metal-roofing-services">Metal Roofing</Link>
            </li>
            <li>
              <Link href="/rubber-roofing-services">Rubber Roofing</Link>
            </li>
          </ul>

          <div className="dropdown-btn" onClick={() => handleToggle(2)}>
            <span className="fas fa-angle-down" />
          </div>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
