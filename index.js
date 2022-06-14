const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const ytpl = require('ytpl')
const ytsr = require('ytsr');
require('dotenv').config();

client.login('ODQyMzc3NDA1NzU0NTA3Mjc1.YJ0bGA.u2WhWMRT9tBP8uSH95vUm_KBfWk');

let temaikenes = [];
let cont = 0;
let loop = false;
let conn = null;
let dispatcher = null;
let timeout = null;

client.on('ready', () => {
    console.log(`Bot is ready as: ${client.user.tag}`);
    cont = 0;
    temaikenes = [];
    loop = false;
    //client.guilds.cache.map(g => {console.log(g.channels.guild)})
});

// client.on('voiceStateUpdate', () => {
//     temaikenes = [];
//     cont = 0;
//     loop = false;
//     conn = null;
//     dispatcher = null;
// });



client.on('message', async msg => {

    if (msg.content.match('^°clean$')) {
        temaikenes = []
        cont = 0
    }

    if (msg.content.match('^°skip [0-9]+$')) {
        let skip = parseInt(msg.content.substr(msg.content.match(" ").index+1),10) 
        for(let j = 0; j < skip; j++){
            temaikenes.shift()
        }
        msg.guild.voice.connection.dispatcher.end()
    }

    if (msg.content.match('^°bzrp$')) {
        if(msg.member.voice.channel){
            const playlist = await ytpl('https://www.youtube.com/playlist?list=PLgzf0q81ziTkymLQCzLtDIXR_XcLiiHih')
            temaikenes = playlist.items.map((item) => {
                return item.title
            })
            again()
        }else{
        msg.reply('Ingrese a un canal de voz')
        }
    }

    if (msg.content.match('^°ferpa$')) {
        if(msg.member.voice.channel){
            const playlist = await ytpl('https://www.youtube.com/watch?v=OmYQtm4CvIA&list=PLjy3UjvJIWqZRwIwfNMTfprEZ2ZjM55EB&ab_channel=FerPalacio')
            temaikenes = playlist.items.map((item) => {
                return item.title
            })
            again()
        }else{
        msg.reply('Ingrese a un canal de voz')
        }
    }

    if (msg.content.match('^°duko$')) {
        if(msg.member.voice.channel){
            const playlist = await ytpl('https://www.youtube.com/watch?v=ioKWSRj-IqY&list=PLFc8xkpRgkDQKhMYMTq4xfoJOZD-i6Zu4&ab_channel=Lara91k')
            temaikenes = playlist.items.map((item) => {
                return item.title
            })
            again()
        }else{
        msg.reply('Ingrese a un canal de voz')
        }
    }


    if (msg.content.match('^°lpda$')) {
            msg.member.voice.channel.join().then(connection =>{
                connection.play(ytdl("https://www.youtube.com/watch?v=2hrAu2DKREc&ab_channel=JuaniLongueira" , { filter: 'audioonly' }));
            }).catch(console.error)
    }

    if (msg.content.match('^°playlist .+$')) {
        if(msg.member.voice.channel){
            const playlist = await ytpl(msg.content.substr(msg.content.match(" ").index+1))
            temaikenes = playlist.items.map((item) => {
                return item.title
            })
            again()
        }else{
        msg.reply('Ingrese a un canal de voz')
        }
    }

    if (msg.content.match('^°loop$')) {
        if(msg.member.voice.channel){
            if(loop == false){
                loop = true
                msg.reply('Loop Activado')
            }else{
                loop = false
                msg.reply('Loop Desactivado')
            }
        }else{
        msg.reply('Ingrese a un canal de voz')
        }
    }

    if (msg.content.match('^°fs$')) {
        if(msg.guild.voice.connection.dispatcher != null){
            msg.guild.voice.connection.dispatcher.end()
        }
    }

    if (msg.content.match('^°fs .+$')) {
        cont = parseInt(msg.content.substr(msg.content.match(" ").index+1)) - 2
        if(msg.guild.voice.connection.dispatcher != null){
            msg.guild.voice.connection.dispatcher.end()
        }
    }

    if (msg.content.match('^°list$')) {
        const listado = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle("Temas en cola")
        .setDescription(
            await Promise.all(
                temaikenes.map(async (temaiken, index) => {
                    if (typeof temaiken == typeof String()){
                        console.log(cont, index,temaiken)
                        const filters1 = await ytsr.getFilters(temaiken)
                        const filter1 = filters1.get('Type').get('Video');
                        const result = await ytsr( filter1.url, {pages: 1 , gl:'ar', hl:'es' })
                        if(cont == index){
                        return `${index+1} --> __ ** ${result.items[0].title} ** __ \n`
                        }
                        else{
                            return `${index+1} --> ** ${result.items[0].title} ** \n`
                        }
                    }
                })
            ) 
        )
        msg.channel.send(listado)
    }

    if (msg.content.match('^°p .+$')) {
        if(msg.member.voice.channel){
            clearTimeout();
            const filters1 = await ytsr.getFilters(msg.content.substr(msg.content.match(" ").index+1))
            const filter1 = filters1.get('Type').get('Video');
            const result = await ytsr( filter1.url, {pages: 1 , gl:'ar', hl:'es' })
            temaikenes.push(result.items[0].title)
            const embed = new Discord.MessageEmbed()
            .setTitle(result.items[0].title)
            .setURL(result.items[0].url)
            .setImage(result.items[0].thumbnails[0]['url'])
            .setColor(0xff0000)
            .setFooter(`Request by: ${msg.author.username}`)
            .setDescription(`Duración: ${result.items[0].duration} \s
            Vistas: ${result.items[0].views}`)
            msg.channel.send(embed)
            again()
        }else{
            msg.reply('Ingrese a un canal de voz')
        }
    }

    if (msg.content.match('^°rm .+$')) {
        if(msg.member.voice.channel){
            const listNumber = parseInt(msg.content.substr(msg.content.match(" ").index+1)) - 1
            if(! isNaN(listNumber) ){
                temaikenes.splice(listNumber, 1)
                if(listNumber < cont){
                    cont--
                }
            }else{
                msg.reply('Ingrese un numero')
            }
        }else{
            msg.reply('Ingrese a un canal de voz')
        }
    }

    async function again(){
        if(temaikenes.length != cont && temaikenes.length != 0 && temaikenes != undefined && temaikenes != null){
            let filters1 = null;
            if(!loop){
                filters1 = await ytsr.getFilters(temaikenes[0])
            }else{
                filters1 = await ytsr.getFilters(temaikenes[cont])
            }
            const filter1 = filters1.get('Type').get('Video');
            const result = await ytsr(filter1.url, {pages: 1, gl:'ar', hl:'es'})
            conn = await msg.member.voice.channel.join()
            if(conn.speaking.bitfield == 0){
                dispatcher = conn.play(ytdl(result.items[0].url), { filter: 'audioonly', volume: 0.5})
                dispatcher.on('finish', () => {
                    if(temaikenes.length == 0){
                        timeout = setTimeout(() => { conn.disconnect() }, 5000 * 60) //Después de 5 min se desconecta
                    }
                    if(!loop){
                        temaikenes.shift()
                        again()
                    }else{
                        console.log(cont, temaikenes)
                        cont++
                        again()
                    }
                })
            }
        }else{
            if(loop){
                cont -= temaikenes.length
                again()
            }
        }
    }

    if(dispatcher != null && timeout != null){
        dispatcher.on('start', () => {clearTimeout(timeout)})
    }

})