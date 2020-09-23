import { Link } from "gatsby"
import React from "react"

type DataProps = {
  siteTitle:  string
}

const Header:React.FC<DataProps> = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
