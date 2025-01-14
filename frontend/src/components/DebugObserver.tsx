import { useEffect } from "react";

import { useRecoilSnapshot } from "recoil";

export function DebugObserver() {
	const snapshot = useRecoilSnapshot();

	useEffect(() => {
		console.debug("Recoil state changed:");
		for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
			console.debug(node.key, snapshot.getLoadable(node));
		}
	}, [snapshot]);

	return null;
}
