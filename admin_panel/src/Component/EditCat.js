// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Modal } from 'react-bootstrap';
// import Category from '../Pages/Category';

// const EditCat = ({id,loading}) => {
//     const [values, setValues] = useState({
//         name: id.name,
//       });
//       const [show, setShow] = useState(false);

//       const handleClose = () => setShow(false);
//       const handleShow = () => setShow(true);
      
//       const handleChange = (event) => {
//         setValues({ ...values, [event.target.name]: [event.target.value] })
//       }
    
//       const handleSubmit = async (id, updatedName) => {
//         try {
//           const response = await axios.put(`http://localhost:5000/api/cat/${id}`, { name: updatedName });
//           alert(response.data.message);
//         } catch (error) {
//           console.error('Error updating category:', error);
//           alert('An error occurred while updating the category');
//         }
//       };
      
      
      
//   return (
//     <div>
//         <button className="btn btn-warning btn-sm" onClick={handleShow}>Edit</button>

// <Modal show={show} onHide={handleClose}>
//   <Modal.Header closeButton>
//     <Modal.Title>Edit Category</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     <form>
//       <div className="form-outline mb-4">
//         <label className="form-label" htmlFor="firstname">Name</label>
//         <input type="text" name='name' value={values.name} onChange={handleChange} id="name" className="form-control" required />
//       </div>
//     </form>
//   </Modal.Body>
//   <Modal.Footer>
//     <Button variant="secondary" onClick={handleClose}>
//       Close
//     </Button>
//     <Button variant="primary" onClick={handleSubmit}>
//       Submit
//     </Button>
//   </Modal.Footer>
// </Modal>

//     </div>
//   )
// }

// export default EditCat
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const EditCat = ({ id, name, loading }) => {
    const [values, setValues] = useState({
        name: name || '',  // Default to an empty string if name is not provided
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }
    
    const handleSubmit = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/cat/${id}`, { name: values.name });
            alert(response.data.message || 'Category updated successfully');
            handleClose();
            loading();  // Assuming loading triggers a re-fetch or UI update
        } catch (error) {
            console.error('Error updating category:', error);
            alert('An error occurred while updating the category');
        }
    };

    return (
        <div>
            <button className="btn btn-warning btn-sm" onClick={handleShow}>Edit</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Category</Modal.Title>
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
        </div>
    );
}

export default EditCat;
