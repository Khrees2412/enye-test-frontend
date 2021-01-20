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
						<button onClick={() => paginate(number)} className="page-link">
							{number}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pagination;
