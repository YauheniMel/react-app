import React from 'react';
import style from './Pagination.module.scss';
import left from '../../assets/svg/pagination-left.svg';
import right from '../../assets/svg/pagination-right.svg';

export default function Pagination({ currentPage, totalPages, changePage }) {
  return (
    <div className={style.wrap}>
      <span
        className={style.arrow}
        onClick={() =>
          currentPage === 1 ? false : changePage(currentPage - 1)
        }
      >
        <img src={left} alt="left" width="20px" />
      </span>
      <span>{currentPage}</span>
      <span
        className={style.arrow}
        onClick={() =>
          currentPage === totalPages ? false : changePage(currentPage + 1)
        }
      >
        <img src={right} alt="right" width="20px" />
      </span>
    </div>
  );
}
