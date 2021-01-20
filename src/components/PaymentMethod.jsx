import { FaPaypal, FaMoneyBillAlt, FaMoneyCheck, FaCreditCard } from "react-icons/fa";

export default function PaymentMethod({ onPaymentChange, selectedPayment }) {
	return (
		<div>
			<form className="payment-method">
				<p className="filter-header">Filter By Payment Method</p>
				<div>
					<label>
						<input
							type="radio"
							name="payment"
							value="paypal"
							checked={selectedPayment === "paypal"}
							onChange={onPaymentChange}
						/>
						Paypal
						<FaPaypal />
					</label>
				</div>

				<div>
					<label>
						<input
							type="radio"
							name="payment"
							value="money order"
							checked={selectedPayment === "money order"}
							onChange={onPaymentChange}
						/>
						Money Order <FaMoneyBillAlt />
					</label>
				</div>

				<div>
					<label>
						<input
							type="radio"
							name="payment"
							value="check"
							checked={selectedPayment === "check"}
							onChange={onPaymentChange}
						/>
						Check <FaMoneyCheck />
					</label>
				</div>

				<div>
					<label>
						<input
							type="radio"
							name="payment"
							value="cc"
							checked={selectedPayment === "cc"}
							onChange={onPaymentChange}
						/>
						CC <FaCreditCard />
					</label>
				</div>
			</form>
		</div>
	);
}
