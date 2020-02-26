import React from 'react'
import AddTask from '../Molecules/AddTask'
import GridArea from '../../styles/GridArea'
import { HomeGridArea } from '../Pages/TaskPage'

const AddTaskArea: React.FC = () => {
  return (
    <GridArea area={HomeGridArea.AddTask}>
      <AddTask />
    </GridArea>
  )
}

export default AddTaskArea