import {PaginationStyle} from "../../assets/styles/UnitStyle";
import {useState, useEffect } from "react";

const Pagination = (props) => {

  const { pagingData, handlePaging } = props;


  const [pager, setPager] = useState({
    totalPage: 0, //전체페이지수
    totalBlock: 0, //전체블럭수
    nowBlock: 0, //현재블럭
    sPageNum: 0, //블럭당 시작 페이지 번호, 블럭이란 1~5 한개의 그룹단위
    ePageNum: 0, //블럭당 마지막 페이지 번호, 블럭이란 1~5 한개의 그룹단위
    numList: [],
  });

  const handlePagingClick = (num) => {
    handlePaging({ page: num });
  };

  useEffect(() => {
    const totalPage = Math.ceil(pagingData?.dataTotal / pagingData?.blockData); //전체 페이지수 : 전체데이터/블럭당 데이터수
    const totalBlock = Math.ceil(totalPage / pagingData?.blockGroup); //전체 블럭수 : 전제 페이지수/블럭 생성수
    const nowBlock = Math.ceil(pagingData?.activePage / pagingData?.blockGroup); //현재 블럭 번호 : 현재 페이지번호/블럭당 페이지수

    //블럭당 시작 번호
    let sPageNum = (nowBlock - 1) * pagingData?.blockGroup + 1;
    if (sPageNum <= 0) {
      sPageNum = 1;
    }

    //블럭당 마지막 번호
    let ePageNum = nowBlock * pagingData?.blockGroup;
    if (ePageNum > totalPage) {
      ePageNum = totalPage;
    }

    //
    let numList = [];
    for (let i = sPageNum; i <= ePageNum; i++) {
      numList.push(i);
    }

    setPager({
      totalPage: totalPage, //전체페이지수
      totalBlock: totalBlock, //전체블럭수
      nowBlock: nowBlock, //현재블럭
      sPageNum: sPageNum, //블럭당 시작 페이지 번호, 블럭이란 1~5 한개의 그룹단위
      ePageNum: ePageNum, //블럭당 마지막 페이지 번호, 블럭이란 1~5 한개의 그룹단위
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
          우
          <span className="hidden">이전</span>
        </button>
      )}

      {pager.numList.map((item, idx) => {
        return (
          <button key={idx} className={`number ${item === pagingData?.activePage && 'active'}`} type="button" onClick={() => handlePagingClick(item)}>
            {item}
          </button>
        );
      })}

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
  )
}

export default Pagination