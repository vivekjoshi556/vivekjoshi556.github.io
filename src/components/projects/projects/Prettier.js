import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Prettier() {
	return (
		<div className="aboveNoise">
			<h2 className="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white text-center">
				<Link
					className="font-extrabold font-sans"
					href="https://github.com/prettier"
				>
					Prettier
				</Link>{" "}
				Open Source Contribution
				{/* <Link href="https://github.com/tldr-pages/tldr-node-client/issues/419">
					#419
				</Link> */}
			</h2>
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Contribution Overview:
			</h2>
			<p className="pl-8 text-sm">
				For this open-source project, I addressed a specific issue, which was
				documented under Issue #15341. The issue involved improving the behavior
				of Prettier, a popular code formatting tool, when it inserts characters
				like &lt; and &gt; in Markdown links.
			</p>
			<br />
			<img
				className="w-full md:w-3/4 mx-auto border border-gray-100 shadow-xl rounded-xl"
				src="/img/Projects/prettier/logo.png"
				alt=""
			/>
			<br />
			<br />

			<div className="flex justify-center items-center md:flex-row flex-col gap-4">
				<motion.a
					className="duration-100 px-8 py-4 bg-[#cc3534D0] hover:bg-[#cc3534] text-lg rounded-full text-white"
					href="https://github.com/prettier/prettier/issues/15341"
					target="_blank"
					whileHover={{ scale: 1.1 }}
					transition={{ type: "spring", stiffness: 1000, damping: 5 }}
				>
					Issue
				</motion.a>
				<motion.a
					className="duration-100 px-8 py-4 bg-[#008000D0] hover:bg-[#008000] text-lg rounded-full text-white"
					href="https://github.com/prettier/prettier/pull/15400"
					target="_blank"
					whileHover={{ scale: 1.1 }}
					transition={{ type: "spring", stiffness: 1000, damping: 5 }}
				>
					Pull Request
				</motion.a>
			</div>
			<br />
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Technologies Used:
			</h2>
			<p className="pl-8 text-sm">
				My contribution to this project involved code changes in JavaScript.
			</p>
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				My Role:
			</h2>
			<p className="pl-8 text-sm">
				I acted as a contributor to the project, focusing on resolving the
				documented issue.
			</p>
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Description:
			</h2>
			<p className="pl-8 text-sm">
				The issue I worked on was related to Prettier's behavior when formatting
				Markdown links containing characters such as &lt; and &gt;. By default
				Prettier puts angular brackets (&lt; & &gt;) when there are some
				dangerous characters. In case of links Prettier considers `(` & `)` as
				dangerous characters. This caused the links to break.The proposed
				solution was to encode the angular brackets already present in the link.
			</p>
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Lessons Learnt:
			</h2>
			<ul className="pl-8 list-disc">
				<li className="mb-3">
					<b>Understanding of ASTs:</b> I gained a deeper understanding of
					Abstract Syntax Trees (ASTs) and how they are utilized in the context
					of code formatting. Working on Prettier's source code allowed me to
					explore the intricacies of AST manipulation for code formatting
					purposes.
				</li>
				<li className="mb-3">
					<b>AST Usage in Formatting:</b> Through this contribution, I learned
					how ASTs play a pivotal role in code formatting. I saw how ASTs can be
					used to analyze and modify the structure of code, ensuring consistent
					and well-formatted output.
				</li>
				<li className="mb-3">
					<b>Snapshot Testing with Jest:</b> My involvement in the Prettier
					project introduced me to snapshot testing using Jest. I discovered how
					snapshot testing can help maintain the expected output of code
					formatting tools and prevent unintended changes.
				</li>
				<li className="mb-3">
					<b>Familiarity with CommonMark Spec:</b> While addressing the issue, I
					had the opportunity to delve into the CommonMark spec for Markdown.
					This experience expanded my knowledge of Markdown syntax and
					standards, helping me gain a better understanding of how Markdown is
					expected to be formatted according to the CommonMark specification.
					This knowledge not only assisted in resolving the issue at hand but
					also enhanced my proficiency in working with Markdown and related
					tools.
				</li>
				<li className="mb-3">
					<b>Valuable Contribution Experience:</b> Contributing to a
					well-established open-source project like Prettier provided me with
					invaluable experience in the process of collaborating with the
					open-source community. I learned how to navigate the project's
					development environment, communicate with maintainers and fellow
					contributors, and effectively address and resolve issues within a
					large codebase. This experience significantly enhanced my skills and
					knowledge as a developer in the open-source ecosystem.
				</li>
			</ul>
			<br />
		</div>
	);
}
