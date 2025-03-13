module.exports.config = {
  name: "setmoney",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "",
  description: "setmoney.",
  commandCategory: "Kiếm Tiền",
  usages: "setmoney",
  cooldowns: 5
};

module.exports.run = async function ({ Currencies, api, event, args, Users, permssion }) {
  let prefix = (global.data.threadData.get(event.threadID) || {}).PREFIX || global.config.PREFIX;
  const { threadID, senderID, mentions, type, messageReply, messageID } = event;
  let targetID = senderID;
  if (type == 'message_reply') {
    targetID = messageReply.senderID;
  } else if (Object.keys(mentions).length > 0) {
    targetID = Object.keys(mentions)[0];
  }
  const name = (await Users.getNameUser(targetID));
  const money = (await Currencies.getData(targetID)).money;
  const mon = parseInt(args[1]);

  try {
    switch (args[0]) {
      case "+":
        if (permssion < 2) return api.sendMessage("Bạn không đủ quyền", event.threadID);
        await Currencies.increaseMoney(targetID, mon);
        return api.sendMessage({ body: `- Số tiền của ${name} được cộng thêm ${mon} VND\n- Số dư hiện có: ${money + mon} VND` }, event.threadID);

      case "-":
        if (permssion < 2) return api.sendMessage("Bạn không đủ quyền", event.threadID);
        await Currencies.increaseMoney(targetID, -mon);
        return api.sendMessage({ body: `- Số tiền của ${name} bị trừ đi ${mon} VND\n- Số dư hiện có: ${money - mon} VND` }, event.threadID);

      case "*":
        if (permssion < 2) return api.sendMessage("Bạn không đủ quyền", event.threadID);
        await Currencies.increaseMoney(targetID, money * (mon - 1));
        return api.sendMessage({ body: `- Số tiền của ${name} được nhân lên ${mon} lần\n- Số dư hiện có: ${money * mon} VND` }, event.threadID);

      case "/":
        if (permssion < 2) return api.sendMessage("Bạn không đủ quyền", event.threadID);
        await Currencies.increaseMoney(targetID, -money + (money / mon));
        return api.sendMessage({ body: `- Số tiền của ${name} bị chia đi ${mon} lần\n- Số dư hiện có: ${money / mon} VND` }, event.threadID);

      case "++":
        if (permssion < 2) return api.sendMessage("Bạn không đủ quyền", event.threadID);
        await Currencies.increaseMoney(targetID, Infinity);
        return api.sendMessage({ body: `- Số tiền của ${name} được thay đổi thành vô hạn\n- Số dư hiện có: Vô hạn` }, event.threadID);

      case "reset":
        if (permssion < 2) return api.sendMessage("Bạn không đủ quyền", event.threadID);
        await Currencies.decreaseMoney(targetID, money);
        return api.sendMessage({ body: `- Số tiền của ${name} bị reset\n- Số dư hiện có: 0 VND` }, event.threadID);

      case "^":
        if (permssion < 2) return api.sendMessage("Bạn không đủ quyền", event.threadID);
        await Currencies.increaseMoney(targetID, -money + Math.pow(money, mon));
        return api.sendMessage({ body: `- Số tiền của ${name} được lũy thừa lên ${mon} lần\n- Số dư hiện có: ${Math.pow(money, mon)} VND` }, event.threadID);

      case "√":
        if (permssion < 2) return api.sendMessage("Bạn không đủ quyền", event.threadID);
        await Currencies.increaseMoney(targetID, -money + Math.pow(money, 1 / mon));
        return api.sendMessage({ body: `- Số tiền của ${name} được căn bậc ${mon}\n- Số dư hiện có: ${Math.pow(money, 1 / mon)} VND` }, event.threadID);

      case "+%":
        if (permssion < 2) return api.sendMessage("Bạn không đủ quyền", event.threadID);
        await Currencies.increaseMoney(targetID, money * (mon / 100));
        return api.sendMessage({ body: `- Số tiền của ${name} được cộng thêm ${mon}%\n- Số dư hiện có: ${money + (money * (mon / 100))} VND` }, event.threadID);

      case "-%":
        if (permssion < 2) return api.sendMessage("Bạn không đủ quyền", event.threadID);
        await Currencies.increaseMoney(targetID, -money * (mon / 100));
        return api.sendMessage({ body: `- Số tiền của ${name} bị trừ đi ${mon}%\n- Số dư hiện có: ${money - (money * (mon / 100))} VND` }, event.threadID);

      default:
        return api.sendMessage(
          `1. ${prefix}${this.config.name} + [tiền] : Cộng thêm tiền\n` +
          `2. ${prefix}${this.config.name} - [tiền] : Trừ tiền\n` +
          `3. ${prefix}${this.config.name} * [tiền] : Nhân tiền\n` +
          `4. ${prefix}${this.config.name} / [tiền] : Chia tiền\n` +
          `5. ${prefix}${this.config.name} ++ : Vô hạn tiền\n` +
          `6. ${prefix}${this.config.name} reset : Reset tiền\n` +
          `7. ${prefix}${this.config.name} ^ [tiền] : Lũy thừa tiền\n` +
          `8. ${prefix}${this.config.name} √ [tiền] : Căn bậc tiền\n` +
          `9. ${prefix}${this.config.name} +% [tiền] : Tăng tiền theo phần trăm\n` +
          `10. ${prefix}${this.config.name} -% [tiền] : Giảm tiền theo phần trăm\n` +
          `⚠ Nếu muốn set tiền cho người khác thì thêm @tag ở cuối lệnh.\n`,
          event.threadID
        );
    }
  } catch (e) {
    console.log(e);
  }
};
