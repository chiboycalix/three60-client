import React from 'react';
import {TodoContentWrapper} from './TodoContent.styles'

const TodoContent = ({children}) => {
  return(
    <TodoContentWrapper>{children}</TodoContentWrapper>
  )
}

export default TodoContent