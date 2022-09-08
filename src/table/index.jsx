import React, {useState} from "react";
import { Table, Button  } from "@uitk/react";
import styled from "styled-components";
import {testAPI} from '../services/api'

const StoryWrapper = styled.div`
  background-color: ${props => props.theme.color.background.base.value};
  padding: 10px 20px 20px 20px;
  .uitk-button {
    margin-right: 15px;
    margin-top: 10px;
  }
`;

const config = {
  columns: [
    { label: "Name", key: "name" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
  ],
  caption: {
    headerText: "Mapping Table",
  },
};

// const dataSource = [
//   {
//     id: "1",
//     firstName: "Joe",
//     lastName: "Blogs",
//     date: "1987-08-12",
//     ssn: "SSN_000005",
//   },
// ];

const MappingTable= () => {
  const [users, setUsers] = useState([])
 const getUsers = () => {
  testAPI()
  .then(result => {
    console.log(result)
    // alert(JSON.stringify(result))
    let tempusers = []
    result.map((user,index) => {
      let tempuser = {}
      tempuser.key = index;
      tempuser.name = user.name;
      tempuser.username = user.username;
      tempuser.email = user.email;
      tempusers.push(tempuser);
    })
    setUsers(tempusers);
  }).catch(e => {
    console.log('table error in API call', e)
  })
 }

  return (
    <>
    <StoryWrapper>
    <Button onPress={getUsers}>
      Get Users
    </Button>
    </StoryWrapper>
  {/* <button onClick={() => getUsers()}>Get Users</button> */}
  <Table data={users} config={config} />
    </>
    
  );

}



export default MappingTable;



