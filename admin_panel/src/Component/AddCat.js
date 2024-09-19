
// export default AddCat
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const AddCat = ({ loading }) => {
  const [values, setValues] = useState({ name: '' });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const Admin = () =>{
    navigate('/Admin',{replace:true})
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value }); // Corrected here
  }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/cat', values);
//       handleClose();
//       alert(res.data);
//       loading();
//     } catch (error) {
//       console.log(error.response?.data || error.message);
//       alert(error.response?.data?.message || error.message);
//     }
//   }
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Log the values to check what is being sent
      console.log('Submitting values:', values);
      
      const res = await axios.post('http://localhost:5000/api/cat', values);
      
      // Check the response structure
      console.log('Response:', res.data);
  
      // Alert the specific message or status
      alert(res.data.message || 'Category added successfully!');
  
      handleClose();
      loading();
    } catch (error) {
      // Handle errors and display them
      console.log('Error:', error.response?.data || error.message);
      alert(JSON.stringify(error.response?.data?.message || error.message));
    }
  };
  
  return (
    <div>
      <button className='btn btn-success'  onClick={handleShow}>ADD</button><br /><br/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                type="text"
                name='name'
                value={values.name}
                onChange={handleChange}
                id="name"
                className="form-control"
                required
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <button type="button" class="btn btn-danger" onClick={Admin}>Go Back</button>
    </div>
  )
}

export default AddCat;
