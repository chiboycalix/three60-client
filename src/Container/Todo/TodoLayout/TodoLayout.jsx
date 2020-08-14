import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {todoRoutes} from '../TodoSidebar/TodoRoutes';
import NotFoundComponent from '@Components/NotFoundComponent'
import Header from '../../Header';
import TodoContent from '../TodoContent';
import TodoSidebar from '../TodoSidebar';
import { TodoLayoutWrapper } from './TodoLayout.styles'
import TodoNotofication from '../TodoNotofication';

const TodoLayout = (props) => {
  return (
    <Router>
      <TodoLayoutWrapper>
        <Header />
        <TodoContent>
          <TodoSidebar props={props}/>
          <Switch>
            {
              todoRoutes.map((todoRoute, id) => {
                return todoRoute.component ? (
                  <Route 
                    key={id}
                    path={todoRoute.path}
                    exact={todoRoute.exact}
                    name={todoRoute.name}
                    render={props => (<todoRoute.component {...props}/>)}
                  />
                ):
                null
              })
            }
            <Route path="*" component={NotFoundComponent}/>
          </Switch>
          <TodoNotofication />
        </TodoContent>
      </TodoLayoutWrapper>
    </Router>
  )
}

export default TodoLayout;