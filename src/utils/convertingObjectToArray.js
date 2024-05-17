export default function convertingObjectToArray(obj) {
    return Object.keys(obj).map(key => ({ key: obj[key] }));
}