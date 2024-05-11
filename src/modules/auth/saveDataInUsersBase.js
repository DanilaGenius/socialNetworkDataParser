
export default async function addDataInUsersBase(obj) {
    const reactData = obj;
    const url = '/userbase';

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(reactData)
}

try {
    await fetch(url, options);
} catch (ex) {
    console.log('Something failed');
    console.log(ex);
}
};




