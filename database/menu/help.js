const help = (pushname, prefix, botName, ownerName, reqXp, uangku) => {
        return `
Halo, ${pushname} 👋
Semoga harimu Menyenangkan, Ingat bot ini masih dalam pengembangan alpha, yang artinya masih ada banyak fitur yg rusak, pake seadanya saja okey

   ╭──────────────────
   │  Hai, aku ${botName}
   ┠≽ *${prefix}info*
   ┠≽ *${prefix}blocklist*
   ┠≽ *${prefix}chatlist (error)*
   ┠≽ *${prefix}ping*
   ┠≽ *${prefix}bugreport*
   ┃───────────────────
   ┃➸ Downloader menu
   ┃➸ ketik *${prefix}downloader*,
   ┃➸ jika tidak paham cara memakai 
   ┃ salah satu cmd dibawah ini
   ┃───────────────────
   ┠≽ *${prefix}pinterest*
   ┠≽ *${prefix}ytmp3 menggunakan link*
   ┠≽ *${prefix}ytmp4 menggunakan link*
   ┠≽ *${prefix}tiktok menggunakan link*
   ┠≽ *${prefix}play*
   ┠≽ *${prefix}joox*
   ┃───────────────────
   ┃➸ Education menu
   ┃➸ ketik *${prefix}education*,
   ┃➸ jika tidak paham cara memakai 
   ┃ salah satu cmd dibawah ini
   ┃───────────────────
   ┠≽ *${prefix}wiki*
   ┠≽ *${prefix}wikien wikipedia berbahasa inggris*
   ┠≽ *${prefix}nulis*
   ┠≽ *${prefix}quotes*
   ┠≽ *${prefix}quotes2*
   ┠≽ *${prefix}tafsirmimpi*
   ┠≽ *${prefix}translate <kode bahasa|teks>*
   ┠≽ *${prefix}artinama*
   ┃───────────────────
   ┃➸ Fun menu
   ┃➸ ketik *${prefix}fun*,
   ┃➸ jika tidak paham cara memakai 
   ┃ salah satu cmd dibawah ini
   ┃─────────────────── 
   ┠≽ *${prefix}alay*
   ┠≽ *${prefix}bucin*
   ┠≽ *${prefix}truth*
   ┠≽ *${prefix}dare*
   ┠≽ *${prefix}simi*
   ┠≽ *${prefix}say*
   ┠≽ *${prefix}meme*
   ┠≽ *${prefix}memeindo*
   ┃───────────────────
   ┃➸ Image Maker menu
   ┃➸ ketik *${prefix}imagemaker*,
   ┃➸ jika tidak paham cara memakai 
   ┃ salah satu cmd dibawah ini
   ┃───────────────────
   ┠≽ *${prefix}blackpink*
   ┠≽ *${prefix}partytext*
   ┠≽ *${prefix}3dtext*
   ┠≽ *${prefix}firetext*
   ┠≽ *${prefix}glitch*
   ┠≽ *${prefix}shadow*
   ┠≽ *${prefix}breakwalll* 
   ┠≽ *${prefix}galaxytext*
   ┠≽ *${prefix}lovepaper* (eror)
   ┠≽ *${prefix}glowtext* 
   ┠≽ *${prefix}romancetext* 
   ┠≽ *${prefix}hartatahta* 
   ┠≽ *${prefix}undergocean* (eror)
   ┠≽ *${prefix}woodenboards* (eror)
   ┠≽ *${prefix}wolfmetal* (eror)
   ┠≽ *${prefix}metalictglow* (eror)
   ┠≽ *${prefix}8bit* (eror)
   ┠≽ *${prefix}harrypotter* (eror)
   ┠≽ *${prefix}phcomment* (eror)
   ┠≽ *${prefix}carbon* (eror)
   ┃───────────────────
   ┃➸ Logo Menu
   ┃➸ ketik *${prefix}logo*,
   ┃➸ jika tidak paham cara memakai 
   ┃ salah satu cmd dibawah ini
   ┃─────────────────── 
   ┠≽ *${prefix}ninjalogo*
   ┠≽ *${prefix}logowolf*
   ┠≽ *${prefix}halloweentext*
   ┠≽ *${prefix}phlogo*
   ┠≽ *${prefix}neonlogo*
   ┠≽ *${prefix}neonlogo2*
   ┠≽ *${prefix}lionlogo*
   ┠≽ *${prefix}jokerlogo*
   ┠≽ *${prefix}pubglogo*
   ┃───────────────────
   ┃➸ Information menu
   ┃➸ ketik *${prefix}information*,
   ┃➸ jika tidak paham cara memakai 
   ┃ salah satu cmd dibawah ini
   ┃─────────────────── 
   ┠≽ *${prefix}bahasa*
   ┠≽ *${prefix}kodenegara*
   ┠≽ *${prefix}kbbi*
   ┠≽ *${prefix}fakta*
   ┠≽ *${prefix}infocuaca*
   ┠≽ *${prefix}infogempa*
   ┠≽ *${prefix}covidcountry*
   ┠≽ *${prefix}quran*
   ┠≽ *${prefix}jsholat*
   ┃───────────────────
   ┃➸ Kerang ajaib menu
   ┃➸ ketik *${prefix}kerang*,
   ┃➸ jika tidak paham cara memakai 
   ┃ salah satu cmd dibawah ini
   ┃─────────────────── 
   ┠≽ *${prefix}apakah*
   ┠≽ *${prefix}bisakah*
   ┠≽ *${prefix}kapankah*
   ┠≽ *${prefix}watak*
   ┠≽ *${prefix}hobby*
   ┠≽ *${prefix}gantengcek*
   ┠≽ *${prefix}cantikcek*
   ┃───────────────────
   ┃➸ Other menu
   ┃➸ ketik *${prefix}funmenu*,
   ┃➸ jika tidak paham cara memakai 
   ┃ salah satu cmd dibawah ini
   ┃─────────────────── 
   ┠≽ *${prefix}lirik*
   ┠≽ *${prefix}chord*
   ┠≽ *${prefix}send*
   ┠≽ *${prefix}wame*
   ┠≽ *${prefix}virtex*
   ┠≽ *${prefix}qrcode <text>*
   ┠≽ *${prefix}timer*
   ┠≽ *${prefix}fml*
   ┠≽ *${prefix}fml2*
   ┠≽ *${prefix}wait*
   ┠≽ *${prefix}ytsearch*
   ┠≽ *${prefix}trendtwit*
   ┠≽ *${prefix}tts*
   ┠≽ *${prefix}tiktokstalk*
   ┠≽ *${prefix}igstalk*
   ┠≽ *${prefix}afk*
   ┠≽ *${prefix}sticker*
   ┠≽ *${prefix}stickergif*
   ┠≽ *${prefix}ttp*
   ┃───────────────────
   ┃➸ wibu menu bau bawang idih
   ┃➸ ketik *${prefix}wibu*,
   ┃➸ jika tidak paham cara memakai 
   ┃ salah satu cmd dibawah ini
   ┃─────────────────── 
   ┠≽ *${prefix}neonime*
   ┠≽ *${prefix}pokemon*
   ┠≽ *${prefix}loli*
   ┠≽ *${prefix}waifu*
   ┠≽ *${prefix}randomanime*
   ┠≽ *${prefix}husbu*
   ┠≽ *${prefix}husbu2*
   ┠≽ *${prefix}wait*
   ┠≽ *${prefix}nekonime*
   ╿ ${ownerName},
   ╰╼≽ *Developer © ${botName}`
}
exports.help = help
