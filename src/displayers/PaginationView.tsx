import React from 'react';
import { PaginationInterface } from '../interfaces/InterfaceCollection';

const PaginationView: React.FC<PaginationInterface> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          className={`pagebutton${currentPage === index + 1 ? ' active' : ''}`}
          key={index}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationView;