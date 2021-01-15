export default function PaymentMethod({ onPaymentChange, selectedPayment }) {
	return (
		<div>
			<form className="payment-method">
				<div>
					<label htmlFor="paypal">Paypal</label>
					<input
						type="radio"
						id="paypal"
						value="paypal"
						checked={selectedPayment === "paypal"}
						onChange={onPaymentChange}
					/>
				</div>
				<div>
					<label htmlFor="money-order">Money Order</label>
					<input
						type="radio"
						id="money-order"
						value="money order"
						checked={selectedPayment === "money order"}
						onChange={onPaymentChange}
					/>
				</div>
				<div>
					<label htmlFor="check">Check</label>
					<input
						type="radio"
						id="check"
						value="check"
						checked={selectedPayment === "check"}
						onChange={onPaymentChange}
					/>
				</div>
				<div>
					<label htmlFor="cc">CC</label>
					<input
						type="radio"
						id="cc"
						value="cc"
						checked={selectedPayment === "cc"}
						onChange={onPaymentChange}
					/>
				</div>
			</form>
		</div>
	);
}
