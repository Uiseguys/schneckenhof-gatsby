import React from "react";

import SubpageHeader from "../components/SubpageHeader";
import WineNavigation from "../components/WineNavigation";
import Wines from "../components/Wines";
// import { WineFragment } from '../fragments'
import { filterPremium } from "../util";

export default ({ location, data }) => (
  <div className="content-container">
    <SubpageHeader />

    <WineNavigation location={location} />

    <h2>Rotweine</h2>
    <Wines wines={filterPremium(data, false)} />
    {
      //<h3><br /><br />
      //Zur Zeit ist der Shop in Wartung. Bestellungen werden in Kürze wieder
      //möglich sein.<br /><br /><br />
      //</h3>
    }
    <h2>Premium Rotweine</h2>
    <Wines wines={filterPremium(data, true)} />
  </div>
);

export const query = graphql`
  query RedWineQuery {
    allWine(filter: { type: { eq: "red" } }) {
      edges {
        node {
          ...WineFragment
        }
      }
    }
  }
`;
