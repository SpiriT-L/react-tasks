import React, { useEffect, useState } from 'react';
import CharacterList from '../CharacterList/CharacterList';

function Api() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      // setPage(data.pages);
      // console.log(setPage);
    }

    fetchData();
  }, [page]);

  return (
    <>
      <CharacterList characters={characters} page={page} setPage={setPage} />
    </>
  );
}

export default Api;
