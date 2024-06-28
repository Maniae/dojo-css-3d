import "./dojo.css";
import "./style.css";

function wireRotationSlider(selector: string, cssVar: string) {
	document
		.querySelector<HTMLInputElement>(selector)
		?.addEventListener("input", (e) =>
			document.body.style.setProperty(cssVar, (e.target as HTMLInputElement)?.value + "deg")
		);
}

wireRotationSlider("#rotate-x", "--camera-rotate-x");
wireRotationSlider("#rotate-y", "--camera-rotate-y");
wireRotationSlider("#rotate-z", "--camera-rotate-z");

document
	.querySelector<HTMLInputElement>("#zoom")
	?.addEventListener("input", (e) =>
		document.body.style.setProperty("--camera-zoom", (e.target as HTMLInputElement)?.value)
	);

document.querySelector<HTMLButtonElement>("#reset")?.addEventListener("click", () => {
	document.querySelector<HTMLInputElement>("#rotate-x")!.value = "0";
	document.querySelector<HTMLInputElement>("#rotate-y")!.value = "0";
	document.querySelector<HTMLInputElement>("#rotate-z")!.value = "0";
	document.querySelector<HTMLInputElement>("#zoom")!.value = "1";

	document.body.style.setProperty("--camera-rotate-x", "0");
	document.body.style.setProperty("--camera-rotate-y", "0");
	document.body.style.setProperty("--camera-rotate-z", "0");
	document.body.style.setProperty("--camera-zoom", "1");
});
