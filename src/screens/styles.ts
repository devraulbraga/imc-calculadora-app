import styled from "styled-components/native";
import {Calculator} from 'phosphor-react-native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;
export const Form = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    flex-direction: row;
    justify-content: center;
    border-radius: 6px;
    margin-bottom: 10px;
`;
export const Icon = styled(Calculator).attrs(({ theme }) => ({
    size: 56,
    color: theme.COLORS.GREEN_700
}))`
    align-self: center;
`;