import React, { useState } from 'react'
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import Card from '../../components/card/';

const AddCandidate = () => {
    
    const [state, setState] = useState({
        candidateName:"",
        telephone:"",
         profile:"",
         position:"",

    });
  

return (
    <div>
        <form>
            <Card title='Add Candidates'>
            <Input name="candidateName" id="candidateName" type="text" title="Candidate Name" onChange={(e) => {
                setState(prevState => {
                    return {...prevState, studentId: e.target.value}
                })
            }} />

            <Input name="telephone" id="telephone" type="text" title="Tel" onChange={(e) => {
                setState(prevState => {
                    return {...prevState, studentName: e.target.value}
                })
            }}  />

            <Input name="profile" id="profile" type="profile" title="Profile" onChange={(e) => {
                setState(prevState => {
                    return {...prevState, email: e.target.value}
                })
            }}  />

            <Input name="position" id="position"type="text" title="position" onChange={(e) => {
                setState(prevState => {
                    return {...prevState, telephone: e.target.value}
                })
            }}  />


            <Button type='submit' title='Submit'/>
            </Card>
        </form>
    </div>
  )
}

export default AddCandidate;



