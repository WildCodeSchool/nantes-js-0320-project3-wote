import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  font-family: 'MuseoNormal';
  font-size: ${(props) => (props.minSize ? '0.9rem' : '1.2rem')};
  padding: 10px;
  border-radius: 5px;
  border: ${(props) =>
    props.withBorder ? `1px solid ${props.theme.white}` : 'none'};
  background-color: ${(props) => props.greenBg && props.theme.mainGreen};
  background-color: ${(props) => props.salmonBg && props.theme.salmon};
  background-color: ${(props) => props.blueBg && props.theme.mainBlue};
  background-color: ${(props) => props.greyBg && props.theme.darkGrey};
  background-color: ${(props) => props.white && props.theme.white};
  &:hover {
    color: ${(props) => props.theme.white};
    color: ${(props) => props.hoverGreenBg && props.theme.mainGreen};
    color: ${(props) => props.hoverSalmonBg && props.theme.salmon};
    color: ${(props) => props.hoverBlueBg && props.theme.mainBlue};
    color: ${(props) => props.hoverWhite && props.theme.white};
  }
`;

const Button = ({
  children,
  buttonType,
  greenBg,
  salmonBg,
  blueBg,
  white,
  disabled,
  greyBg,
  minSize,
  withBorder,
  functionToClick,
  hoverGreenBg,
  hoverSalmonBg,
  hoverBlueBg,
  hoverWhite,
}) => {
  return (
    <ButtonStyled
      type={buttonType}
      greenBg={greenBg}
      salmonBg={salmonBg}
      blueBg={blueBg}
      greyBg={greyBg}
      white={white}
      disabled={disabled}
      minSize={minSize}
      withBorder={withBorder}
      hoverGreenBg={hoverGreenBg}
      hoverSalmonBg={hoverSalmonBg}
      hoverBlueBg={hoverBlueBg}
      hoverWhite={hoverWhite}
      onClick={functionToClick}
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  greenBg: PropTypes.string.isRequired,
  salmonBg: PropTypes.string.isRequired,
  blueBg: PropTypes.string.isRequired,
  greyBg: PropTypes.string.isRequired,
  white: PropTypes.string.isRequired,
  hoverGreenBg: PropTypes.string.isRequired,
  hoverSalmonBg: PropTypes.string.isRequired,
  hoverBlueBg: PropTypes.string.isRequired,
  hoverWhite: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  withBorder: PropTypes.string.isRequired,
  minSize: PropTypes.string.isRequired,
  functionToClick: PropTypes.func.isRequired,
};

export default Button;
