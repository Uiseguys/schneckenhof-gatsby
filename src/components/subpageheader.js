import React, { memo } from "react"
import { logo } from "../assets"

const SubpageHeader = () => (
  <header className="subpage">
    <div className="branding">
      <a href="/">
        <img src={logo} />
      </a>
    </div>
  </header>
)

export default memo(SubpageHeader)
