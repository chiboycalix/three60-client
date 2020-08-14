import React from 'react';
import {SearchOutlined} from '@ant-design/icons'
import {
  HeaderWrapper, LogoSection,
  LinksSection, LinksUL,
  LinksA, LinksLI, 
  SearchSection, SearchInput,
  SearchIcon,Img
} from './Header.styles';
import NotesIcon from '../../Assets/Img/notes.svg';
import LinksIcon from '../../Assets/Img/links.svg';
import TodosIcon from '../../Assets/Img/todo.svg';

const Header  = () => {
  return(
    <HeaderWrapper>
      <LogoSection>
        three60
      </LogoSection>
      <LinksSection>
      <LinksUL>
        <LinksLI>
        <Img src={TodosIcon} alt=""/>
          <LinksA href="#">Todos</LinksA>
        </LinksLI>
        <LinksLI>
        <Img src={NotesIcon} alt=""/>
          <LinksA href="#">Notes</LinksA>
        </LinksLI>
        <LinksLI>
        <Img src={LinksIcon} alt=""/>
          <LinksA href="#">Links</LinksA>
        </LinksLI>
      </LinksUL>
      </LinksSection>
      <SearchSection>
        <SearchIcon>
          <SearchOutlined style={{fontSize: "2.5rem"}}/>
        </SearchIcon>
        <SearchInput type="text" placeholder="Search terms"/>
      </SearchSection>
    </HeaderWrapper>
  )
}

export default Header