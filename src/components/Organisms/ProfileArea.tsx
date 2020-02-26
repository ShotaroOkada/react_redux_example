import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../states';
import Label from '../Atoms/Label';
import ListLabel from '../Atoms/ListLabel';
import GridArea from '../../styles/GridArea';
import { HomeGridArea } from '../Pages/TaskPage';

const ProfileArea: React.FC = () => {
  const user = useSelector<RootState, RootState['user']>(state => state.user);
  const tasks = useSelector<RootState, RootState['tasks']>(state => state.tasks);
  if (user.name) {
    return (
      <GridArea area={HomeGridArea.Profile}>
        <Label text={`Name: ${user.name}`} />
        <Label text={`Age: ${user.age}`} />
        <Label text="Tasks:" />
        {tasks.map((task, index) => {
          return <ListLabel key={task + index} text={task} />
        })}
      </GridArea>
    )
  } else {
    return (
      <GridArea area={HomeGridArea.Profile}>
        <Label text="login failed" />
      </GridArea>
    )
  }
}

export default ProfileArea;