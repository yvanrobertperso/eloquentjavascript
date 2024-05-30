function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
    }, 0);
    }