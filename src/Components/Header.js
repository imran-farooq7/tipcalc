import Logo from "../images/logo.svg";
import styles from "./Header.module.css";
const Header = () => {
	return (
		<div className={styles.header}>
			<img src={Logo} alt="logo splitter" />
		</div>
	);
};

export default Header;
