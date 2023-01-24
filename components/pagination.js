import ReactPaginate from 'react-paginate';


function Pagination({ handlePageClick, pagesCount}) {



  return (
    <ReactPaginate
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={3}
    marginPagesDisplayed={4}
    pageCount={pagesCount}
    previousLabel="< previous"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    previousClassName="page-item"
    previousLinkClassName="page-link"
    nextClassName="page-item"
    nextLinkClassName="page-link"
    breakLabel="..."
    breakClassName="page-item"
    breakLinkClassName="page-link"
    containerClassName="pagination justify-content-center"
    activeClassName="active"
    renderOnZeroPageCount={null}
  />
  );
}

export default Pagination;
