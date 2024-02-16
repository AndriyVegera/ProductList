// AddEditProductModal.js
import React, { useState } from "react";

const AddEditProductModal = ({ onClose, onSave, product }) => {
    const [formData, setFormData] = useState(product);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        onSave(formData);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
                <h2>{product ? "Edit Product" : "Add Product"}</h2>
                <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    placeholder="Product Name"
                />
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                />
                {/* Add other fields as needed */}
                <button onClick={handleSubmit}>{product ? "Save" : "Add"}</button>
            </div>
        </div>
    );
};

export default AddEditProductModal;
