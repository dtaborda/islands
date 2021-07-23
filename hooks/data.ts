import { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ axlesX, axlesY }: any) => {
  const [tinyWorld, setTinyWorld] = useState([[]])

  useEffect(() => {
    setTinyWorld(Array(axlesX).fill(Array(axlesY).fill(0)));
  }, [axlesX, axlesY]);

  return {
    tinyWorld,
  }
}