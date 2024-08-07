const type = {
  regular: "Segoe-UI-Regular",
  bold: "Segoe-UI-Bold",
  italic: "Segoe-UI-Italic",
  boldItalic: "Segoe-UI-Bold-Italic",
  light: "Segoe-UI-Light",
  semiLight: "Segoe-UI-Semi-Light",
  black: "Segoe-UI-Black",
  lightItalic: "Segoe-UI-Light-Italic",
  semiLightItalic: "Segoe-UI-Semi-Light-Italic",
  semiBoldItalic: "Segoe-UI-Semi-Bold-Italic",
  semiBold: "Segoe-UI-Semi-Bold",
  blackItalic: "Segoe-UI-Black-Italic",
};

const size = {
  xxxLarge: 30,
  xxLarge: 34,
  xLarge: 22,
  large: 18,
  medium: 16,
  small: 15,
  xSmall: 12,
  xxSmall: 11,
  xxxSmall: 10,
  xxxxSmall: 8,
};

const lineHeight = {
  xLarge: 30,
  large: 24,
  medium: 22,
  small: 20,
  xSmall: 16,
  xxSmall: 15,
  xxxSmall: 13,
  xxxxSmall: 11,
};

export const typography = {
  xSmallRegular: {
    fontFamily: type.regular,
    fontSize: size.xSmall,
    lineHeight: lineHeight.xSmall,
  },
  smallRegular: {
    fontFamily: type.regular,
    fontSize: size.small,
    lineHeight: lineHeight.small,
  },
  smallSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.small,
    lineHeight: lineHeight.small,
  },
  xxSmallRegular: {
    fontFamily: type.regular,
    fontSize: size.xxSmall,
    lineHeight: lineHeight.xxSmall,
  },
  xxxSmallRegular: {
    fontFamily: type.regular,
    fontSize: size.xxxSmall,
    lineHeight: lineHeight.xxxSmall,
  },
  xxxxSmallRegular: {
    fontFamily: type.regular,
    fontSize: size.xxxxSmall,
    lineHeight: lineHeight.xxxxSmall,
  },

  mediumSmallSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.medium,
    lineHeight: lineHeight.small,
  },
};

export type VariantTypes = keyof typeof typography;

export const font = {
  ...type,
  lineHeight,
  size,
};
