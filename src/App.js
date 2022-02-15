import Header from "./Components/Header";
import styles from "./App.module.css";
import Bills from "./Components/Bills";
import People from "./Components/People";
import { useEffect, useState } from "react";
import TipSelector from "./Components/TipSelector";
import Review from "./Components/Review";

const App = () => {
	const [bill, setBill] = useState();
	const [tip, setTip] = useState();
	const [noPeople, setNoPeople] = useState();
	const [tipAmount, setTipAmount] = useState();
	const [totalAmount, setTotalAmount] = useState();
	useEffect(() => {
		if (bill > 0 && tip > 0 && noPeople > 0) {
			setTipAmount(parseFloat((bill * tip) / 100 / noPeople).toFixed(2));
			setTotalAmount(
				parseFloat((tipAmount * noPeople + bill) / noPeople).toFixed(2),
			);
		}
	}, [bill, tip, noPeople, tipAmount, totalAmount]);
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles["general-input-container"]}>
					<Bills setBill={setBill} />
					<TipSelector setTip={setTip} />
					<People noPeople={noPeople} setNoPeople={setNoPeople} />
				</div>
				<Review
					tip={tip}
					bill={bill}
					noPeople={noPeople}
					setBill={setBill}
					setTip={setTip}
					setNoPeople={setNoPeople}
					setTipAmount={setTipAmount}
					setTotalAmount={setTotalAmount}
					tipAmount={tipAmount}
					totalAmount={totalAmount}
				/>
			</div>
		</>
	);
};

export default App;
