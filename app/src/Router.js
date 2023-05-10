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
import ListingPage from "./pages/ecommerce/ListingPage";

export default function Router() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />} />

        {/* Connectors */}
        <Route exact path="/elasticsearch" element={<Elasticsearch />} />
        <Route exact path="/app-search" element={<AppSearch />} />
        <Route exact path="/site-search" element={<SiteSearch />} />
        <Route exact path="/workplace-search" element={<WorkplaceSearch />} />
        <Route exact path="/engines" element={<Engines />} />

        {/* Examples */}

        <Route exact path="/search-as-you-type" element={<SearchAsYouType />} />
        <Route
          exact
          path="/customizing-styles-and-html"
          element={<CustomizingStylesAndHtml />}
        />
        <Route
          exact
          path="/search-bar-in-header"
          element={<SearchBarInHeaderIndex />}
        />
        <Route
          exact
          path="/search-bar-in-header/search"
          element={<SearchBarInHeaderSearch />}
        />
        <Route
          exact
          path="/elasticsearch-with-analytics"
          element={<ElasticsearchWithAnalytics />}
        />
        {/* Use cases */}
        <Route exact path="/ecommerce/" element={<EcommerceHome />} />
        <Route exact path="/ecommerce/search" element={<EcommerceSearch />} />
        <Route exact path="/ecommerce/all" element={<ListingPage />} />
        <Route
          exact
          path="/ecommerce/category/:category"
          element={<EcommerceCategory />}
        />
      </Routes>
    </div>
  );
}
