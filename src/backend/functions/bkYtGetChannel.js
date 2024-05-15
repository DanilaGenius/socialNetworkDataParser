const axios = require('axios');

async function bkYtGetChannel(channelId, count, ytApiKey) {
  const apiKey = ytApiKey;
  
  try {
    // Получаем информацию о канале
    const channelInfoResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${apiKey}&part=snippet,statistics`);
    const channelInfo = channelInfoResponse.data.items[0].snippet;
    
    // Получаем видео канала
    const videosResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`);
    const videos = videosResponse.data.items;
    
    // Получаем трансляции канала
    const liveStreamsResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&eventType=live&type=video`);
    const liveStreams = liveStreamsResponse.data.items;
    
    // Получаем short видео канала
    const shortVideosResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&eventType=completed&type=video&videoDuration=short`);
    const shortVideos = shortVideosResponse.data.items;
 
    // Возвращаем объект с данными
    return {
      channelInfo,
      videos,
      liveStreams,
      shortVideos
    };
    
  } catch (error) {
    console.error('Error fetching data from YouTube API:', error);
  }
}
// const channelId = 'UC5wTqjA-j2dZ-L5Rsltkscg';
//UCHdHTb5jgeH8jys5_Ebqsuw

module.exports = bkYtGetChannel