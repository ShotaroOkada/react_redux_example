import React from 'react';
import ProfileArea from '../Organisms/ProfileArea';
import AddTaskArea from '../Organisms/AddTaskArea';
import styled from 'styled-components';

const TaskPage: React.FC = () => {
  return (
    <GridLayout>
      <ProfileArea />
      <AddTaskArea />
    </GridLayout>
  )
}

export default TaskPage;

export enum HomeGridArea {
  Profile = 'Profile',
  AddTask = 'AddTask',
}

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
   " Profile AddTask "
`;