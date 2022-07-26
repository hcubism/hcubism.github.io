const TypeRatios = {
  MinorSecond: 1.067,
  MajorSecond: 1.125,
  MinorThird: 1.2,
  MajorThird: 1.25,
  PerfectFourth: 1.333,
  AugmentedFourth: 1.414,
  PerfectFifth: 1.5,
  GoldenRatio: 1.618,
}

const baseTypeUnit = 'rem'
const baseTypeSize = 1

const typeLevels = [4, 3, 2, 1]

let levelSize = baseTypeSize;

const generator = (typeSizeRatio) => {
  const generatedValues = {};

  typeLevels.forEach((level) => {
    const fluidReduction = levelSize > 4 ? .5 : .33;
    let fluidMin = levelSize - (fluidReduction * levelSize);
    if (fluidMin < 1) {
      fluidMin = 1;
    }
    const fluidScaler = levelSize - fluidMin + 4;

    levelSize = levelSize * typeSizeRatio;

    generatedValues[`h${level}`] = `clamp(${fluidMin}rem, ${fluidScaler}vw + 1rem, ${levelSize}${baseTypeUnit})`
    // return `
    //   h${level} {
    //     font-family: 'Merriweather Sans', 'Helvetica Neue', Helvetica, sans-serif;
    //     text-rendering: optimizeLegibility;
    //     margin-top: 0;
    //     font-size: clamp(${fluidMin}rem, ${fluidScaler}vw + 1rem, ${levelSize}${baseTypeUnit});
    //     margin-bottom: 0.65em;
    //     line-height: calc(2px + 2ex + 2px);
    //   }
    // `
  });

  return generatedValues;
}

module.exports = generator(TypeRatios.MajorThird);
