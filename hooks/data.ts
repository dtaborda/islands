import { useEffect, useState } from 'react';

export function useData({ axlesX, axlesY }: any) {
  const [tinyWorld, setTinyWorld] = useState([[]])

  useEffect(() => {
    setTinyWorld(Array(axlesX).fill(Array(axlesY).fill(0)));
  }, [axlesX, axlesY]);

  return {
    tinyWorld,
  }
}