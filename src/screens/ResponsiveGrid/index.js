import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';

import {
  Row, Column as Col, ScreenInfo, Grid,
} from 'react-native-responsive-grid';
import FeelingItem from './FeelingItem';

// column width (relative to screen size)
const sizes1 = {
  small: {
    sm: 20, md: 16, lg: 20, xl: 20,
  },
  medium: {
    sm: 25, md: 25, lg: 20, xl: 20,
  },
  large: {
    sm: 25, md: 25, lg: 20, xl: 20,
  },
};
const sizes = {
  sm: 33, md: 25, lg: 20, xl: 20,
};

const data = [
  {
    url: 'https://i.pinimg.com/236x/d8/3a/9b/d83a9b6faf2e58ff895342242bd62214.jpg',
    pixelHeight: 35.4,
    pixelWidth: 23.6,
  },
  {
    url: 'https://i.pinimg.com/236x/61/35/93/613593ea3d5537c7f85f7365f0d72f45.jpg',
    pixelHeight: 15.7,
    pixelWidth: 23.6,
  },
  {
    url: 'https://i.pinimg.com/236x/52/7c/66/527c66879c1bbbeaf53938e467ee8927.jpg',
    pixelHeight: 28.9,
    pixelWidth: 23.6,
  },
  {
    url: 'https://i.pinimg.com/236x/16/8e/1e/168e1e2ba9e74baf37e1c64df576b79c.jpg',
    pixelHeight: 32.6,
    pixelWidth: 23.6,
  },
  {
    url: 'https://i.pinimg.com/236x/22/0f/01/220f016c154044a51abca097f7ecc4ea.jpg',
    pixelHeight: 35.4,
    pixelWidth: 23.6,
  },
  {
    url: 'https://i.pinimg.com/236x/14/3a/8c/143a8c283ecaecbf90058ac0f914a1ed.jpg',
    pixelHeight: 17.6,
    pixelWidth: 23.6,
  },
  {
    url: 'https://i.pinimg.com/236x/3d/65/6f/3d656f63189290a84d906b92d0d1565d.jpg',
    pixelHeight: 57.1,
    pixelWidth: 23.6,
  },
  {
    url: 'https://i.pinimg.com/236x/7a/2c/f2/7a2cf28357e37a95dfac3d273ef9cb0a.jpg',
    pixelHeight: 26.5,
    pixelWidth: 19.0,
  },
];

const getCircleSize = (word) => {
  const { length } = String(word);

  if (length < 10) return 64;
  if (length >= 10 && length < 15) return 72;
  if (length >= 15 && length < 20) return 96;
  return 128;
};

const feelingsConst = [
  {
    icon: '😇',
    value: 'peace',
    size: getCircleSize('peace'),
  },
  {
    icon: '😃',
    value: 'happy',
    size: getCircleSize('happy'),
  },
  {
    icon: '🤣',
    value: 'funny',
    size: getCircleSize('funny'),
  },
  {
    icon: '😂',
    value: 'very very fun',
    size: getCircleSize('very very funny'),
  },
  {
    icon: '🤣',
    value: 'funny',
    size: getCircleSize('funny'),
  },
  {
    icon: '🤣',
    value: 'funny',
    size: getCircleSize('funny'),
  },
  {
    icon: '🤯',
    value: 'find my place',
    size: getCircleSize('find my place'),
  },
  {
    icon: '🏎',
    value: 'uhuuuuuuuul amazing...',
    size: getCircleSize('uhuuuuuuuul amazing...'),
  },
];

const highestItemSize = () => {
  let highestSize = 64;
  const sizeDescription = {
    64: 'small',
    96: 'medium',
    128: 'large',
  };

  feelingsConst.forEach((feeling) => {
    if (feeling.size > highestSize) {
      highestSize = feeling.size;
    }
  });


  return { highestSize, sizeDescription: sizeDescription[highestSize] };
};

const layout = (state) => {
  // const highestItem = highestItemSize();
  // console.log('highestItem', highestItem);
  // const size = sizes[highestItem.sizeDescription];
  // console.log(size);
  // const mediaSize = size[ScreenInfo().mediaSize];
  // console.log('mediaSize', mediaSize);

  console.log('ScreenInfo().mediaSize', ScreenInfo().mediaSize);

  const numCols = 4;
  const numRows = Math.ceil(data.length / numCols);
  const colWidth = state.layout.grid ? state.layout.grid.width / numCols : 0;

  const layoutMatrix = []; const
    layoutCols = [];

  for (let col = 0; col < numCols; col++) {
    layoutMatrix.push([]);
    for (let row = 0, i = col; row < numRows; row++, i += numCols) {
      if (feelingsConst[i]) {
        layoutMatrix[col].push(
          <Item
            key={i}
            id={i}
            margin={15}
            icon={feelingsConst[i].icon}
            value={feelingsConst[i].value}
            size={feelingsConst[i].size}
          />,
        );
      }
    }

    const getValue = () => {
      if (col <= 2) return 'right';
      if (col >= 4) return 'left';
      return 'center';
    };

    layoutCols.push(
      <Col
        key={col}
        smSize={state.layout.grid ? sizes.sm : 0}
        mdSize={state.layout.grid ? sizes.md : 0}
        lgSize={state.layout.grid ? sizes.lg : 0}
        xlSize={state.layout.grid ? sizes.xl : 0}
        vAlign="center"
      >
        {layoutMatrix[col]}
      </Col>,
    );
  }

  return layoutCols;
};

const Item = (props) => (
  <Row hAlign="left" vAlign="top">

    <FeelingItem
      icon={props.icon}
      value={props.value}
      size={props.size}
    />
  </Row>
);

export const Home = () => (
  <Grid>
    {({ state, setState }) => (
      (
        <Row fullHeight style={{ backgroundColor: 'lightgray' }}>
          <ScrollView removeClippedSubviews>
            <Row>
              {layout(state)}
            </Row>
          </ScrollView>
        </Row>
      )
    )}
  </Grid>
);

export default Home;
