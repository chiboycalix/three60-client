import styled from 'styled-components';

export const HeaderWrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 4rem 2rem 10rem;
  background-color: #ffffff;
  min-height: 2vh;
`
export const LogoSection = styled('div')`
  flex-basis: 10%;
  flex-shrink: 1;
  flex-grow: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #4673E4;
`

export const LinksSection = styled('div')`
  flex-basis: 10%;
  flex-shrink: 1;
  flex-grow: 1;

`
export const LinksUL = styled('ul')`
  display: flex;
  list-style-type: none;
`
export const LinksLI = styled('li')`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;
 &:not(:last-child){
   margin-right: 4rem;
 }
`
export const Img = styled('img')`
  margin-right: 1rem;
 `
export const LinksA = styled('a')``

export const SearchSection = styled('div')`
  flex-basis: 70%;
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
`
export const SearchInput = styled('input')`
  padding: 1.5rem 2rem 1.5rem 5%;
  width: 40%;
  background: #F6F7FB;
  border-radius: 999px;
  border: none;
  outline: none;
  font-size: 1.6rem;
  font-weight: 300;

 ::placeholder{
  font-size: 14px;
  line-height: 151.5%;  
  color: rgba(152, 152, 152, 0.94);
 }
`

export const SearchIcon = styled('div')`

position: absolute;
top: 1.25rem;
left: 61%;
`