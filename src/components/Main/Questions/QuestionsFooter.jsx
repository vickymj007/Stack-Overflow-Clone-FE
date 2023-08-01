import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { changePage, setContetntPerPage } from '../../../redux/features/QuestionsSlice'

const QuestionsFooter = () => {
    const {data, contentPerPage} = useSelector(state => state.questions)
    const dispatch = useDispatch()
    const pageCount = data? Math.ceil(data.length/ contentPerPage): 1

    const handlePageClick = (event) => {
      dispatch(changePage(event.selected))
    };

    {return data?
      (<div className='questions-footer'>
        <div>
          <ReactPaginate
            breakLabel='...'
            previousLabel='Prev'
            pageCount={pageCount}
            containerClassName='pagination-container'
            activeClassName='active'
            onPageChange={handlePageClick}
            renderOnZeroPageCount={null}
          />
        </div>
        <ul className='pagination-container page-list-count'>
            <li onClick={()=>dispatch(setContetntPerPage(5))}>5</li>
            <li onClick={()=>dispatch(setContetntPerPage(10))}>10</li>
            <li onClick={()=>dispatch(setContetntPerPage(15))}>15</li>
            <p>per page</p>
        </ul>
    </div>)
    :
    (<div></div>)
    }
}

export default QuestionsFooter