import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteOffer({ offerID, onDelete }) {
  const handleDeleteOffer = async () => {
    try {
      const response = await fetch(`http://localhost:8888/datubazes/estate-main/elite-estate/utilities/deleteOffer.php?offerID=${offerID}`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        console.log('offer ID:', data); 
        onDelete(offerID);
      } else {
        console.error('Task deletion failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button className="buttonActionMAIN2" onClick={() => handleDeleteOffer(offerID)}>DELETE</button>
    </div>
  );
}


export default DeleteOffer;

