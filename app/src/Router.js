import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Root from "./pages/root";
import Elasticsearch from "./pages/elasticsearch";
import ElasticsearchWithAnalytics from "./pages/elasticsearch-with-analytics";
import Engines from "./pages/engines";
import AppSearch from "./pages/app-search";
import SiteSearch from "./pages/site-search";
import WorkplaceSearch from "./pages/workplace-search";
import SearchAsYouType from "./pages/search-as-you-type";
import CustomizingStylesAndHtml from "./pages/customizing-styles-and-html";
import SearchBarInHeaderIndex from "./pages/search-bar-in-header/index";
import SearchBarInHeaderSearch from "./pages/search-bar-in-header/search";
import EcommerceHome from "./pages/ecommerce";
import EcommerceSearch from "./pages/ecommerce/Search";
import EcommerceCategory from "./pages/ecommerce/Category";
//import { ApmRoute } from "@elastic/apm-rum-react";
import ListingPage from "./pages/ecommerce/ListingPage";

export default function Router() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />} />

        {/*
        <ApmRoute exact path="/" component={Root} />
  */}

        {/* Connectors */}
        <Route exact path="/elasticsearch" element={<Elasticsearch />} />
        {/* <ApmRoute exact path="/elasticsearch" component={Elasticsearch} />*/}
        <Route exact path="/app-search" element={<AppSearch />} />
        {/* <ApmRoute exact path="/app-search" component={AppSearch} />*/}

        <Route exact path="/site-search" element={<SiteSearch />} />
        {/* <ApmRoute exact path="/site-search" component={SiteSearch} />*/}

        <Route exact path="/workplace-search" element={<WorkplaceSearch />} />
        {/* <ApmRoute exact path="/workplace-search" component={WorkplaceSearch} />*/}

        <Route exact path="/engines" element={<Engines />} />
        {/* <ApmRoute exact path="/engines" component={Engines} />*/}

        {/* Examples */}

        <Route exact path="/search-as-you-type" element={<SearchAsYouType />} />
        {/* <ApmRoute
          exact
          path="/search-as-you-type"
          component={SearchAsYouType}
        />*/}

        <Route
          exact
          path="/customizing-styles-and-html"
          element={<CustomizingStylesAndHtml />}
        />
        {/* <ApmRoute
          exact
          path="/customizing-styles-and-html"
          component={CustomizingStylesAndHtml}
        />*/}

        <Route
          exact
          path="/search-bar-in-header"
          element={<SearchBarInHeaderIndex />}
        />
        {/* <ApmRoute
          exact
          path="/search-bar-in-header"
          component={SearchBarInHeaderIndex}
        />*/}
        <Route
          exact
          path="/search-bar-in-header/search"
          element={<SearchBarInHeaderSearch />}
        />
        {/* <ApmRoute
          exact
          path="/search-bar-in-header/search"
          component={SearchBarInHeaderSearch}
        />*/}
        <Route
          exact
          path="/elasticsearch-with-analytics"
          element={<ElasticsearchWithAnalytics />}
        />
        {/* <ApmRoute
          exact
          path="/elasticsearch-with-analytics"
          component={ElasticsearchWithAnalytics}
        />*/}

        {/* Use cases */}
        <Route exact path="/ecommerce/" element={<EcommerceHome />} />
        {/* <ApmRoute exact path="/ecommerce/" component={EcommerceHome} />*/}
        <Route exact path="/ecommerce/search" element={<EcommerceSearch />} />
        {/* <ApmRoute exact path="/ecommerce/search" component={EcommerceSearch} />*/}
        <Route exact path="/ecommerce/all" element={<ListingPage />} />
        {/* <ApmRoute exact path="/ecommerce/all" component={ListingPage} />*/}
        <Route
          exact
          path="/ecommerce/category/:category"
          element={<EcommerceCategory />}
        />
        {/* <ApmRoute
          exact
          path="/ecommerce/category/:category"
          component={EcommerceCategory}
        />*/}
      </Routes>
    </div>
  );
}
