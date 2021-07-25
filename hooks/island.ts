import { useEffect, useState } from 'react';

export function useIsland({ tinyWorld, landLotDataSelected }: any) {
  const [islandCounter, setIslandCounter] = useState(0)
  
  const rows = tinyWorld.length;
  const columns = tinyWorld[0].length;
  const tinyWorldPinted: any[][] = Array(rows).fill(null).map(() => Array(columns).fill(0));

  const visited: any[] = []
  const doUnion = (a: number, b: number) => {
  // get the root visited of a and b, and set the one's parent to the other
      while (visited[a] != a)
        a = visited[a];
      while (visited[b] != b)
        b = visited[b];
        visited[b] = a;
  }
 
  const unionCoords = (x: number, y: number, x2: number, y2: number) => {
    if (y2 < columns && x2 < rows && tinyWorld[x][y] && tinyWorld[x2][y2])
      doUnion(x*columns + y, x2*columns + y2);
  }
 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const numberOfIslands = () => {  
    const islandValues = []

    // set up visited
    for (let i = 0; i < rows*columns; i++)
      visited[i] = i;
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < columns; y++) {
        unionCoords(x, y, x+1, y);
        unionCoords(x, y, x, y+1);
      }
    }

    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < columns; y++) {
        if (tinyWorld[x][y] === 0) {
          tinyWorldPinted[x][y] = -1
          continue
        }
        let c = x*columns + y;
        
        while (visited[c] !== c) {
          c = visited[c]
        }
        tinyWorldPinted[x][y] = c
        islandValues.indexOf(c) === -1 && islandValues.push(c)
      }
    }
  
    return islandValues.length
  }

  useEffect(() => {
    if (tinyWorld[0].length > 0 && landLotDataSelected) {
      const cIsland = numberOfIslands()

      setIslandCounter(cIsland)
    }
  }, [tinyWorld, landLotDataSelected, numberOfIslands])

  return {
    islandCounter,
    tinyWorldPinted,
  }
}