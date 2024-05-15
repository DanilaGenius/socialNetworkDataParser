


export default async function loginToAccount(login, password) {
  
    let arrUsers;
    // const url = 'http://localhost:3002/userbase'
    const url = '/userbase'
    arrUsers = await fetch(url)
            .then(res => res.json())
            .then(res => arrUsers = res.userBase)

    for (let i = 0; i < arrUsers.length; i++) {
        const e = arrUsers[i];

        if (e.login == login && e.password == password) {
            return true;
        }
    }

    
}



