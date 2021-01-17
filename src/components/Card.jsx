export default function Card({ results, filtered, searchInput, genderDisplay, paymentDisplay }) {
	function capitalize(str) {
		return str.replace(/\b[a-z]/gi, function (char) {
			return char.toUpperCase();
		});
	}
	// return (
	// 	<div className="users-display">
	// 		{searchInput.length > 0
	// 			? filtered.map((item, index) => (
	// 					<div key={index} className="card">
	// 						<p>{capitalize(item)}</p>
	// 						{/* <p className="email"> {item.Email}</p> */}
	// 					</div>
	// 			  ))
	// 			: results.map((item, index) => (
	// 					<div key={index} className="card">
	// 						<p>
	// 							{item.FirstName} {item.LastName}
	// 						</p>
	// 						<p>{item.Gender}</p>
	// 						<p className="email"> {item.Email}</p>
	// 					</div>
	// 			  ))}
	// 	</div>
	// );
	if (searchInput.length > 0) {
		return filtered.map((item, index) => (
			<div key={index} className="card">
				<p>{capitalize(item)}</p>
				{/* <p className="email"> {item.Email}</p> */}
			</div>
		));
	} else if (genderDisplay) {
		return genderDisplay.map((item, index) => (
			<div key={index} className="card">
				<p>
					{item.FirstName} {item.LastName}
				</p>
				<div className="filters">
					<p>{item.Gender}</p>
					<p>{item.PaymentMethod}</p>
				</div>

				<p className="email"> {item.Email}</p>
			</div>
		));
	} else if (paymentDisplay) {
		return paymentDisplay.map((item, index) => (
			<div key={index} className="card">
				<p>
					{item.FirstName} {item.LastName}
				</p>
				<div className="filters">
					<p>{item.Gender}</p>
					<p>{item.PaymentMethod}</p>
				</div>
				<p className="email"> {item.Email}</p>
			</div>
		));
	} else {
		return results.map((item, index) => (
			<div key={index} className="card">
				<p>
					{item.FirstName} {item.LastName}
				</p>
				<p>{item.Gender}</p>
				<p className="email"> {item.Email}</p>
			</div>
		));
	}
}
/*
:
CreditCardNumber: "3568573570249840"
CreditCardType: "JCB"
DomainName: "kUTaFSV.biz"
Email: "xpgaxcF@KjePoFC.ru"
FirstName: "Alvina"
Gender: "Prefer to skip"
LastLogin: "2014-04-04 21:44:31"
LastName: "Bahringer"
Latitude: -71.5031
Longitude: 164.75174
MacAddress: "f0:f6:5d:45:05:cc"
PaymentMethod: "money order"
PhoneNumber: "310-184-2795"
URL: "https://jKdPrWI.net/RdJFRKZ.html"
UserName: "vkPQrmD"
*/
