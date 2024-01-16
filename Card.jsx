import { useState } from "react";
import React from "react";

import styles from "./card.module.scss";

const Card = ({ src, heading, more, contentHead, summary }) => {
	const [rotate, setRotate] = useState(false);

	const handleRotate = () => {
		setRotate((is) => !is);
	};

	return (
		<div className={styles.container}>
			<div
				className={
					!rotate ? styles.card : `${styles.card} ${styles.card__rotate}`
				}
				onClick={handleRotate}
			>
				<div className={styles.card__shadow}></div>
				<div
					className={styles.card__front}
					style={rotate ? { opacity: 0 } : { opacity: 1 }}
				>
					<h3>{heading}</h3>
					<p>{more}</p>
					<img src={src} className={styles.card__img}></img>
				</div>
				<div className={styles.card__back}>
					<p className={styles.card__back__heading}>{contentHead}</p>
					<p>{summary}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
