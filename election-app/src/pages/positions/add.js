import React, { useState } from 'react'
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import Card from '../../components/card/';

const AddPositions = () => {
    const [state, setState] = useState({
        positionName:"",
        description:"",

    });
  return (
    <form>

<Card titile="Add Position">

<Input 
type="text"
id="positionId"
name="PositionName"
title="Positon Name"

onChange={(e) => {
    setState((prevState) => {
        return {...prevState, positionName: e .target.value};
    })
}}
/>


<Input 
type="textarea"
id="description"
name="description"
title="Description"

onChange={(e) => {
    setState((prevState) => {
        return {...prevState, positionName: e .target.value};
    })
}}
/>
<Button type="submit" title="submit" />

</Card>
    </form>
  )
}

export default AddPositions;