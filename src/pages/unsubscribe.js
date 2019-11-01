import React from "react";

import SubpageHeader from "../components/SubpageHeader";

export default () => (
  <div className="content-container" id="unsubscribe-body">
    <SubpageHeader />

    <h2>YOU HAVE SUCCESSFULY BEEN UNSUBSCRIBED</h2>
    <div className="subpage-content">
      <div className="text">
        <p>
          <span>😔</span>
          We are sorry to see you go, remember you can always resubscribe to our
          newsletter by entering your email below on our footer
        </p>
      </div>
    </div>
  </div>
);
