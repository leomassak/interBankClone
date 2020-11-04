import React from 'react';

import * as S from './styles';

export default function RoundedButton({ icon, description }){
    const ButtonIcon = icon;
  return (
    <S.RoundedButtonContainer >
        <S.RoundedButton>
            {!!icon && <ButtonIcon />}
        </S.RoundedButton>
        <S.RoundeButtonDescription>
            {description}
        </S.RoundeButtonDescription>
    </S.RoundedButtonContainer>
  );
}
