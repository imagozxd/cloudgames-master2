import {Unity, useUnityContext} from "react-unity-webgl";

function TopDown() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Builds3.loader.js",
        dataUrl: "/Builds3.data.unityweb",
        frameworkUrl: "/Builds3.framework.js.unityweb",
        codeUrl: "/Builds3.wasm.unityweb",
    });

    function handleClickSpawnEnemies() {
        sendMessage("SpawnManager", "InstantiateMorePrefabs");
    }


    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                        <button onClick={handleClickSpawnEnemies}>ReStart Enemies</button>
                    </div>

                </div>
            </div>

        </>
    );
}


export default TopDown