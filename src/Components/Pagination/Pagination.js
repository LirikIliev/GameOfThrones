export function Pagination({ postPerPage, totalPosts, paginate }) {

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i);
    };

    return (
        <nav className="pagination-nav">
            <aside>
                <p>Previous</p>
                <p>Next</p>
            </aside>
            <ul className="pagination">
                {pageNumber.map(number => {
                    return (<li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href="!#" className="page-link">{number}</a>
                    </li>)
                })}
            </ul>
        </nav >
    )
}