let handler = async function (m, { command, isCreator, example, text, Reply, capital, LoadDataBase}) {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(global.mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("on/off"))
if (!/on|off/.test(text)) return m.reply(example("on/off"))
let event
let name
let actions 
if (command == "autoread") {
event = global.db.settings.autoread
name = "Autoread"
actions = async (kondisi) => {
global.db.settings.autoread = kondisi
}
}
if (command == "autorecording") {
event = global.db.settings.autorecording
name = "Autorecording"
actions = async (kondisi) => {
global.db.settings.autorecording = kondisi
}
}
if (command == "autotyping") {
name = "Autotyping"
event = global.db.settings.autotyping
actions = async (kondisi) => {
global.db.settings.autotyping = kondisi
}
}
if (command == "online") {
  event = global.db.settings.available
  name = "online"
  actions = async (kondisi) => {
    global.db.settings.available = kondisi
  }
}

if (command == "unavailable") {
  event = global.db.settings.unavailable
  name = "unavailable"
  actions = async (kondisi) => {
    global.db.settings.unavailable = kondisi
  }
}
if (command == "autostatus") {
event = global.db.settings.readsw
name = "autostatus"
actions = async (kondisi) => {
global.db.settings.readsw = kondisi
}
}
if (text == "on") {
if (event == true) return m.reply(`*${name} already on!*`)
actions(true)
m.reply(`*successfully turned on ${name} ✅*`)
}
if (text == "off") {
if (event == false) return m.reply(`*${name} already off!*`)
actions(false)
m.reply(`successfully turned off ${name} ✅`)
}
}

handler.command = ["autoread", "autorecording", "online", "unavailable", "autotyping", "autostatus"]

module.exports = handler