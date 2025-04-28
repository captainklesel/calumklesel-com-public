// StorageManager.js

const StorageManager = (() => {
    const available = (() => {
        try {
            const testKey = '__test__';
            localStorage.setItem(testKey, 'test');
            localStorage.removeItem(testKey);
            return true;
        } catch (e) {
            console.warn("[StorageManager] Local Storage is not available:", e);
            return false;
        }
    })();
    
    const set = (key, value) => {
        if (!available) return;
        localStorage.setItem(key, JSON.stringify(value));
    };

    const get = (key) => {
        if (!available) return null;
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch {
            return null;
        }
    };

    const remove = (key) => {
        if (!this.available) return;
        localStorage.removeItem(key);
    }
    
   return {
        available: available,
        set: set,
        get: get,
        remove: remove,
   }
})();

export default StorageManager;
  