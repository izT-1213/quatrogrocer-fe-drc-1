import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Products(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemsOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemsOffset, itemsPerPage, data]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>    

    <div className="products">
        {currentItems.map(image => {
            return(
                <div>
                    <img src ={image.url}/>
                    </div>
            )
        })}

    </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next  >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
