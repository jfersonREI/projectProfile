import { withSearch } from "@elastic/react-search-ui";

function ClearFilters({ filters, clearFilters }) {
  return (
    <div>
      <button className="bg-blue p-4" onClick={() => clearFilters()}>
        Clear {filters.length} Filters
      </button>
    </div>
  );
}

export default withSearch(({ filters, clearFilters }) => ({
  filters,
  clearFilters,
}))(ClearFilters);
