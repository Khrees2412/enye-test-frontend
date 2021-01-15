const Pagination = ({ resultsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / resultsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="page">
			<ul className="pagination">
				{pageNumbers.map(number => (
					<li key={number} className="page-item">
						<a onClick={() => paginate(number)} href="!#" className="page-link">
							{number}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pagination;
