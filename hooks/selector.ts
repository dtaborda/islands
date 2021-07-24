import { useState } from 'react';

const genSelectorOption = (max: number) => {
  const options = []
  for (let index = 5; index <= max; index++) {
    options.push({ value: index, label: `${index}`})
  }
  return options;
}

export function useSelector() {
  const tinyWorldHeightOptions = genSelectorOption(8)
  const tinyWorldWidthOptions = genSelectorOption(12)
  const [tinyWorldHeight, setTinyWorldHeight] = useState(tinyWorldHeightOptions[3])
  const [tinyWorldWidth, setTinyWorldWidth] = useState(tinyWorldWidthOptions[0])

  return {
    tinyWorldHeightOptions,
    tinyWorldWidthOptions,
    tinyWorldHeight,
    tinyWorldWidth,
    setTinyWorldHeight,
    setTinyWorldWidth,
  }
}