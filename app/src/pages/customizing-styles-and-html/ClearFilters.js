import { withSearch } from "@elastic/react-search-ui";
import Button from "./../../components/Buttons/Button";

function ClearFilters({ filters, clearFilters }) {
  return (
    <div>
      <Button primary onClick={() => clearFilters()}>
        Clear {filters.length} Filters
      </Button>
    </div>
  );
}

export default withSearch(({ filters, clearFilters }) => ({
  filters,
  clearFilters,
}))(ClearFilters);
