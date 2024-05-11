import {Unity, useUnityContext} from "react-unity-webgl";

function Game() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Builds.loader.js",
        dataUrl: "/Builds.data.unityweb",
        frameworkUrl: "/Builds.framework.js.unityweb",
        codeUrl: "/Builds   .wasm.unityweb",
    });

    function handleClickSpawnEnemies() {
        sendMessage("GameObject", "SpawnEnemies");
    }


    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                        <button onClick={handleClickSpawnEnemies}>Spawn Enemies</button>
                    </div>

                </div>
            </div>

        </>
    );
}


export default Game