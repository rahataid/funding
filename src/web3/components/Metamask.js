import { useEffect, useState } from "react";
import { connector, hooks } from "../connectors/metaMask";

const {
    useChainId,
    useAccounts,
    useIsActivating,
    useIsActive,
    useProvider,
    useENSNames,
} = hooks;

export default function MetaMaskCard({ component: Component, ...restProps }) {
    const chainId = useChainId();
    const accounts = useAccounts();
    const isActivating = useIsActivating();

    const isActive = useIsActive();

    const provider = useProvider();
    const ENSNames = useENSNames(provider);

    const [error, setError] = useState(undefined);

    // attempt to connect eagerly on mount
    useEffect(() => {
        void connector.connectEagerly().catch(() => {
            console.debug("Failed to connect eagerly to metamask");
        });
    }, []);

    const props = {
        isActivating,
        isActive,
        chainId,
        accounts,
        ENSNames,
        error,
        connector,
        activeChainId: chainId,
        provider,
        error,
        setError,
        hooks,
        ...restProps,
    };

    return <Component {...props} />;
}
