import { Container, Icon, ButtonIconStyleProps } from "./styles";
import {MaterialIcons } from '@expo/vector-icons'

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap //entrega os icons
  type?: ButtonIconStyleProps;
};
export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: Props) {
    return (
        <Container {...rest}>
            <Icon
            name={icon}
            type={type}
            />
        </Container>
    )
}