import styles from "./People.module.css";

const People = ({ noPeople, setNoPeople }) => {
	return (
		<div className={styles.peoplecontainer}>
			{noPeople > 0 || noPeople === null ? (
				<div>
					<label htmlFor="people">Number of People</label>
					<input
						type="number"
						id="people"
						name="people"
						placeholder="0"
						required
						onChange={(e) => setNoPeople(parseFloat(e.target.value))}
					/>
				</div>
			) : (
				<div>
					<div className={styles.nopeopleerror}>
						<label htmlFor="people">Number of People</label>
						<p className={styles.inputerror}>Can't be a zero</p>
					</div>
					<input
						className={noPeople < 0 ? styles.error : null}
						type="number"
						id="people"
						name="people"
						placeholder="0"
						required
						onChange={(e) => setNoPeople(parseFloat(e.target.value))}
					/>
				</div>
			)}
		</div>
	);
};
export default People;
