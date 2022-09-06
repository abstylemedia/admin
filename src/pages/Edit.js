import React, { useEffect,useState }  from "react";
import { useParams } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Footer from "components/Footer";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import axios from 'axios';

export default function  Edit (){
    if (!localStorage.getItem('admin-key')){
        window.location.href = "/";
      }
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [status, setstatus] = useState("")
  useEffect(() => {
    UsersGet()
  }, [])
 
  const UsersGet = () => {
    axios.get("https://pickedapi.herokuapp.com/orders/"+id)
    .then(res =>  {
        setUsers(res.data);
          console.log(res.data);
        }
      )
    }
    const handleEdit = () =>{
        const Credentials = { status }
        axios.put("https://pickedapi.herokuapp.com/orderp/"+id, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    

    return (
        <>
        <Sidebar/>
        
        <div className='md:ml-64 mt-2'>
            <Card>
                <CardHeader color="purple" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Order Details</h2>
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            style={{ padding: 0 }}
                        >
                            Settings
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    
                        <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                            Product Details
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                                <p><span className="font-bold">Category:</span> {users.category}</p>
                            </div>
                            <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
                                <p><span className="font-bold">Item Name:</span> {users.itemname}</p>
                            </div>
                            <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                               <p><span className="font-bold">Dimensions:</span> In {users.dimensions} <span className="font-bold">H:</span> {users.dimensionsheight} <span className="font-bold">W:</span> {users.dimensionswidth} <span className="font-bold">L:</span> {users.dimensionslength}</p>
                               
                            </div>
                            <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
                                <p><span className="font-bold">Weight:</span> {users.itemweight} {users.itemweighttype}</p>
                            </div>
                        </div>

                        <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                            PickUp Address
                        </h6>
                        <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-12/12 mb-10 font-light">
                                <p><span className="font-bold">Address:</span> {users.picksearch}</p>
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <p><span className="font-bold">AddressType:</span> {users.pickuptype}</p>
                            </div>
                            
                            <div className="w-full lg:w-6/12 lg:px-4 mb-10 font-light">
                            <p><span className="font-bold">Additional Infromation:</span>
                           {users.pickupunit} {users.pickupbuzzer} {users.pickupadditional}</p>
                            </div>
                        </div>
                        <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                            Drop Address
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-12/12 mb-10 font-light">
                                <p><span className="font-bold">Address:</span> {users.dropsearch}</p>
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <p><span className="font-bold">AddressType:</span> {users.droptype}</p>
                            </div>
                            <div className="w-full lg:w-6/12 lg:px-4 mb-10 font-light">
                            <p><span className="font-bold">Additional Infromation:</span> {users.dropunit} {users.dropbuzzer} {users.dropadditional}</p>
                            </div>
                        </div>
                        <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                            Contact
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 mb-10 font-light">
                                <p><span className="font-bold">Phone:</span> {users.phone}</p>
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <p><span className="font-bold">Email:</span> {users.email}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-10 font-light">
                          <select id="countries" onChange={(e) => setstatus(e.target.value)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>{users.status}</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Canceled">Canceled</option>
                          </select>
                        </div>
                        <div className="flex flex-wrap mt-10 font-light justify-center"><Button type='submit' onClick={handleEdit}>Update</Button></div>
                        
                    
                </CardBody>
            </Card>
            
            <Footer />
        </div>
        
        </>
    );
}

