import React, { useState } from 'react'
import Input from '../../components/input';
import Button from '../../components/button';
import Card from '../../components/card';
export const AddVoter = () => {
    const [state, setState] = useState({
        studentId:"",
        studentName:"",
        email:"",
        telephone:"",
        password:"",
    });

return (
    <div>
        <form>
            <Card>
            <Input name="studentid" id="studentid" type="text" title="Student Id" onChange={(e) => {
                setState(prevState => {
                    return {...prevState, studentId: e.target.value}
                })
            }} />

            <Input name="studentName" id="studentName" type="text" title="Student Name" onChange={(e) => {
                setState(prevState => {
                    return {...prevState, studentName: e.target.value}
                })
            }}  />

            <Input name="email" id="email" type="email" title="Email" onChange={(e) => {
                setState(prevState => {
                    return {...prevState, email: e.target.value}
                })
            }}  />

            <Input name="telephone" id="telephone" type="text" title="tel" onChange={(e) => {
                setState(prevState => {
                    return {...prevState, telephone: e.target.value}
                })
            }}  />

            <Input name="password" id="password" type="password" title="Password" onChange={(e) => {
                setState(prevState => {
                    return {...prevState, password: e.target.value}
                })
            }}  />
            <Button type='submit' title='Submit'/>
            </Card>
        </form>
    </div>
)
}
export default AddVoter;