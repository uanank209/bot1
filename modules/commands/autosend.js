module.exports.config = {
    name: 'autosend',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam', // Bok idea thời tiết
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống support-bot',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
        timer: '1:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟏 𝐆𝐢𝐨̛̀ 𝐒𝐚́𝐧𝐠 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}, 
          {
        timer: '2:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟐 𝐆𝐢𝐨̛̀ 𝐒𝐚́𝐧𝐠 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
},
          {
        timer: '3:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟑 𝐆𝐢𝐨̛̀ 𝐒𝐚́𝐧𝐠 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
},
          {
        timer: '4:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟒 𝐆𝐢𝐨̛̀ 𝐒𝐚́𝐧𝐠 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
},
          {
        timer: '5:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟏 𝐆𝐢𝐨̛̀ 𝐒𝐚́𝐧𝐠 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
},
         {
        timer: '6:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟔 𝐆𝐢𝐨̛̀ 𝐒𝐚́𝐧𝐠 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '7:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟕 𝐆𝐢𝐨̛̀ 𝐒𝐚́𝐧𝐠 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '8:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟖 𝐆𝐢𝐨̛̀ 𝐒𝐚́𝐧𝐠 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '9:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟗 𝐆𝐢𝐨̛̀ 𝐒𝐚́𝐧𝐠 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '10:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟏𝟎 𝐆𝐢𝐨̛̀ 𝐓𝐫𝐮̛𝐚 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '11:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟏𝟏 𝐆𝐢𝐨̛̀ 𝐓𝐫𝐮̛𝐚 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '12:00:00 AM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟏𝟐 𝐆𝐢𝐨̛̀ 𝐓𝐫𝐮̛𝐚 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '1:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟏 𝐆𝐢𝐨̛̀ 𝐂𝐡𝐢𝐞̂̀𝐮 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '2:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟐 𝐆𝐢𝐨̛̀ 𝐂𝐡𝐢𝐞̂̀𝐮 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '3:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟑 𝐆𝐢𝐨̛̀ 𝐂𝐡𝐢𝐞̂̀𝐮 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '4:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟒 𝐆𝐢𝐨̛̀ 𝐂𝐡𝐢𝐞̂̀𝐮 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '5:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟓 𝐆𝐢𝐨̛̀ 𝐂𝐡𝐢𝐞̂̀𝐮 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '6:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟔 𝐆𝐢𝐨̛̀ 𝐓𝐨̂́𝐢 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '7:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟕 𝐆𝐢𝐨̛̀ 𝐓𝐨̂́𝐢 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '8:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟖 𝐆𝐢𝐨̛̀ 𝐓𝐨̂́𝐢 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '9:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟗 𝐆𝐢𝐨̛̀ 𝐓𝐨̂́𝐢 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '10:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟏𝟎 𝐆𝐢𝐨̛̀ Đ𝐞̂𝐦 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '11:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟏𝟏 𝐆𝐢𝐨̛̀ Đ𝐞̂𝐦 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}
         {
        timer: '12:00:00 PM',
    message: ['━━[ 𝐀𝐮𝐭𝐨 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐓𝐮̛̀ 𝐁𝐨𝐭 ]━━\n▱▱▱▱▱▱▱▱\n➝ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ {time}\n➝ 𝐂𝐡𝐚̀𝐨 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐂𝐮𝐭𝐞 𝟏𝟐 𝐆𝐢𝐨̛̀ Đ𝐞̂𝐦 𝐕𝐮𝐢 𝐕𝐞̉ 𝐍𝐡𝐚']
}];
module.exports.onLoad = o => setInterval(async() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())){
  const axios = require('axios');
const time = process.uptime() + global.config.UPTIME,
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
  var msg = r(á.message);
  const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI('Hồ Chí Minh')}`);
    var abc =`⛅===「 𝗧𝗕 𝗧𝗵𝗼̛̀𝗶 𝗧𝗶𝗲̂́𝘁 」===⛅\n━━━━━━━━━━━━━━\n[⚜️] ➜ 𝗖𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝘁𝗵𝗼̛̀𝗶 𝘁𝗶𝗲̂́𝘁 𝘁𝗮̣𝗶 ${res.data[0].location.name}\n[⚜️] ➜ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.day} ${res.data[0].current.date}\n[⚜️] ➜ 𝗡𝗵𝗶𝗲̣̂𝘁 đ𝗼̣̂: ${res.data[0].current.temperature}°${res.data[0].location.degreetype}\n[⚜️] ➜ 𝗠𝗼̂ 𝘁𝗮̉: ${res.data[0].current.skytext}\n[⚜️] ➜ đ𝗼̣̂ 𝗮̂̉𝗺: ${res.data[0].current.humidity}\n[⚜️] ➜ 𝗛𝘂̛𝗼̛́𝗻𝗴 𝗴𝗶𝗼́: ${res.data[0].current.winddisplay}\n[⚜️] ➜ 𝗚𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.observationtime}`;
    msg = msg.replace(/{abc}/,abc);
msg = msg.replace(/{hours}/g, hours)
  msg = msg.replace(/{minutes}/g, minutes)
  msg = msg.replace(/{seconds}/g, seconds)
    msg = msg.replace(/{time}/g, require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await axios.get(`${global.configApi.domain}/saying/hearing?apikey=${global.configApi.keyApi}`)).data.data)
            msg = {
                body: msg, attachment: (await axios.get((await axios.get(`${global.configApi.domain}/images/anime?apikey=${global.configApi.keyApi}`)).data.data, {
                    responseType: 'stream'
                })).data
            };
   global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
    };
}, 1000);

module.exports.run = async o => {
  try{
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const { api, event, args } = o;
	const { threadID, messageID } = event;
  var bok = args.join(" ");
 if (!bok) return api.sendMessage("[⚜️] ➜ Nhập tỉnh/tp cần xem thời tiết", threadID);
        const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI(bok)}`);
        const bokk = res.data[0].forecast;
        var text = `[⚜️] ➜ Thời tiết của: ${bok} vào các ngày`;
        for (let i = 0; i < 5; i++) {
            text += `\n${i + 1}. ${bokk[i].day} ${bokk[i].date}\n[⚜️] ➜ Nhiệt độ dự báo: từ ${bokk[i].low} đến ${bokk[i].high}\n[⚜️] ➜ Mô tả: ${bokk[i].skytextday}\n[⚜️] ➜ Tỷ lệ mưa: ${bokk[i].precip}\n`
        };
  api.sendMessage(text, threadID, messageID)
  }catch(err){api.sendMessage(`${err}`, threadID)}
    }