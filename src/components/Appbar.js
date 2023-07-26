import React from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import Icons from './Icons';
import Texts from './Texts';
import {colors} from '../utils';

const Appbar = ({onClose, title, backable, headerStyle, backStyle}) => {
  const onBack = () => {
    return (
      <TouchableOpacity
        onPress={onClose}
        activeOpacity={0.6}
        style={[styles.headbackBtn, backStyle]}>
        <Icons name="arrow-back" size={20} color={colors.colorBlack} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.header, headerStyle]}>
      {backable && onBack()}
      <View style={styles.Title}>
        <Texts style={[styles.textTitle, backable && styles.backable]}>
          {title}
        </Texts>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.colorBorderGrey,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 35 : 0,
  },
  headbackBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    borderRadius: 100,
  },

  Title: {
    flex: 1,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backable: {
    marginRight: 35,
  },
  textTitle: {
    color: colors.colorBlack,
    fontWeight: '600',
  },
});

export default Appbar;
