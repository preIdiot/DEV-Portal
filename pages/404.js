import Image from "next/image";
import Head from "next/head";

import BasicFrame from "../components/Layouts/BasicFrame/BasicFrame";
import styles from "../styles/NotFound.module.scss";

export default function NotFoundComponent() {
	return (
		<BasicFrame footer={false}>
			<Head>
				<title>404: Not Found</title>
			</Head>

			<main className={styles.app_notfound}>
				<div className={styles.img_container}>
					<Image
						src="/assets/NotFound.png"
						width="697"
						layout="responsive"
						sizes="70vw"
						height="345.5"
						alt="Not Found"
					/>
				</div>
				<p>Looks like you found our intern’s project!</p>
			</main>
		</BasicFrame>
	);
}
