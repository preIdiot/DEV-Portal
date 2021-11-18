import BasicFrame from "../components/Layouts/BasicFrame/BasicFrame";
import ModuleFrame from "../components/Layouts/ModuleFrame/ModuleFrame";
import { DeveloperModules } from "../utils/appData";
import Head from "next/head";

export default function Developer(props) {
	return (
		<BasicFrame>
			<Head>
				<title>DEV-Portal | Developer</title>
			</Head>

			<ModuleFrame data={DeveloperModules} />
		</BasicFrame>
	);
}
