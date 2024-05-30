function deepEqual(obj1, obj2) {
    if (obj1 === null || obj2 === null) {
        return false;
    }
    
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        
        for (let key in obj1) {
            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        
        return true;
    } else {
        return obj1 === obj2;
    }
}