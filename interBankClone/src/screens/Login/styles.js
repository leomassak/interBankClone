import styled from 'styled-components/native';

import Parameters from '../../utils/parameters';
import ScaleUtils from '../../utils/scale';

export const LoginScreenContainer = styled.View`
  flex: 1;
  background-color: ${Parameters.AppColors.secondary};
`;

export const LogoContainer = styled.View`
    height: 45%;
    background-color: ${Parameters.AppColors.primary};
    align-items: center;
    justify-content: center;
`;

export const CardsContainer = styled.View`
  flex: 1;
  background-color: ${Parameters.AppColors.secondary};
  padding: 0 20px 20px;
`;

export const CardsView = styled.View`
  position: absolute;
  width: 100%;
  margin-left: 20px;
  top: -35px;
`;

export const UserCard = styled.View`
  background: ${Parameters.AppColors.cardBackground};
  padding: 20px 20px;
  border-radius: 6px;
  align-items: center;
`;

export const UserInfoView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatar = styled.View`
  background: ${Parameters.AppColors.avatarBackground};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const UserInitials = styled.Text`
    color: ${Parameters.AppColors.cardBackground};
    font-size: ${ScaleUtils.pixelScale(18)}px;
    font-weight: bold;
`;

export const UserAccount = styled.View``;

export const UserName = styled.Text``;

export const AccountNumber = styled.Text`
  color: #999;
`;

export const ChangeAccountButton = styled.TouchableOpacity`
  padding: 5px 10px;
  background-color: ${Parameters.AppColors.cardBackground};
  border-width: 1px;
  border-color: rgba(0,0,0,0.4);
  border-radius: 5px;
  margin-left: 15px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: ${Parameters.AppColors.primary};
  width: 70%;
  align-self: center;
  align-items: center;
  padding: 12px 0;
  border-radius: 4px;
  margin-top: 15px;
`;

export const LoginText = styled.Text`
  color: #f5f6fa;
  font-weight: bold;
  font-size: ${ScaleUtils.pixelScale(18)}px;
`;

export const IsafeCard = styled.View`
  background: ${Parameters.AppColors.cardBackground};
  padding: 15px 20px;
  border-radius: 6px;
  align-items: center;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InterPagCard = styled.View`
  background: ${Parameters.AppColors.cardBackground};
  padding: 15px 20px;
  border-radius: 6px;
  align-items: center;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChangeAccountText = styled.Text`
  color: #000;
  font-size: ${ScaleUtils.pixelScale(14)}px;
  font-weight: bold;
`;