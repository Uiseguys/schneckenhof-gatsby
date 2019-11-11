import React from "react"
import Layout from "../components/layout"

import SubpageHeader from "../components/SubpageHeader"

const Unsubscribe = () => (
  <Layout>
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
  </Layout>
)

export default Unsubscribe
