import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    padding: '20px',
  },
};

const FileUploadModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <h2 style={{ marginBottom: '20px' }}>이미지 전송</h2>
      <input type="file" style={{ marginBottom: '20px' }} />
      <button onClick={onRequestClose}>전송하기</button>
    </Modal>
  );
};

export default FileUploadModal;
