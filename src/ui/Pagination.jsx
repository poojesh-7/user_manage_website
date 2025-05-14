import "./Pagination.css";
const Pagination = (props) => {
  // const pagenos = Math.ceil(props.totalUsers / props.noOfUsersPerPage);
  const dispBtn = [];

  for (let i = 1; i <= props.totalPages; i++) {
    dispBtn.push(
      <button
        className={`pageno ${props.pageno === i && "pageno_active"}`}
        key={i}
        onClick={props.getPageno.bind(null, i)}
      >
        {i}
      </button>
    );
  }
  const finalDisp = dispBtn.slice(props.finalPagenos.f, props.finalPagenos.l);
  return (
    <div className="pagenos">
      <button
        className="page_btn"
        disabled={props.pageno === 1}
        onClick={props.previous5Pages}
      >
        <img
          className="nav_arrow nb"
          src="https://i.ibb.co/9kFw2T3k/fast-forward-double-right-arrows-symbol.png"
          alt="fast-forward-double-right-arrows-symbol"
          border="0"
        />
      </button>
      <button
        className="page_btn"
        disabled={props.pageno === 1}
        onClick={props.previousPage}
      >
        <img
          className="nav_arrow nb"
          src="https://i.ibb.co/vvs5VydP/right-arrow-1.png"
          alt="right-arrow-1"
          border="0"
        />
      </button>
      {finalDisp}
      <button
        className="page_btn"
        disabled={props.pageno === props.totalPages}
        onClick={props.nextPage}
      >
        <img
          className="nav_arrow "
          src="https://i.ibb.co/vvs5VydP/right-arrow-1.png"
          alt="right-arrow-1"
          border="0"
        />
      </button>
      <button
        className="page_btn"
        disabled={props.pageno === props.totalPages}
        onClick={props.next5Pages}
      >
        <img
          className="nav_arrow "
          src="https://i.ibb.co/9kFw2T3k/fast-forward-double-right-arrows-symbol.png"
          alt="fast-forward-double-right-arrows-symbol"
          border="0"
        />
      </button>
    </div>
  );
};

export default Pagination;
