import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%; 
    margin: 32px 0; //TOP AND BOTTOM MARGIN : LEFT AND RIGHT MARGIN : 0
`
export const Title = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`
export const SubTitle = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`