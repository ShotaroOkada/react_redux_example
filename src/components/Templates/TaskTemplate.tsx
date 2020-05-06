import React from 'react';
import ProfileArea from '../Organisms/ProfileArea';
import AddTaskArea from '../Organisms/AddTaskArea';
import styled from 'styled-components';

enum Area {
  Profile = 'Profile',
  AddTask = 'AddTask',
}

// Gridの設定をし、areaを指定してOrganismsを呼び出す
const TaskTemplate: React.FC = () => {
  return (
    <GridLayout>
      <ProfileArea area={Area.Profile} />
      <AddTaskArea area={Area.AddTask} />
    </GridLayout>
  )
}

export default TaskTemplate;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
   " Profile AddTask "
`;