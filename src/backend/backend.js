const express = require('express')
const pushObjInUsersBase = require('./functions/pushObjInUsersBase');
const bkTgGetCommunity = require('./functions/bkTgGetCommunity')
const bkVkGetCommunity = require('./functions/bkVkGetCommunity')
const bkYtGetChannel = require('./functions/bkYtGetChannel')
const bkOkGetCommunity = require('./functions/bkOkGetCommunity')

const PORT = process.env.PORT ||  3002;
let userBase = require(`${__dirname}/../dataBases/userBase.json`)
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let storyArr = []

		


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


    const {channelName, countEntries} = req.body
    const result = await bkTgGetCommunity(channelName, countEntries)
    
    app.get('/tggetcommunity', (req, res) => {
        res.json(
            result
        )
    })
})

app.post('/vkgetcommunity', async (req, res) => {

    const {channelName, countEntries} = req.body
    
    if (storyArr.find(e => e == channelName) !== undefined) {
        console.log('Уже был поиск по ссылке ' + channelName)
        return
    }

    const result = await bkVkGetCommunity(channelName, countEntries)

    app.get('/vkgetcommunity', (req, res) => {
        res.json(
            result
        )
    })
    storyArr.push(channelName)
})

app.post('/ytgetchannel', async (req, res) => {

    const {channelName} = req.body

    if (storyArr.find(e => e == channelName) !== undefined) {
        console.log('Уже был поиск по каналу id ' + channelName)
        return
    }

    const result = await bkYtGetChannel(channelName)

    app.get('/ytgetchannel', (req, res) => {
        res.json(
            result
        )
    })
    storyArr.push(channelName)
})

app.post('/okgetcommunity', async (req, res) => {

    const {channelName, countEntries} = req.body
    
    if (storyArr.find(e => e == communityName) !== undefined) {
        console.log('Уже был поиск по ссылке ' + url)
        return
    }

    const result = await bkOkGetCommunity(channelName, countEntries)

    app.get('/okgetcommunity', (req, res) => {
        res.json(
            result
        )
    })
    storyArr.push(channelName)
})






    

    




