import { Results, SearchProvider } from "@elastic/react-search-ui";
import { config } from "./config";

const CustomResultsView = ({ children }) => {
  return (
    <div className="relative overflow-x-auto">
      <ul className="flex snap-x">{children}</ul>
    </div>
  );
};

const CustomResultView = ({ result }) => {
  return (
    <li
      className="hover:text-blue-600 snap-start px-3 py-3"
      style={{ width: "200px" }}
    >
      <a href={result.url.raw}>
        <img
          src={result.image.raw}
          alt={result.name.raw}
          className="h-48 w-48 object-contain"
        />
        <h4 className="truncate text-sm">{result.name.raw}</h4>
      </a>
    </li>
  );
};

export default function ProductCarousel(props) {
  return (
    <SearchProvider config={config(props.filters)}>
      <div className="product-carousel mb-10">
        <h3 className="text-slate-700 text-xl font-semibold leading-8">
          {props.title}
        </h3>
        <Results view={CustomResultsView} resultView={CustomResultView} />
      </div>
    </SearchProvider>
  );
}
