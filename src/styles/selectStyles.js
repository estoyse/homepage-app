import styled from 'styled-components';
import chevron from '../../chevron.svg';

export const SelectStyles = styled.select`
  border: none;
  outline: none;
  padding: 5px;
  background: no-repeat;
  font-weight: 400;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url(${chevron});
  color: #fff;
  background-color: #0009;
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 10px;
  cursor: pointer;
`;
