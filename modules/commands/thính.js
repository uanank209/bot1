module.exports.config = {
  name: "thính",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Thả thính người bạn thích",
  commandCategory: "Tình yêu",
  usages: "thính @tag",
  cooldowns: 5,
  dependencies: {"request": "","fs": "","axios": ""}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require("request");
        const fs = require("fs");
        const axios = require("axios");
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        const res = await axios.get(`https://docs-api.jrtxtracy.repl.co/saying/hearing?apikey=JRTvip_2200708248`);
var love = res.data.data;
  axios.get('https://docs-api.jrtxtracy.repl.co/images/anime?apikey=JRTvip_2200708248').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
    api.sendMessage({body: `[⚜️] ${tag} ơi!!! Tôi muốn gửi đôi lời  tặng cậu ${tag} xin hãy nhận lấy cậu nhé ❤️ vì tôi yêu cậu\n[💓] Điều muốn nói:\n${love}` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + `/cache/kiss.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kiss.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/kiss.${ext}`)).on("close", callback);
			})
}