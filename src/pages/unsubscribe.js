import React from "react";

import SubpageHeader from "../components/SubpageHeader";

export default () => (
  <div className="content-container" id="unsubscribe-body">
    <SubpageHeader />

    <h2>Email abgemeldet</h2>
    <div className="subpage-content">
      <div className="text">
        <p>
          <span>😔</span>
          Sie können sich jederzeit wieder registrieren.
        </p>
      </div>
    </div>
  </div>
);
