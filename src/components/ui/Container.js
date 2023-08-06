import styled from 'styled-components';
import { breakpoints } from "styleConfig/breakpoints";


export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px; 
  min-height: 760px;
  max-height: 780px;
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px 0;
  border-radius: ${p => p.theme.radii.normal};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  @media (${breakpoints.mobile}) {
  min-width: 370px;
  };
  `;
