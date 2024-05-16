const express = require('express')
const pushObjInUsersBase = require('./functions/pushObjInUsersBase');
const bkTgGetCommunity = require('./functions/bkTgGetCommunity')
const bkVkGetCommunity = require('./functions/bkVkGetCommunity')
const bkYtGetChannel = require('./functions/bkYtGetChannel')
const bkOkGetGroups = require('./functions/bkOkGetGroups')
const bkVkGetProfiles = require('./functions/bkVkGetProfiles')

const PORT = process.env.PORT || 3002;
let userBase = require(`${__dirname}/../dataBases/userBase.json`)
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

let storyArr = []

const resultObj = {
    tggetcommunity: null,
    vkgetcommunity: null,
    ytgetchannel: null,
    vkgetprofiles: null,
    okgetcommunity: null

}




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/userbase`)
})

app.get('/userbase', (req, res) => {
    res.json({
        userBase
    })
})

app.post('/userbase', (req, res) => {

    const obj = req.body;

    pushObjInUsersBase(obj, userBase)


    app.get('/userbase', (req, res) => {
        res.json({
            userBase
        })
    })
})

app.post('/tggetcommunity', async (req, res) => {

const {
    channelName,
    countEntries
} = req.body
let result;
if (storyArr.find(e => e == channelName) !== undefined) {
    console.log('Уже был поиск по ссылке ' + channelName)

    result = resultObj.tggetcommunity
    return res.send(
        result
    )
}

result = await bkTgGetCommunity(channelName, countEntries)
storyArr.push(channelName)
resultObj.tggetcommunity = result;    
return res.send(
    result
)

});


app.post('/ytgetchannel', async (req, res) => {

   try {
    const {
        channelName,
        count,
        ytApiKey
    } = req.body

        let result;
        if (storyArr.find(e => e == channelName) !== undefined) {
            console.log('Уже был поиск по каналу id ' + channelName)
            result = resultObj.ytgetchannel
            return res.send(
            result
        )
    }

    result = await bkYtGetChannel(channelName, count, ytApiKey)
  
    storyArr.push(channelName)
    resultObj.ytgetchannel = result; 
    return res.send(
        result
    )
   } catch (error) {
    return res.send(
        error
    )
   }
    
})

app.post('/okgetgroups', async (req, res) => {

    const {
        groupId,
        options
    } = req.body
    let result;
    // if (storyArr.find(e => e == groupId) !== undefined) {
    //     console.log('Уже был поиск по ссылке ' + url)
    //     result = resultObj.okgetcommunity
    //     return res.send(
    //     result
    // )
    // }

    result = await bkOkGetGroups(groupId, options)
    storyArr.push(groupId)
    resultObj.okgetcommunity = result;
    return res.send(
        result
    )
    
})

app.post('/vkgetprofiles', async (req, res) => {

    const {
        userIds,
        access_token
    } = req.body
let result = [];
    if (storyArr.find(e => e == userIds) !== undefined) {
        console.log('Уже был поиск по ид ' + userIds)
        result = resultObj.vkgetprofiles
        return res.send(
        result
    )
    }

    result = await bkVkGetProfiles(access_token, userIds)
    
    storyArr.push(userIds)
    resultObj.vkgetprofiles = result.data;
    
    return res.send(
        result.data
    )
    
})

app.post('/vkgetcommunity', async (req, res) => {

    const {
        channelName,
        countEntries,
        access_token
    } = req.body
    let result;
    if (storyArr.find(e => e == channelName) !== undefined) {
        console.log('Уже был поиск по ссылке ' + channelName)
       
        return res.send(
            resultObj.vkgetcommunity
    )
    }

    result = await bkVkGetCommunity(channelName, countEntries, access_token)
    
    storyArr.push(channelName)
    resultObj.vkgetcommunity = result.data; 

    return res.send(
        result.data
    )
    
})