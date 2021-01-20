import { FaMale, FaFemale, FaGenderless } from "react-icons/fa";

export default function Gender({ selectedGender, onGenderChange, formSubmit }) {
	return (
		<form className="gender-component" onSubmit={formSubmit}>
			<p className="filter-header">Filter By Gender</p>
			<div className="radio">
				<label>
					<input
						type="radio"
						name="gender"
						value="Male"
						checked={selectedGender === "Male"}
						onChange={onGenderChange}
					/>
					Male
					<FaMale />
				</label>
			</div>
			<div className="radio">
				<label>
					<input
						type="radio"
						name="gender"
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
						name="gender"
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
