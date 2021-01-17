import { FaMale, FaFemale, FaGenderless } from "react-icons/fa";

export default function Radio({ selectedGender, onGenderChange, formSubmit }) {
	return (
		<form className="radio-component" onSubmit={formSubmit}>
			<div className="radio">
				<label>
					<input type="radio" value="Male" checked={selectedGender === "Male"} onChange={onGenderChange} />
					Male
					<FaMale />
				</label>
			</div>
			<div className="radio">
				<label>
					<input
						type="radio"
						value="Female"
						checked={selectedGender === "Female"}
						onChange={onGenderChange}
					/>
					Female
					<FaFemale />
				</label>
			</div>
			<div className="radio">
				<label>
					<input
						type="radio"
						value="Prefer to skip"
						checked={selectedGender === "Prefer to skip"}
						onChange={onGenderChange}
					/>
					Prefer to Skip
					<FaGenderless />
				</label>
			</div>
		</form>
	);
}
