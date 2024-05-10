const request = require('request');
// 发送消息到Telegram群组
function sendMessageToGroup(apiKey,chatId,message,res) {
    const sendMessageUrl = `https://api.telegram.org/bot${apiKey}/sendMessage`;
    // console.log("if into here",apiKey,chatId,message)
    request.post({
        url: sendMessageUrl,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    }, (error, response, body) => {
        if (error) {
            console.error('发送消息到Telegram群组时出错:', error);
            res.status(400).json({ status: 'error', message: 'not response' });
        } else {
            console.log('消息发送成功:', body);
            res.status(200).json({ status: 'success' });
        }
    });
}
// 定时检查交易
// setInterval(checkTransactions, 60000); // 每分钟检查一次
module.exports = {
    sendMessageToGroup
};