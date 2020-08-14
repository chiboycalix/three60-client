import React from 'react'
import Loadable from 'react-loadable';
import Loader from '@Loader';

const TodoDashboard = Loadable({
  loader: () => import('@Views/Todos/TodosDashboard'),
  loading: () => <Loader />,
  delay: 500,
  timeout: 10000
});

const TodoBackLog = Loadable({
  loader: () => import('@Views/Todos/TodosBackLog'),
  loading: () => <Loader />,
  delay: 500,
  timeout: 10000
});


export const todoRoutes = [
  {
    path: "/",
    exact: true,
    name: "All Todos",
    component: TodoDashboard
  },
  {
    path: "/backlog",
    exact: true,
    name: "Backlog",
    component: TodoBackLog
  }
]