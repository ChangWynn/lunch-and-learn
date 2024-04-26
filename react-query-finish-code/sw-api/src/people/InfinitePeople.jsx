import InfiniteScroll from "react-infinite-scroller";
import { Person } from "./Person";
import { useInfiniteQuery } from "@tanstack/react-query";

const initialUrl = "https://swapi.dev/api/people/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople() {
  const { data, hasNextPage, fetchNextPage, isLoading, isError, error } = useInfiniteQuery({
    queryKey: ["sw-people"],
    queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    getNextPageParam: (lastPage, allPages) => lastPage.next,
  });

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) {
    return (
      <>
        <h3>Oops, something went wrong!</h3>
        <p>{error.toString()}</p>
      </>
    );
  }

  return (
    <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
      {data.pages.map((pageData) =>
        pageData.results.map((swPeople) => (
          <Person
            key={swPeople.name}
            name={swPeople.name}
            hairColor={swPeople.hairColor}
            eyeColor={swPeople.eyeColor}
          />
        ))
      )}
    </InfiniteScroll>
  );
}
