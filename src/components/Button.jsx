import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  font-family: 'MuseoNormal';
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
  border: ${(props) =>
    props.withBorder ? `1px solid ${props.theme.white}` : 'none'};
  background-color: ${(props) => props.greenBg && props.theme.mainGreen};
  background-color: ${(props) => props.salmonBg && props.theme.salmon};
  background-color: ${(props) => props.blueBg && props.theme.mainBlue};
  background-color: ${(props) => props.greyBg && props.theme.darkGrey};
  &:hover {
    color: white;
  }
`;

const Button = ({
  children,
  buttonType,
  greenBg,
  salmonBg,
  blueBg,
  disabled,
  greyBg,
  withBorder,
  functionToClick,
}) => {
  return (
    <ButtonStyled
      type={buttonType}
      greenBg={greenBg}
      salmonBg={salmonBg}
      blueBg={blueBg}
      disabled={disabled}
      bgNone={greyBg}
      withBorder={withBorder}
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
  buttonType: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  greyBg: PropTypes.string.isRequired,
  withBorder: PropTypes.string.isRequired,
  functionToClick: PropTypes.func.isRequired,
};

export default Button;
