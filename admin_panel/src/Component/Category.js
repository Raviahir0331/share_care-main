import React from 'react'
import AddCat from '../Component/AddCat'
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditCat from '../Component/EditCat';


const Category = () => {
  const [data, setData] = useState()
    const [loading, setloading] = useState(true);
    const handleLoading = () => {
      setloading(true);
    }
    const handleDelete = async (id) => {
      // Show a confirmation dialog to the user
      const confirmed = window.confirm('Are you sure you want to delete this category?');
    
      if (confirmed) {
        try {
          const res = await axios.delete(`http://localhost:5000/api/cat/${id}`);
          
          // Alert the success message
    
    
          handleLoading(); // Trigger a re-render or reload the data
        } catch (error) {
          // Log and alert the error message
          console.error(error.response?.data || error.message);
          alert(error.response?.data?.message || 'An error occurred while deleting the category.');
        }
      } else {
        // If the user cancels, do nothing
        alert('Category deletion canceled.');
      }
    };
    
    useEffect(() => {
        console.log(loading)
        async function fetchdata() {
          try {
            await axios.get('http://localhost:5000/api/cat')
            // .then(res => console.log(res.data))
            .then(res => setData(res.data))
              .catch(err => console.log(err));
          } catch (error) {
            alert(error.message);
          }
          setloading(false);
        }
        fetchdata();
      }, [loading])

  return (
    <>
    <div className='table-responsive m-5'>
       <AddCat loading={handleLoading} />  
       {loading ? (
      <>
        <div className='d-flex justify-content-center text-align-center'>loading...</div>
      </>
    ) : (

    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {data && data.map(e =>{return(<tr key={e._id}>
            <td scope='row'>{e._id}</td>
            <td>{e.name}</td>
            <td className='d-flex justify-content-between' style={{border: '1px solid black'}}>
                  <EditCat id={e._id} loading={handleLoading}/>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(e._id)}>Delete</button>
                </td>
          </tr>)})}
      </tbody>
    </table>
    )}
</div>

    </>
  )
}

export default Category