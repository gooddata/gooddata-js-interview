/**
 * Couldn't make typescript to work with aliases, every `yarn start` it was overriding my custom ones
 * I personally don't like all this dots on the imports, I rather prefer my custom aliases like -
 *  @utils/
 *  @components/
 */

import React from "react";

import Layout from "../../components/Layout";
import GrossProfitFilter from "../../components/GrossProfitFilter";
import GrossProfitlAllMonths from "../../components/GrossProfitAllMonths";

import "@gooddata/react-components/styles/css/main.css";

interface IGrossProfitProps {
  projectId: string;
}

const GrossProfit: React.FC<IGrossProfitProps> = ({ projectId }) => {
  return (
    <>
      <Layout>
        <div className="profit__container">
          {/* We can separate the parts of the page in different components */}
          <GrossProfitFilter />

          <GrossProfitlAllMonths />
        </div>
      </Layout>
    </>
  );
};

export default GrossProfit;
