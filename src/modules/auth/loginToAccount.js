


export default async function loginToAccount(login, password) {
  
    let arrUsers;
    arrUsers = await fetch('/userbase')
            .then(res => res.json())
            .then(res => arrUsers = res.userBase)

    for (let i = 0; i < arrUsers.length; i++) {
        const e = arrUsers[i];

        if (e.login == login && e.password == password) {
            return true;
        }
    }

    
}



