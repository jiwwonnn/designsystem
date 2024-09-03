import React, { useState } from 'react';
import Pagination from './Pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  const [pagingData, setPagingData] = useState({
    dataTotal: 50, // 전체 데이터 수
    blockData: 10, // 한 페이지에 보여줄 데이터 수
    blockGroup: 5, // 블록당 페이지 수 (1~5 페이지가 한 그룹)
    activePage: 1, // 현재 활성화된 페이지
    activeLastBtn: true, // 처음과 마지막 버튼 표시 여부
  });

  const handlePaging = ({ page }) => {
    setPagingData((prevState) => ({
      ...prevState,
      activePage: page,
    }));
  };

  return (
    <Pagination
      pagingData={pagingData}
      handlePaging={handlePaging}
    />
  );
};
