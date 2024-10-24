import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;
    align-items: center;
    flex-direction: row;
    padding: 24px;
    margin-bottom: 12px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GREEN_700,
    weight: 'fill' // Icon preenchido
}))`
    margin-right: 20px;
`;