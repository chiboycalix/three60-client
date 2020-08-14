import React from 'react';
import { HomeOutlined } from '@ant-design/icons'


export const TodoSidebarLinks = [
  {
    id: 1,
    name: 'All Todos',
    path: '/',
    count: 3,
    icon: <HomeOutlined />
  },
  {
    id: 2,
    name: 'Backlog',
    path: '/backlog',
    count: 3,
    icon: <HomeOutlined />
  },
  {
    id: 3,
    name: 'In Progress',
    path: '/inprogress',
    count: 3,
    icon: <HomeOutlined />
  },
  {
    id: 4,
    name: 'Finished',
    path: '/finished',
    count: 3,
    icon: <HomeOutlined />
  },
  {
    id: 5,
    name: 'Overdue',
    path: '/overdue',
    count: 3,
    icon: <HomeOutlined />
  },
  {
    id: 6,
    name: 'Trash',
    path: '/trash',
    count: 3,
    icon: <HomeOutlined />
  }
]