// DeleteConfirmationModal.js
import React from "react";

const DeleteConfirmationModal = ({ onClose, onConfirm }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <h2>Confirm Deletion</h2>
                    <p>Are you sure you want to delete this product?</p>
                    <div className="modal-buttons">
                        <button onClick={onConfirm}>Yes</button>
                        <button onClick={onClose}>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
