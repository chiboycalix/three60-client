import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  TodoSidebarWrapper, TodoSidebarLinksWrapper,
  LinkText, TodoCount
} from './TodoSidebar.styles';
import {TodoSidebarLinks} from './TodoSidebarLinks'


const TodoSidebar = ({props}) => {
  const [url, setUrl] = useState(createBrowserHistory().location.pathname)

const handleClick = () => {
  const history = createBrowserHistory();
  setUrl(history.location.pathname)
}
  return(
    <TodoSidebarWrapper>
      {
      TodoSidebarLinks.map((link, _index) => {
        return(
          <TodoSidebarLinksWrapper key={_index} isActive={link.path === createBrowserHistory().location.pathname}>
              <LinkText onClick={() => handleClick()}><Link to={link.path}>{link.name}</Link> </LinkText>
              <TodoCount>
                {link.count}
              </TodoCount>
          </TodoSidebarLinksWrapper>
          )
        })
      }
    </TodoSidebarWrapper>
  )
}

export default TodoSidebar;