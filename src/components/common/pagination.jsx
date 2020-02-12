import React from 'react';
import _ from 'lodash'; //optimezed version of javascript library: underscore
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    //console.log('currentPage from Pagination component', currentPage);

    const pagesCount = Math.ceil(itemsCount / pageSize);
    //console.log(pagesCount);
    if (pagesCount === 1) return null;
	const pages = _.range(1, pagesCount + 1);

	return (
		<div>
			<nav>
				<ul className="pagination">
					{pages.map((page) => (
						<li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
							<a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
						</li>
                    ))}
				</ul>
			</nav>
		</div>
	);
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;
