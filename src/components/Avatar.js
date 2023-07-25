import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Texts from './Texts';
import {colors} from '../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Toastalert from './Toastalert';

const Avatar = ({title, loading, editable = false, avatar, size = 50}) => {
  const [ShowToast, setShowToast] = useState(false);
  const handleCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      maxHeight: 100,
      maxWidth: 100,
      // includeBase64: true,
    });

    console.log(result.assets[0]);
  };
  const handleLibrary = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      maxHeight: 100,
      maxWidth: 100,
      // includeBase64: true,
    });
    console.log(result.assets[0]);
  };
  const handleImageOptions = () => {
    setShowToast(true);
  };
  return (
    <>
      <TouchableOpacity disabled={!editable} onPress={handleImageOptions}>
        {!loading ? (
          <>
            <View
              style={[
                styles.iconAvatar,
                size && {
                  height: size,
                  width: size,
                },
                styles.avatar,
              ]}>
              <Texts style={styles.initialName}>{title}</Texts>
            </View>

            {avatar !== undefined && avatar !== null && avatar !== 'N/A' && (
              <Image
                resizeMode="contain"
                source={{uri: avatar}}
                style={[
                  styles.avatar,
                  styles.absolute,
                  size && {height: size, width: size},
                ]}
              />
            )}
          </>
        ) : (
          <View
            style={[
              styles.loaderImage,
              {
                width: size,
                height: size,
              },
            ]}>
            <ActivityIndicator
              animating
              size={'small'}
              color={colors.colorBlue}
            />
          </View>
        )}
      </TouchableOpacity>

      <Toastalert
        icons={false}
        message="Upload and attach photo."
        close="Upload"
        save="Camera"
        visible={ShowToast}
        onClose={handleLibrary}
        onSave={handleCamera}
      />
    </>
  );
};

Avatar.prototype = {
  avatar: PropTypes.string,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.borderGrayColor,
  },
  iconAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.borderGrayColor,
  },
  loaderImage: {
    borderRadius: 100,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
    backgroundColor: colors.colorDarkGrey,
    borderColor: colors.colorDarkGrey,
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
  },
});

export default Avatar;
