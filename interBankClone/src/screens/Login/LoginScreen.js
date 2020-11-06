import React, { useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

import * as S from './styles';
import { useAuth } from '../../contexts/auth';
import InterLogo from '../../assets/svg/interLogo.svg';
import IsafeLogo from '../../assets/svg/iSafe.svg';
import InterpagLogo from '../../assets/svg/interpagLogo.svg'
import RoundedButton from '../../components/Button/RoundedButton/RoundedButton';
import Parameters from '../../utils/parameters';

export default function LoginScreen({navigation}) {
    const [loading, setLoading] = useState(false);

    const { signIn } = useAuth();

    function handleLogin(email, password) {
        setLoading(true);
        signIn(email, password);
        navigation.navigate('Home');
      }

    return (
        <S.LoginScreenContainer>
            <StatusBar barStyle="light-content" backgroundColor={Parameters.AppColors.primary} />
            <S.LogoContainer>
                <InterLogo width={110} height={40}/>
            </S.LogoContainer>
            <S.CardsContainer>
                <S.CardsView>
                    <S.UserCard>
                        <S.UserInfoView>
                            <S.UserAvatar >
                                <S.UserInitials>LM</S.UserInitials>
                            </S.UserAvatar>
                            <S.UserAccount>
                                <S.UserName>LEONARDO MASSAK</S.UserName>
                                <S.AccountNumber>9999999-9</S.AccountNumber>
                            </S.UserAccount>
                            <S.ChangeAccountButton>
                                <S.ChangeAccountText>TROCAR</S.ChangeAccountText>
                            </S.ChangeAccountButton>
                        </S.UserInfoView>
                        <S.LoginButton onPress={() => handleLogin("leomassak@outlook.com", "123456")}>
                            {!!loading ? <ActivityIndicator size="small" color="#fff"/> : <S.LoginText>Entrar</S.LoginText>}
                        </S.LoginButton>
                    </S.UserCard>
                    <S.IsafeCard>
                        <IsafeLogo width={120} height={40}/>
                        <RoundedButton description="Gerar" /> 
                    </S.IsafeCard>
                    <S.InterPagCard>
                        <InterpagLogo width={130} height={40}/>
                        <RoundedButton description="Pagar" />
                        <RoundedButton description="Receber" />
                    </S.InterPagCard>
                </S.CardsView>
            </S.CardsContainer>
        </S.LoginScreenContainer>
    );
}