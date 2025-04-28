// SceneManager.js

const SceneManager = (() => {
    const sceneSelector = '[data-scene]';
    let currentScene = null;
  
    const getAllScenes = () => document.querySelectorAll(sceneSelector);
  
    const showScene = (sceneId) => {
      const target = document.getElementById(`scene-${sceneId}`);
      if (!target) {
        console.warn(`[SceneManager] Scene '${sceneId}' not found.`);
        return;
      }
      // hide all scenes
      getAllScenes().forEach(s => (s.hidden = true));
      // show the target scene
      target.hidden = false;
      // set the current scene
      currentScene = sceneId;
      console.log(`[SceneManager] Switched to scene: ${sceneId}`);
    };

    const hideScene = (sceneId) => {
      const target = document.getElementById(`scene-${sceneId}`);
      if (!target) {
        console.warn(`[SceneManager] Scene '${sceneId}' not found.`);
        return;
      }
      target.hidden = true;
      console.log(`[SceneManager] Hidden scene: ${sceneId}`);
    }
  
    const getCurrentScene = () => currentScene;
  
    const nextScene = () => {
      const scenes = Array.from(getAllScenes());
      const index = scenes.findIndex(scene => scene.id === `scene-${currentScene}`);
      const next = scenes[(index + 1) % scenes.length];
      if (next) showScene(next.id.replace('scene-', ''));
    };
  
    const previousScene = () => {
      const scenes = Array.from(getAllScenes());
      const index = scenes.findIndex(scene => scene.id === `scene-${currentScene}`);
      const prev = scenes[(index - 1 + scenes.length) % scenes.length];
      if (prev) showScene(prev.id.replace('scene-', ''));
    };
  
    // Public API
    return {
      show: showScene,
      hide: hideScene,
      next: nextScene,
      previous: previousScene,
      current: getCurrentScene,
    };
  })();
  
  export default SceneManager;
  