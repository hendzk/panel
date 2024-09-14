require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6282197011248"
global.namaowner = "𝗠𝗔𝗥𝗗𝗜𝗞𝗭 𝗛𝗢𝗦𝗧𝗜𝗡𝗚"

//======== Setting Bot & Link ========//
global.namabot = "ʙᴏᴛᴢ - ʙʏ 𝗺𝗮𝗿𝗱𝗶𝗸𝘇𝗯𝗼𝘁-𝗺𝗱" 
global.idsaluran = "120363257033988496@newsletter"
global.linkgc = 'https://whatsapp.com/channel/0029Val5o9g7DAWrxB1EA33k'
global.packname = "WhatsApo Bot Official" //jangan diganti
global.author = "𝗺𝗮𝗿𝗱𝗶𝗸𝘇𝗯𝗼𝘁-𝗺𝗱" // jangan diganti biar gk eror

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url Foto =========//
global.image = "https://telegra.ph/file/d6d496e06cbf1ffca015c.jpg" // jangan diganti

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://mardikzgalau.celiaofficial.my.id" // isi pakai domain akun panel kalian
global.apikey = "ptla_ZOHXNB3VX6Qr4fx2fjYhN3nli9xAF4U97BSUFz5eEbi" // isi plta akun panel kalian
global.capikey = "ptlc_IiPylvPZWCGGoE9XyW5tNVzpWSM9XnNQUX7KnfS2wOS" // isi pltc akun panel kalian, masih bingung cara dapetin plta sama pltc? cek youtube Mardikz Hosting aja

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "082197011248"
global.gopay = "082197011248" 
global.ovo = false
global.qris = "Minta Aja"


//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "D2NridS6ERAdZK_dcdLVsaarkxfAqZXY66keIfar"
global.tld1 = "digitalserver.biz.id"
//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Berhasil mengambil data ✅", 
"wait": "🕧 Proses, Mohon Tunggu Sebentar", 
"group": "Fitur Ini Hanya Untuk Didalam Grup❗", 
"private": "Fitur Ini Hanya Untuk Didalam Private Chat❗", 
"admin": "Fitur Ini Hanya Untuk Admin Grup❗", 
"adminbot": "Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin❗", 
"owner": "Fitur Ini Hanya Untuk Owner Bot❗", 
"developer": "Fitur Ini Hanya Untuk Developer❗"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})