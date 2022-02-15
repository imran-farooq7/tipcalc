import styles from "./Review.module.css";

const Review = ({
	setBill,
	setTip,
	setNoPeople,
	tip,
	bill,
	noPeople,
	setTipAmount,
	setTotalAmount,
	tipAmount,
	totalAmount,
}) => {
	const handleReset = () => {
		setBill(0);
		setTip(0);
		setNoPeople(null);
		setTipAmount(0);
		setTotalAmount(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.container}>
					<h2>Tip Amount</h2>
					<p>/ person</p>
				</div>
				<div className={styles["tip-amount"]}>
					{tipAmount > 0 ? <p>${tipAmount}</p> : <p>$0.00</p>}
				</div>
			</div>

			<div className={styles.bottom}>
				<div className={styles["total-container"]}>
					<h2>Total</h2>
					<p>/ person</p>
				</div>
				<div className={styles["total-amount"]}>
					{totalAmount > 0 ? <p>${totalAmount}</p> : <p>$0.00</p>}
				</div>
			</div>

			{tipAmount > 0 &&
			totalAmount > 0 &&
			bill > 0 &&
			tip > 0 &&
			noPeople !== 0 ? (
				<div className={styles["btn-reset-form"]}>
					<button type="reset" onClick={handleReset}>
						Reset
					</button>
				</div>
			) : (
				<div className={`${styles["btn-reset-form"]} ${styles.empty}`}>
					<button type="reset" onClick={handleReset} disabled>
						Reset
					</button>
				</div>
			)}
		</div>
	);
};

export default Review;
