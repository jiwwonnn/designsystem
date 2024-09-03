import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PaginationStyle } from "./UnitStyle"; 

const Pagination = ({ pagingData, handlePaging }) => {
  const [pager, setPager] = useState({
    totalPage: 0, // 전체 페이지 수
    totalBlock: 0, // 전체 블록 수
    nowBlock: 0, // 현재 블록 번호
    sPageNum: 0, // 블록당 시작 페이지 번호
    ePageNum: 0, // 블록당 마지막 페이지 번호
    numList: [], // 페이지 번호 목록
  });

  const handlePagingClick = (num) => {
    handlePaging({ page: num });
  };

  useEffect(() => {
    const totalPage = Math.ceil(pagingData?.dataTotal / pagingData?.blockData); // 전체 페이지 수
    const totalBlock = Math.ceil(totalPage / pagingData?.blockGroup); // 전체 블록 수
    const nowBlock = Math.ceil(pagingData?.activePage / pagingData?.blockGroup); // 현재 블록 번호

    // 블록당 시작 페이지 번호
    let sPageNum = (nowBlock - 1) * pagingData?.blockGroup + 1;
    if (sPageNum <= 0) {
      sPageNum = 1;
    }

    // 블록당 마지막 페이지 번호
    let ePageNum = nowBlock * pagingData?.blockGroup;
    if (ePageNum > totalPage) {
      ePageNum = totalPage;
    }

    // 페이지 번호 목록 생성
    let numList = [];
    for (let i = sPageNum; i <= ePageNum; i++) {
      numList.push(i);
    }

    setPager({
      totalPage: totalPage,
      totalBlock: totalBlock,
      nowBlock: nowBlock,
      sPageNum: sPageNum,
      ePageNum: ePageNum,
      numList: numList,
    });
  }, [pagingData]);

  return (
    <PaginationStyle className='pagination'>
      {pagingData?.activeLastBtn && (
        <button className="front" type="button" onClick={() => handlePagingClick(1)}>
          왼왼
          <span className="hidden">처음</span>
        </button>
      )}

      {pagingData?.activePage <= 1 ? (
        <button className="prev" type="button" disabled={true}>
          왼
          <span className="hidden">이전</span>
        </button>
      ) : (
        <button className="prev" type="button" onClick={() => handlePagingClick(pagingData?.activePage - 1)}>
          왼
          <span className="hidden">이전</span>
        </button>
      )}

      {pager.numList.map((item, idx) => (
        <button
          key={idx}
          className={`number ${item === pagingData?.activePage ? 'active' : ''}`}
          type="button"
          onClick={() => handlePagingClick(item)}
        >
          {item}
        </button>
      ))}

      {pagingData?.activePage >= pager.totalPage ? (
        <button className="next" type="button" disabled={true}>
          우
          <span className="hidden">다음</span>
        </button>
      ) : (
        <button className="next" type="button" onClick={() => handlePagingClick(pagingData?.activePage + 1)}>
          우
          <span className="hidden">다음</span>
        </button>
      )}

      {pagingData?.activeLastBtn && (
        <button className="end" type="button" onClick={() => handlePagingClick(pager.totalPage)}>
          우우
          <span className="hidden">마지막</span>
        </button>
      )}
    </PaginationStyle>
  );
};

Pagination.propTypes = {
  pagingData: PropTypes.shape({
    dataTotal: PropTypes.number.isRequired, // 총 데이터 수
    blockData: PropTypes.number.isRequired, // 페이지당 데이터 수
    blockGroup: PropTypes.number.isRequired, // 블록당 페이지 수
    activePage: PropTypes.number.isRequired, // 현재 활성 페이지
    activeLastBtn: PropTypes.bool, // 처음과 마지막 버튼 표시 여부
  }).isRequired,
  handlePaging: PropTypes.func.isRequired, // 페이지 변경 핸들러
};

export default Pagination;
