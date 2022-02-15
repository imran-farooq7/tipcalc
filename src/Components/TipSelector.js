import styles from "./TipSelector.module.css";

const TipSelector = ({ setTip }) => {
	const handleCustomInput = () => {
		document.getElementById("custom").style.display = "initial";
		document.getElementById("custom").focus();
		document.getElementById("label-custom").style.display = "none";
	};

	return (
		<div>
			<label>Select Tip %</label>
			<div className={styles.tipinput}>
				<div>
					<input
						type="radio"
						id="five"
						name="tip-percentage"
						value="5"
						required
						onClick={(e) => setTip(parseInt(e.target.value))}
					/>
					<label htmlFor="five">5%</label>
				</div>
				<div>
					<input
						type="radio"
						id="ten"
						name="tip-percentage"
						value="10"
						onClick={(e) => setTip(parseInt(e.target.value))}
					/>
					<label htmlFor="ten">10%</label>
				</div>
				<div>
					<input
						type="radio"
						id="fifteen"
						name="tip-percentage"
						value="15"
						onClick={(e) => setTip(parseInt(e.target.value))}
					/>
					<label htmlFor="fifteen">15%</label>
				</div>
				<div>
					<input
						type="radio"
						id="twenty-five"
						name="tip-percentage"
						value="25"
						onClick={(e) => setTip(parseInt(e.target.value))}
					/>
					<label htmlFor="twenty-five">25%</label>
				</div>
				<div>
					<input
						type="radio"
						id="fifty"
						name="tip-percentage"
						value="50"
						onClick={(e) => setTip(parseInt(e.target.value))}
					/>
					<label htmlFor="fifty">50%</label>
				</div>
				<div>
					<input
						type="number"
						id="custom"
						name="tip-percentage"
						onChange={(e) => setTip(parseFloat(e.target.value))}
						onClick={handleCustomInput}
					/>
					<label htmlFor="custom" id="label-custom">
						Custom
					</label>
				</div>
			</div>
		</div>
	);
};

export default TipSelector;
