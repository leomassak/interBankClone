import styled from "styled-components/native";
import { Dimensions, Platform, StatusBar } from "react-native";
import Animated from "react-native-reanimated";

import ScaleUtils from '../../utils/scale';

const statusBarHeight =
  Platform.OS === "android" ? StatusBar.currentHeight : 0;

export const Container = styled.View`
  padding: ${20 + statusBarHeight}px 20px 0;
  height: ${ScaleUtils.ScreenHeight * 0.24}px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
`;

export const AccountInfo = styled(Animated.View)`
  position: absolute;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSide = styled(Animated.View)``;

export const AccountBalanceLabel = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const AccountBalanceRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AccountBalance = styled.View`
  flex-direction: row;
`;

export const AccountBalanceCurrency = styled.Text`
  margin-right: 3px;
  font-size: 20px;
  color: #fff;
`;

export const AccountBalanceValue = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

export const VisibilityToggle = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const AccountBalanceInfo = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const RightSide = styled(Animated.View)``;

export const Avatar = styled.TouchableOpacity`
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const Initials = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #ff500f;
`;

export const SideIndicator = styled.View`
  flex-direction: row;
  margin-top: 18px;
`;

export const ActiveIndicator = styled(Animated.View)`
  position: absolute;
`;

export const LeftEmptyIndicator = styled.View`
  margin-right: 5px;
`;

export const RightEmptyIndicator = styled.View``;