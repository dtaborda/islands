import { useEffect, useState, useCallback } from 'react';

export function useData({ axlesX, axlesY }: any) {
  const [tinyWorld, setTinyWorld] = useState([[]])

  useEffect(() => {
    const newMatrix: any = Array(axlesY).fill(null).map(() => Array(axlesX).fill(0))
    setTinyWorld([ ...newMatrix ])
  }, [axlesX, axlesY]);

  const onCreateIsland = useCallback(({ axisX, axisY, value }) => {
    setTinyWorld((prevTinyWorldState: any) => {
      prevTinyWorldState[axisY][axisX] = value > 0 ? 0 : 1
      return [...prevTinyWorldState]
    })
  }, []);

  return {
    tinyWorld,
    onCreateIsland,
  }
}