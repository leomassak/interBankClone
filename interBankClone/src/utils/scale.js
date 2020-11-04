import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const ScreenWidth = width;
const ScreenHeight = height;
const DevicePixelRatio = PixelRatio.get();

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const gridPadding = (size, count) => (width - size) / count;
const pixelScale = (size) => PixelRatio.roundToNearestPixel(size * (width / guidelineBaseWidth));
const nearestWidthScale = (size) => PixelRatio.roundToNearestPixel(width * (size / 100));
const verticalScale = (size) => size * (height / guidelineBaseHeight);
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
const scale = (size) => size / (width / guidelineBaseWidth);

export default {
    pixelScale,
    nearestWidthScale,
    verticalScale,
    moderateScale,
    scale,
    ScreenWidth,
    ScreenHeight,
    DevicePixelRatio,
    gridPadding,
}