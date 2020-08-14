import styled from 'styled-components';

export const TodoSidebarWrapper = styled('div')`
  flex-basis: 5%;
  border-radius: 50px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  justify-content: space-between;
  margin-top: 12rem;
  margin-right: 5rem;
`

export const TodoSidebarLinksWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem .5rem 1.5rem 0rem;
  width: 100%;
  border-left: ${(props) => props.isActive ? "2px solid #4673E4": "none"};
  background: ${(props) => props.isActive ? "rgba(196, 196, 196, 0.1)": "transparent"};

  &:nth-child(1)> div{
    background: rgba(70, 115, 228, 0.06);
    color: #4673E4;
 }
 &:nth-child(2)> div{
    background: rgba(151, 166, 174, 0.11);
    color: #97A6AE;
 }
 &:nth-child(3)> div{
    background: rgba(70, 115, 228, 0.18);
    color: #4673E4;
 }
 &:nth-child(4)> div{
    background: rgba(8, 201, 85, 0.05);
    color: #28BA63;
 }
 &:nth-child(5)> div{
    background: rgba(201, 152, 26, 0.05);
    color: #C9981A;
 }
 &:nth-child(6)> div{
    background: rgba(242, 1, 1, 0.05);
    color: #F20101;
 }
` 

export const LinkText = styled('p')`
color: #000000;
margin-bottom: 1rem;
`
export const TodoCount = styled('div')`
 width: 30px;
 height: 30px;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
`