export default function Search({ searchInput, handleChange }) {
	return (
		<form>
			<h2>Search for a user</h2>
			<input type="search" value={searchInput} onChange={e => handleChange(e)} />
		</form>
	);
}
//  name="searchUser" id="searchUser"
