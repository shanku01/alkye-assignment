
import logo from "../asssets/icons/testLogo.svg";

export default function Header () {
    return (
        <header className="header text-white p-4">
            <div className="Logo flex items-center gap-2">
              <img src={logo.src} alt="Logo" width={100} height={59} />
            </div>
            <h1 className="text-2xl font-bold header-text">alkye</h1>
            <p className="header-subext">The easiest test you will ever do</p>
          </header>
    )
}