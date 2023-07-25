import React from 'react';
import {View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Texts from './Texts';
import Icons from './Icons';
import {colors} from '../utils';

const Toastalert = ({
  visible,
  message = 'Are you sure you want to delete this contact?',
  close = 'Cancel',
  save = 'Delete',
  icons = true,
  onClose,
  onSave,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      statusBarTranslucent
      transparent>
      <View style={styles.overlay}>
        <View style={styles.card}>
          {icons && <Icons name="info" size={30} />}
          <Texts style={styles.message}>{message}</Texts>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.btn, styles.btnCancel]}>
              <Texts style={styles.textCancel}>{close}</Texts>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSave} style={styles.btn}>
              <Texts style={styles.textDelete}>{save}</Texts>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: colors.colorBorderGrey,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.colorWhite,
    width: '90%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    marginTop: '10%',
    justifyContent: 'space-between',
  },
  btn: {
    width: '46%',
    backgroundColor: colors.colorRed,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  btnCancel: {
    borderWidth: 1,
    backgroundColor: colors.colorTransparent,
  },
  textCancel: {
    color: colors.borderGrayColor,
  },
  textDelete: {
    color: colors.colorWhite,
  },
});

export default Toastalert;
