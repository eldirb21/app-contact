import React, {useEffect, useState} from 'react';
import {StyleSheet, Modal, View, TouchableOpacity} from 'react-native';
import {Appbar, Avatar, Textinputs, Texts} from '../../components';
import Func from '../../utils/func';
import {colors} from '../../utils';
let initState = {
  firstName: '',
  lastName: '',
  age: '',
  photo: null,
};
const ContactForm = ({visible, onClose, selectItem, onSave}) => {
  const [errors, seterrors] = useState({});
  const [inputs, setinputs] = useState(initState);
  const [isEdit, setisEdit] = useState(false);

  useEffect(() => {
    if (Object.keys(selectItem).length !== 0) {
      setinputs(selectItem);
      setisEdit(true);
      seterrors({});
    } else {
      setinputs(initState);
      seterrors({});
      setisEdit(false);
    }
  }, [selectItem]);

  const handleInputChange = (value, name) => {
    setinputs({...inputs, [name]: value});
    seterrors({...errors, [name]: ''});
  };

  const handleActions = type => {
    let validate = Func.formValidate(inputs);
    seterrors(validate);
    switch (type) {
      case 'reset':
        onClose(inputs, 'reset');
        break;
      case 'submit':
        Object.keys(validate).length === 0 && onSave(inputs, 'submit', isEdit);
        break;
      default:
        break;
    }
  };
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Appbar
            backable
            headerStyle={styles.header}
            backStyle={styles.backBtn}
            onClose={onClose}
            title={selectItem !== null ? 'Ubah Contact' : 'Tambah Contact'}
          />
          <View style={styles.body}>
            <View style={styles.avatar}>
              <Avatar
                editable
                size={75}
                title={Func.initName(
                  `${inputs.firstName ? inputs.firstName : ''} ${
                    inputs.lastName ? inputs.lastName : ''
                  }`,
                )}
                avatar={inputs.photo}
                onUpload={val => handleInputChange(val, 'photo')}
              />
            </View>
            <Textinputs
              value={inputs.firstName}
              placeholder="First name"
              onChangeText={val => handleInputChange(val, 'firstName')}
              errors={errors?.firstName}
            />
            <Textinputs
              value={inputs.lastName}
              placeholder="Last name"
              onChangeText={val => handleInputChange(val, 'lastName')}
              errors={errors?.lastName}
            />
            <Textinputs
              value={inputs.age?.toString()}
              placeholder="Age"
              onChangeText={val => handleInputChange(val, 'age')}
              errors={errors?.age}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => handleActions('reset')}
              style={[styles.btn, styles.btnCancel]}>
              <Texts style={styles.textCancel}>Cancel</Texts>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleActions('submit')}
              style={styles.btn}>
              <Texts style={styles.textDelete}>Submit</Texts>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  card: {
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: -20,
  },
  backBtn: {
    marginLeft: -20,
  },
  body: {
    width: '100%',
  },
  avatar: {
    alignSelf: 'center',
    marginVertical: 15,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: '3%',
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

export default ContactForm;
