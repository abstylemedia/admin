import React, { useEffect, useState }  from "react";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";
import  Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import axios from 'axios';

export default function   Dashboard (){
  if (!localStorage.getItem('admin-key')){
    window.location.href = "/";
  }
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UsersGet()
  }, [])
  
  const UsersGet = () => {
    axios.get("https://pickedapi.herokuapp.com/order")
    .then(res =>  {
      setUsers(res.data);
        console.log(res.data);
      }
    )
  }
  const UpdateUser = id => {
    window.location = '/update/'+id
  }
 

    return (
        <>
        <Sidebar/>
        
        <div className='md:ml-64 mt-2'>
            <Card>
                <CardHeader color="purple" contentPosition="left">
                    <h2 className="text-white text-2xl">Order Table</h2>
                </CardHeader>
                <CardBody>
                    <div className="overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Order Number
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Category
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Status
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Item Name
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Order Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {users.map((user) => (
                            <tr key={user.ID}>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                              {user.itemname}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                              {user.category}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{user.status}
                                  
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {user.itemname}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {user.createdAt}
                              </th>
                              
                             
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                              <Button onClick={() => UpdateUser(user._id)}>Edit</Button>
                              </th>
                              </tr>
                               ))}
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
            <Footer />
        </div>
        
        </>
    );
}

