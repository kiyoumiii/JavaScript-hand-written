const all = Array.from(document.querySelectorAll("*"));
const hash = {};
const res = [];
all.forEach(it => {
    if (!hash[it.tagName]) {
        res.push(it.tagName);
        hash[it.tagName] = true;
    }
});
console.log(res);