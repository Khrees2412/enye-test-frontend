import "./App.css";
import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import Card from "./components/Card";
import PaymentMethod from "./components/PaymentMethod";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Gender from "./components/Gender";

export default function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);

	const [results, setResults] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [resultsPerPage] = useState(20);

	const [selectedGender, setSelectedGender] = useState(null);
	const [selectedPayment, setSelectedPayment] = useState(null);
	const [genderDisplay, setGenderDisplay] = useState(null);
	const [paymentDisplay, setPaymentDisplay] = useState(null);

	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		fetch("http://api.enye.tech/v1/challenge/records")
			.then(res => res.json())
			.then(result => {
				setIsLoaded(true);
				setResults(result.records.profiles);
				console.log(result.records.profiles);
			})
			.catch(err => {
				setIsLoaded(true);
				setError(err);
			});
	}, []);
	const indexOfLastResult = currentPage * resultsPerPage;
	const indexOfFirstResult = indexOfLastResult - resultsPerPage;
	const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

	const [filterDisplay, setFilterDisplay] = useState(currentResults);
	const handleChange = e => {
		setSearchInput(e.target.value);
		const inputValue = e.target.value;
		if (inputValue) {
			let newList = [];
			const userNames = currentResults.map(
				item => item.FirstName.toLowerCase() + " " + item.LastName.toLowerCase()
			);
			// const users = currentResults.map(item => ({
			// 	name: item.FirstName.toLowerCase() + " " + item.LastName.toLowerCase(),
			// 	email: item.Email
			// }));
			// console.log(users.name);
			for (let i = 0; i < userNames.length; i++) {
				const names = userNames[i];
				if (names.includes(inputValue.toLowerCase())) {
					newList.push(userNames[i]);
					setFilterDisplay(newList);
				}
			}
		} else {
			setFilterDisplay(currentResults);
		}
	};
	const onGenderChange = event => {
		setSelectedGender(event.target.value);
		let listToDisplay = [];

		for (let i = 0; i < currentResults.length; i++) {
			const user = currentResults[i];
			if (event.target.value === user.Gender) {
				listToDisplay.push(user);
				// console.log(user);
				// console.log(listToDisplay);
				setGenderDisplay(listToDisplay);
			}
		}
	};

	const onPaymentChange = event => {
		setSelectedPayment(event.target.value);
		let listToDisplay = [];

		for (let i = 0; i < currentResults.length; i++) {
			const user = currentResults[i];
			if (event.target.value === user.PaymentMethod) {
				listToDisplay.push(user);
				setPaymentDisplay(listToDisplay);
			}
		}
	};

	const formSubmit = event => {
		event.preventDefault();
	};

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	if (error) {
		return (
			<div className="status  error">
				<p> {error.message}</p>
				<div>Check Network Connection and Reload Page</div>
			</div>
		);
	} else if (!isLoaded) {
		return (
			<div className="status spinner">
				<FaSpinner />
			</div>
		);
	} else {
		return (
			<div className="App">
				<h1>User Information</h1>
				<Search handleChange={handleChange} searchInput={searchInput} />
				<div className="radios">
					<Gender selectedGender={selectedGender} onGenderChange={onGenderChange} formSubmit={formSubmit} />
					<PaymentMethod onPaymentChange={onPaymentChange} selectedPaymentRadio={selectedPayment} />
				</div>
				<div className="users-display">
					<Card
						results={currentResults}
						filtered={filterDisplay}
						searchInput={searchInput}
						genderDisplay={genderDisplay}
						paymentDisplay={paymentDisplay}
					/>
				</div>
				<Pagination resultsPerPage={resultsPerPage} totalPosts={results.length} paginate={paginate} />
			</div>
		);
	}
}
