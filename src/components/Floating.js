import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icons from './Icons';
import {colors} from '../utils';

const Floating = props => {
  return (
    <TouchableOpacity {...props} activeOpacity={0.7} style={styles.floating}>
      <Icons name="add" size={25} color={colors.colorRed} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floating: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: colors.colorWhite,
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.colorBlack,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 2.32,
    elevation: 5,
  },
});

export default Floating;
