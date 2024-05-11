import {Unity, useUnityContext} from "react-unity-webgl";

function Memory() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Builds2.loader.js",
        dataUrl: "/Builds2.data.unityweb",
        frameworkUrl: "/Builds2.framework.js.unityweb",
        codeUrl: "/Builds2.wasm.unityweb",
    });

    function handleClickSpawnEnemies() {
        sendMessage("SceneHelper", "ReloadScene");
    }


    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                        <button onClick={handleClickSpawnEnemies}>ReStart Game</button>
                    </div>

                </div>
            </div>

        </>
    );
}


export default Memory