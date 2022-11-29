import {StyleSheet} from 'react-native';
import {textScale} from './responsiveSize';
import colors from './colors';
import fontFamily from './fontFamily';

export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};
export default StyleSheet.create({
  fontSize10: {
    fontSize: textScale(10),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },

  fontSize12: {
    fontSize: textScale(12),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize11: {
    fontSize: textScale(11),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },

  fontSize13: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize15: {
    fontSize: textScale(15),
    color: colors.theme,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },

  fontSize16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize17: {
    fontSize: textScale(17),
    color: colors.blackOpacity70,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },

  fontSize18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize20: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize21: {
    fontSize: textScale(21),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
    fontWeight:"500"
  },
  fontSize24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize26: {
    fontSize: textScale(26),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize27: {
    fontSize: textScale(27),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize37: {
    fontSize: textScale(37),
    color: colors.whiteOpacity80,
    fontFamily: fontFamily.bold,
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  fontBold16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.bold,
    textAlign: 'left',
  },
  fontBold18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.bold,
    textAlign: 'left',
  },
  fontBold24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.bold,
    textAlign: 'left',
  },
  fontBold21: {
    fontSize: textScale(21),
    color: colors.black,
    fontFamily: fontFamily.bold,
    textAlign: 'left',
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadowStyle: {
    backgroundColor: colors.white,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    // borderColor: colors.lightWhiteGrayColor,
    // borderWidth: 0.7,
  },

  fontSize40: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(40),
    color: colors.white,
    textAlign: 'left',
  },
  flexViewHorz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
