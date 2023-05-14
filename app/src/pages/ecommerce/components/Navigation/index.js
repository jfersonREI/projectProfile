import { SearchProvider, SearchBox } from "@elastic/react-search-ui";
import { config } from "./config";
import React from "react";
import { ReactComponent as Logo } from "../../../../assets/logos/logo-rei.svg";

function InputView({ getAutocomplete, getInputProps, getButtonProps }) {
  return (
    <div className="flex flex-auto justify-self-start py-2">
      <div className="border-gray-600 relative my-2 w-[500px] border bg-rei-blue-80 px-4 py-2 pr-8">
        <input
          id="search"
          {...getInputProps({
            placeholder: "Search for projects...",
          })}
          className="min-w-full border-none bg-rei-blue-80 text-white outline-none"
        />
        {getAutocomplete()}
        <div className="searchbar-iconContainer">
          <svg
            className="absolute right-3 top-3 w-[16px] text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

function getRaw(result, value) {
  if (!result[value] || !result[value].raw) return;
  return result[value].raw;
}

function getSnippet(result, value) {
  if (!result[value] || !result[value].snippet) return;
  return result[value].snippet;
}

function getSuggestionTitle(suggestionType, autocompleteSuggestions) {
  if (autocompleteSuggestions.sectionTitle) {
    return autocompleteSuggestions.sectionTitle;
  }

  if (
    autocompleteSuggestions[suggestionType] &&
    autocompleteSuggestions[suggestionType].sectionTitle
  ) {
    return autocompleteSuggestions[suggestionType].sectionTitle;
  }
}

function getSuggestionDisplayField(suggestionType, autocompleteSuggestions) {
  if (autocompleteSuggestions.queryType === "results") {
    return autocompleteSuggestions.displayField;
  }

  if (
    autocompleteSuggestions[suggestionType] &&
    autocompleteSuggestions[suggestionType].queryType === "results"
  ) {
    return autocompleteSuggestions[suggestionType].displayField;
  }
}

function AutocompleteView({
  autocompleteResults,
  autocompletedResults,
  autocompleteSuggestions,
  autocompletedSuggestions,
  className,
  getItemProps,
  getMenuProps,
}) {
  let index = 0;
  return (
    <div
      {...getMenuProps({
        className: ["sui-search-box__autocomplete-container", className].join(
          " "
        ),
      })}
    >
      <div className="flex">
        {!!autocompleteSuggestions &&
          Object.entries(autocompletedSuggestions).map(
            ([suggestionType, suggestions]) => {
              return (
                <React.Fragment key={suggestionType}>
                  {suggestions.length > 0 && (
                    <ul className="sui-search-box__suggestion-list">
                      {suggestions.map((suggestion) => {
                        index++;
                        if (suggestion.queryType === "results") {
                          let displayField = null;
                          if (autocompleteSuggestions === true) {
                            displayField = Object.keys(suggestion.result)[0];
                          } else {
                            displayField = getSuggestionDisplayField(
                              suggestionType,
                              autocompleteSuggestions
                            );
                          }
                          const suggestionValue =
                            suggestion.result[displayField]?.raw;

                          return (
                            <li
                              {...getItemProps({
                                key: suggestionValue,
                                index: index - 1,
                                item: {
                                  suggestion: suggestionValue,
                                  ...suggestion.result,
                                },
                              })}
                              data-transaction-name="query suggestion"
                            >
                              <span>{suggestionValue}</span>
                            </li>
                          );
                        }

                        return (
                          <li
                            {...getItemProps({
                              key:
                                suggestion.suggestion || suggestion.highlight,
                              index: index - 1,
                              item: suggestion,
                            })}
                            data-transaction-name="query suggestion"
                          >
                            {suggestion.highlight ? (
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: suggestion.highlight,
                                }}
                              />
                            ) : (
                              <span>{suggestion.suggestion}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </React.Fragment>
              );
            }
          )}
        {!!autocompleteResults &&
          !!autocompletedResults &&
          autocompletedResults.length > 0 && (
            <ul className="flex w-[300px] flex-col">
              {autocompletedResults.map((result) => {
                index++;
                const titleField =
                  typeof autocompleteResults === "boolean"
                    ? null
                    : autocompleteResults.titleField;
                const titleSnippet = getSnippet(result, titleField);
                const titleRaw = getRaw(result, titleField);
                // eslint-disable-next-line no-console
                return (
                  <li
                    {...getItemProps({
                      key: result.id.raw,
                      index: index - 1,
                      item: result,
                    })}
                    className="mb-2 flex space-x-5"
                  >
                    <img
                      className="m-auto max-w-[30px] flex-shrink-0"
                      src={result.image.raw}
                      alt=""
                    />
                    <h5 className="flex-1 text-sm">{titleRaw}</h5>
                  </li>
                );
              })}
            </ul>
          )}
      </div>
    </div>
  );
}

function Navigation(props) {
  return (
    <div className="navigation bg-rei-blue-90">
      <div className="mx-auto flex max-w-[1300px] justify-between px-6">
        <div className="mr-10 flex items-center">
          <a className="text-white hover:text-rei-blue-10" href="/ecommerce">
            <Logo className="fill-current w-12" />
          </a>
          <nav className="ml-4 py-4">
            <a
              className="inline-flex cursor-pointer px-2 text-white"
              href="/ecommerce"
            >
              Home
            </a>
            <a
              className="inline-flex cursor-pointer px-2 text-white"
              href="/ecommerce/all"
            >
              Browse
            </a>
          </nav>
        </div>
        <SearchProvider
          config={{
            ...config,
            trackUrlState: false,
          }}
        >
          <div className="flex flex-auto justify-self-start py-2">
            <SearchBox
              onSelectAutocomplete={(suggestion, config, defaultHandler) => {
                // eslint-disable-next-line
                if (!suggestion.name && suggestion.category) {
                  window.location.href =
                    "/ecommerce/category/" + suggestion.suggestion;
                }
                defaultHandler(suggestion);
              }}
              onSubmit={(searchTerm) => {
                // eslint-disable-next-line no-debugger
                window.location.href = "/ecommerce/search?q=" + searchTerm;
              }}
              autocompleteResults={{
                sectionTitle: "Products",
                titleField: "name",
                urlField: "url",
              }}
              autocompleteSuggestions={{
                popularQueries: {
                  sectionTitle: "Popular queries",
                  queryType: "results",
                  displayField: "name",
                },
                categories: {
                  sectionTitle: "Categories",
                  queryType: "results",
                  displayField: "category",
                },
              }}
              inputView={InputView}
              autocompleteView={AutocompleteView}
            />
          </div>
        </SearchProvider>
      </div>
    </div>
  );
}

export default Navigation;
