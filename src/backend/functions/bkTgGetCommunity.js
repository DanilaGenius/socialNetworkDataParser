const {telegram_scraper} = require('telegram-scraper')

async function  bkTgGetCommunity(channelName,  countEntries) {

	try {
		let result = sortReceivedData(await telegram_scraper(channelName))
	
		return result || false
	} catch (error) {
		console.log(error)
	}

       

}

function sortReceivedData(inputData) {
	let result = []
	let outputData = []
	const arrObjsPosts = inputData.trim().replace(/\n/g, '').replace(/\//g, "").split('{') 
	arrObjsPosts.forEach((e,i) => {
		if (i == 0) return
		outputData.push(e)
	})
	outputData.forEach(e => {
		result.push(parseRecord(e))
	})




	return  result;
}

module.exports = bkTgGetCommunity


// function parseData(data) {
// 	const startIndex = data.indexOf('"data_post": "') + '"data_post": "'.length;
// 	const endIndex = data.indexOf('"', startIndex);
// 	const value = data.slice(startIndex, endIndex);
	
// 	return {
// 	  data_post: value
// 	};
//   }

  function parseRecord(record) {
    const obj = {};
    record.split("\"data_post\": \"")[1].split("\",")[0] ? obj.data_post = record.split("\"data_post\": \"")[1].split("\",")[0] : null;
    record.split("\"data_view\": \"")[1].split("\",")[0] ? obj.data_view = record.split("\"data_view\": \"")[1].split("\",")[0] : null;
    record.split("\"user_url\": \"")[1].split("\",")[0] ? obj.user_url = record.split("\"user_url\": \"")[1].split("\",")[0] : null;
    record.split("\"user_photo\": \"")[1].split("\",")[0] ? obj.user_photo = record.split("\"user_photo\": \"")[1].split("\",")[0] : null;
    record.split("\"user_name\": \"")[1].split("\",")[0] ? obj.user_name = record.split("\"user_name\": \"")[1].split("\",")[0] : null;
    record.split("\"message_url\": \"")[1].split("\",")[0] ? obj.message_url = record.split("\"message_url\": \"")[1].split("\",")[0] : null;
    record.split("\"message_text\": \"")[1].split("\",")[0] ? obj.message_text = record.split("\"message_text\": \"")[1].split("\",")[0] : null;
    record.split("\"views\": \"")[1].split("\",")[0] ? obj.views = record.split("\"views\": \"")[1].split("\",")[0] : null;
    record.split("\"datetime\": \"")[1].split("\"")[0] ? obj.datetime = record.split("\"datetime\": \"")[1].split("\"")[0] : null;

    return obj;
}
  
