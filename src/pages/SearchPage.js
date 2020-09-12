import React from "react";
import "./SearchPage.css";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import useGoogleSearch from "../useGoogleSearch";
import { useStateValue } from "../StateProvider";
// import Response from "../response";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  // MOCK API CALL
  //   const data = Response;
  //   console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link className="searchPage__logo" to="/">
          <p>hello_</p>
          <p>_world</p>
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>
      {/* {true && ( */}
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_thumbnail?.length > 0 &&
                  item.pagemap?.cse_thumbnail[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_thumbnail[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
