import React, { memo } from "react"

const Navigation = () => (
  <nav className="main-navigation">
    <ul>
      <li>
        <a href="/">
          <span className="icon-i_logo-05" />
          <span className="label">Startseite</span>
        </a>
      </li>

      <li className="active">
        <a href="https://nephele-s5.de/webshop/13.0/shop_core.php?user_id=X1oilwAOdeKJeYXf4OVkqA==&shop_id=X1oilwAOfu5bUG42C9AU7Q==">
          <span className="icon-i_bottles" />
          <span className="label">Shop</span>
        </a>
      </li>

      <li>
        <a href="/weine">
          <span className="icon-i_barrels" />
          <span className="label">Wein-Kategorien</span>
        </a>
      </li>

      <li>
        <a href="/aktuelles">
          <span className="icon-i_news" />
          <span className="label">Aktuelles &amp; Termine</span>
        </a>
      </li>

      <li>
        <a href="/gasthaus">
          <span className="icon-i_lamb" />
          <span className="label">Gasthaus</span>
        </a>
      </li>
    </ul>
  </nav>
)
export default memo(Navigation)
