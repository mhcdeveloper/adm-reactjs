import styled from 'styled-components';
import Colors from './Colors';

interface LabelProps {
    font?: string;
    align?: string;
    weight?: string;
    color?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
}

interface ContainerProps {
    flex?: number;
    width?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    color?: string;
    justify?: string;
    border?: string;
}

interface BtnProps {
    width?: string;
    color?: string;
    background?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
}

//Inicio Containers
export const SafeContainerG = styled.div<ContainerProps>`
    flex: 1;
    background-color: ${props => props.color ? props.color : Colors.transparent};
`;

export const ContainerG = styled.div<ContainerProps>`
    display: flex;
    ${props => props.flex && `flex: ${props.flex};`}
    ${props => props.justify && `justify-content: ${props.justify};`}
    background-color: ${props => props.color ? props.color : Colors.transparent};
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
    padding-top: ${props => props.paddingTop ? props.paddingTop : '0px'};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '0px'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '0px'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '0px'};
`;

export const CenterG = styled.div<ContainerProps>`
    display: flex;
    ${props => props.flex && `flex: ${props.flex};`}
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color ? props.color : Colors.transparent};
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
    padding-top: ${props => props.paddingTop ? props.paddingTop : '0px'};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '0px'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '0px'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '0px'};
`;

export const RowG = styled.div<ContainerProps>`
    display: flex;
    ${props => props.flex && `flex: ${props.flex};`}
    ${props => props.width && `width: ${props.width};`}
    background-color: ${props => props.color ? props.color : Colors.transparent};
    flex-direction: row;
    justify-content: ${props => props.justify ? props.justify : 'center'};
    align-items: center;
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
    padding-top: ${props => props.paddingTop ? props.paddingTop : '0px'};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '0px'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '0px'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '0px'};
    border-radius: ${props => props.border ? props.border : '0px'};
`;

export const ColG = styled.div<ContainerProps>`
    display: flex;
    ${props => props.flex && `flex: ${props.flex};`}
    ${props => props.width && `width: ${props.width};`}
    flex-direction: column;
    justify-content: ${props => props.justify ? props.justify : 'center'};
    align-items: center;
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
    padding-top: ${props => props.paddingTop ? props.paddingTop : '0px'};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '0px'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '0px'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '0px'};
`;

export const FooterG = styled.div<ContainerProps>`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${props => props.color ? props.color : Colors.transparent};
    padding-top: ${props => props.paddingTop ? props.paddingTop : '2.8%'};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '2.8%'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '2.8%'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '2.8%'};
`;

export const WrapG = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

//Inicio Botões
export const BtnG = styled.div<BtnProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${props => props.width && `width: ${props.width};`}
    background-color: ${props => props.background ? props.background : Colors.transparent};
    padding-top: ${props => props.paddingTop ? props.paddingTop : '.8%'};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '.8%'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '.8%'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '.8%'};
    margin: 2% 0 2% 0;    
`;

//Inicio Labels
export const LabelG = styled.span<LabelProps>`
    font-size: ${props => props.font ? props.font : '2.0rem'};
    font-weight: ${props => props.weight ? props.weight : '400'};
    color: ${props => props.color ? props.color : Colors.primaryText};
    text-align: ${props => props.align ? props.align : 'center'};
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
    padding-top: ${props => props.paddingTop ? props.paddingTop : '0px'};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '0px'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '0px'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '0px'};
`;