import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const PrimaryText = ({ children, style }) => <Text style={[style, styles.text]}>{children}</Text>;

export default PrimaryText;
