import React, { useState } from "react";
import { Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { add } from "react-native-reanimated";
import {
  cond,
  eq,
  Extrapolate,
  set,
  useCode,
  useValue,
} from "react-native-reanimated";
import {
  snapPoint,
  timing,
  usePanGestureHandler,
} from "react-native-redash/lib/module/v1";

import { useAuth } from "../../contexts/auth";

import * as S from "./styles";
import ScaleUtils from '../../utils/scale';

export default function DefaultHeader() {
  const [balanceIsVisible, setBalanceIsVisible] = useState(true);

  const snapPoints = [-width - 20, (-width - 20) / 2, 0];

  const {
    gestureHandler,
    state,
    translation,
    velocity,
  } = usePanGestureHandler();

  const accountInfoTranslateX = useValue(0);
  const accountInfoOffsetX = useValue(0);
  const to = snapPoint(accountInfoTranslateX, velocity.x, snapPoints);

  const { signOut } = useAuth();

  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(accountInfoTranslateX, add(accountInfoOffsetX, translation.x))
      ),
      cond(eq(state, State.END), [
        set(accountInfoTranslateX, timing({ from: accountInfoTranslateX, to })),
        set(accountInfoOffsetX, accountInfoTranslateX),
      ]),
    ],
    []
  );

  return (
    <S.Container>
      <S.HeaderContent>
        <PanGestureHandler {...gestureHandler}>
          <S.AccountInfo
            style={{
              transform: [
                {
                  translateX: accountInfoTranslateX.interpolate({
                    inputRange: [(-width - 20) * 0.5, 0],
                    outputRange: [(-width - 20) * 0.5, 0],
                    extrapolate: Extrapolate.CLAMP,
                  }),
                },
              ],
            }}
          >
            <S.LeftSide
              style={{
                opacity: accountInfoTranslateX.interpolate({
                  inputRange: [(-width - 20) * 0.5, 0],
                  outputRange: [0, 1],
                  extrapolate: Extrapolate.CLAMP,
                }),
              }}
            >
              <S.AccountBalanceLabel>Saldo em conta</S.AccountBalanceLabel>
              <S.AccountBalanceRow>
                <S.AccountBalance>
                  <S.AccountBalanceCurrency>R$</S.AccountBalanceCurrency>
                  <S.AccountBalanceValue>0,00</S.AccountBalanceValue>
                </S.AccountBalance>
                <S.VisibilityToggle
                  onPress={() => setBalanceIsVisible(!balanceIsVisible)}
                >
                  {/* {balanceIsVisible ? (
                    <CustomIcon name="eye-open" size={32} color="#fff" />
                  ) : (
                    <CustomIcon name="eye-close" size={32} color="#fff" />
                  )} */}
                </S.VisibilityToggle>
              </S.AccountBalanceRow>
              <S.AccountBalanceInfo>Atualizado neste momento</S.AccountBalanceInfo>
            </S.LeftSide>
            <S.RightSide
              style={{
                opacity: accountInfoTranslateX.interpolate({
                  inputRange: [(-width - 20) * 0.5, 0],
                  outputRange: [1, 0],
                  extrapolate: Extrapolate.CLAMP,
                }),
              }}
            >
              <S.AccountBalanceLabel>Total investido</S.AccountBalanceLabel>
              <S.AccountBalanceRow>
                <S.AccountBalance>
                  <S.AccountBalanceCurrency>R$</S.AccountBalanceCurrency>
                  <S.AccountBalanceValue>0,00</S.AccountBalanceValue>
                </S.AccountBalance>
                <S.VisibilityToggle
                  onPress={() => setBalanceIsVisible(!balanceIsVisible)}
                >
                  {/* {balanceIsVisible ? (
                    <CustomIcon name="eye-open" size={32} color="#fff" />
                  ) : (
                    <CustomIcon name="eye-close" size={32} color="#fff" />
                  )} */}
                </S.VisibilityToggle>
              </S.AccountBalanceRow>
              <S.AccountBalanceInfo>Atualizado neste momento</S.AccountBalanceInfo>
            </S.RightSide>
          </S.AccountInfo>
        </PanGestureHandler>
        <S.Avatar onPress={() => signOut()}>
          <S.Initials>ID</S.Initials>
        </S.Avatar>
      </S.HeaderContent>
      <S.SideIndicator>
        <ActiveIndicator
          style={{
            transform: [
              {
                translateX: accountInfoTranslateX.interpolate({
                  inputRange: [(-width - 20) * 0.5, 0],
                  outputRange: [31 + 5, 0],
                  extrapolate: Extrapolate.CLAMP,
                }),
              },
            ],
          }}
        >
          {/* <CustomIcon name="minus" size={30} color="#fff" /> */}
        </ActiveIndicator>
        <S.LeftEmptyIndicator>
          {/* <CustomIcon name="minus" size={30} color="rgba(255, 255, 255, 0.3)" /> */}
        </S.LeftEmptyIndicator>
        <S.RightEmptyIndicator>
          {/* <CustomIcon name="minus" size={30} color="rgba(255, 255, 255, 0.3)" /> */}
        </S.RightEmptyIndicator>
      </S.SideIndicator>
    </S.Container>
  );
};