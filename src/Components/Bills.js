import styles from "./Bills.module.css";
const Bills = ({ setBill }) => {
	const onBillChangeHandler = (e) => {
		setBill(parseFloat(e.target.value));
	};
	return (
		<div className={styles["bill-container"]}>
			<label htmlFor="bill">Bill</label>
			<input
				type="number"
				id="bill"
				name="bill"
				placeholder="0"
				required
				onChange={onBillChangeHandler}
			/>
		</div>
	);
};
export default Bills;
