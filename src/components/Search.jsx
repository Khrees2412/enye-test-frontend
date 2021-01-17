import { FaSearch } from "react-icons/fa";

export default function Search({ searchInput, handleChange }) {
	return (
		<form>
			<h2>Search for a specific user</h2>
			<div className="search-icon">
				<FaSearch />
			</div>
			<input type="search" value={searchInput} onChange={e => handleChange(e)} />
		</form>
	);
}
//  name="searchUser" id="searchUser"
