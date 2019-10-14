const breakPoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  tabletLandscape: '1024px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(max-width: ${breakPoints.mobileS})`,
  mobileM: `(max-width: ${breakPoints.mobileM})`,
  mobileL: `(max-width: ${breakPoints.mobileL})`,
  tablet: `(max-width: ${breakPoints.tablet})`,
  tabletLandscape: `(max-width: ${breakPoints.tabletLandscape})`,
  laptop: `(max-width: ${breakPoints.laptop})`,
  laptopL: `(max-width: ${breakPoints.laptopL})`,
  desktop: `(max-width: ${breakPoints.desktop})`,
  desktopL: `(max-width: ${breakPoints.desktop})`
};
