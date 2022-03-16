/* For the multi-page collection booking form, this page will be shown at the start that clarifies 
some health and safety information about the items being donated, and allows users to understand 
whether their item is eligble for collection or not */

import React from "react";
/* A JSON file to show a few of the items that cannot be taken in for health and safety reasons */
import forbiddenItems from "../../resources/forbidden_items.json";
import { ItemChecker } from "../../Components/ItemChecker";

function HealthSafety({ nextStep, ProgressBar }) {
	return (
		<div>
			<div className="defaultContainer">
				<ProgressBar />
				{/* Provides the relevant health and safety information */}
				<h1 className="formTitle">Health and Safety</h1>
				<p>
					As much as we’d love to take in everything you give to use, there is a
					lot of things that we cannot take in due to health and safety reasons,
					these will be listed below, please take some time to check if one of
					the items you want to donate is one that we cannot take.{" "}
				</p>
				<p>
					While you're looking the stuff you want to please also consider that
					fire labels must be attached to things such as furniture, and items
					must be in good, sellable condition for us to be able to take it in.
				</p>
				<p>When you are ready to continue, press here:</p>
				<button className="cshButton" onClick={nextStep}>
					Continue
				</button>
			</div>

			<div className="defaultContainer">
				<hr />
				<ItemChecker itemList={forbiddenItems} />
			</div>
		</div>
	);
}

export default HealthSafety;
