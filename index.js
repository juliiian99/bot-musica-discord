const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const ytpl = require('ytpl')
const ytsr = require('ytsr');
require('dotenv').config();

client.login(process.env.TOKEN);

let commands = [
    {com: '°list', msg: 'Lista de canciones'}, 
    {com: '°p', msg: 'Busca canción y la agrega a la cola'},
    {com: '°l', msg: 'Para que no se rompa al buscar por link'},
    {com: '°clear', msg: 'Borra mensajes del chat'},
    {com: '°leave', msg: 'Desconecta al bot'},
    {com: '°loop', msg: 'Activa el loop'},
    {com: '°playlist', msg: 'Crea una lista con una playlist de youtube'},
    {com: '°fs', msg: 'Skipea a la cancion siguiente'},
    {com: '°fs [numero]', msg: 'Skipea al numero en la lista'},
    {com: '°skip [numero]', msg: 'Elimina y skipea las canciones de la lista segun el numero ingresado'},
    {com: '°rm [numero]', msg: 'Elimina la cancion en la lista del numero ingresado'},
];
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

try{
    if(msg.content.match('^°antihiroshima$')){
        if(msg.member.voice.channel.members.find(guild => {
                return guild.user.username === 'Fj255'
            })){
            msg.member.voice.channel.members.forEach(GuildMember=>{
                if(GuildMember.user.username === 'Fj255'){
                    GuildMember.voice.kick().then( guild =>{
                        msg.channel.send(`${guild.user.username} a toxiquear a jujuy`)
                    }).catch(console.error)
                }
            })
        }else{
            msg.channel.send('El pete no está en el canal')
        }
    }

    if(msg.content.match('^°antiveridificul$')){
        if(msg.member.voice.channel.members.find(guild => {
                return guild.user.username === 'Veridificul'
            })){
            msg.member.voice.channel.members.map(GuildMember=>{
                if(GuildMember.user.username === 'Veridificul'){
                    GuildMember.voice.kick().then( guild =>{
                        msg.channel.send(`${guild.user.username} a programar el bot pt`)
                    }).catch(console.error)
                }
            })
        }else{
            msg.channel.send('El pete no está en el canal')
        }
    }

    if(msg.content.match('^°anticaniche$')){
        if(msg.member.voice.channel.members.find(guild => {
                return guild.user.username === 'Jirafa'
            })){
            msg.member.voice.channel.members.forEach(GuildMember=>{
                if(GuildMember.user.username === 'Jirafa'){
                    GuildMember.voice.kick().then( guild =>{
                        msg.channel.send(`${guild.user.username} sale asado`)
                    }).catch(console.error)
                }
            })
        }else{
            msg.channel.send('El pete no está en el canal')
        }
    }

    if(msg.content.match('^°antisocialista$')){
        if(msg.member.voice.channel.members.find(guild => {
                return guild.user.username === 'bloodyboyjz'
            })){
            msg.member.voice.channel.members.forEach(GuildMember=>{
                if(GuildMember.user.username === 'bloodyboyjz'){
                    GuildMember.voice.kick().then( guild =>{
                        msg.channel.send(`${guild.user.username} Menem wins`)
                    }).catch(console.error)
                }
            })
        }else{
            msg.channel.send('El pete no está en el canal')
        }
    }

    if(msg.content.match('^°ahi vino mati$')){
        if(msg.member.voice.channel.members.find(guild => {
                return guild.user.username === 'Gabote99'
            })){
            msg.member.voice.channel.members.forEach(GuildMember=>{
                if(GuildMember.user.username === 'Gabote99'){
                    GuildMember.voice.kick().then( guild =>{
                        msg.channel.send(`${guild.user.username} Icardi wins`)
                    }).catch(console.error)
                }
            })
        }else{
            msg.channel.send('El pete no está en el canal')
        }
    }

    if(msg.content.match('^°antiotaku$')){
        if(msg.member.voice.channel.members.find(guild => {
                return guild.user.username === 'Princess Of The Abyss'
            })){
            msg.member.voice.channel.members.forEach(GuildMember=>{
                if(GuildMember.user.username === 'Princess Of The Abyss'){
                    GuildMember.voice.kick().then( guild =>{
                        msg.channel.send(`${guild.user.username} A bañarse puta`)
                    }).catch(console.error)
                }
            })
        }else{
            msg.channel.send('El pete no está en el canal')
        }
    }

    if(msg.content.match('^°antipitu$')){
        if(msg.member.voice.channel.members.find(guild => {
                return guild.user.username === 'Alejandro Menna'
            })){
            msg.member.voice.channel.members.forEach(GuildMember=>{
                if(GuildMember.user.username === 'Alejandro Menna'){
                    GuildMember.voice.kick().then( guild =>{
                        msg.channel.send(`${guild.user.username} hizo rampage y explotó`)
                    })
                }else{
                    msg.channel.send('El pete no está en el canal')
                }
            })
        }
    }

    if(msg.content.match('^°rampage$')){
        msg.member.voice.channel.members.forEach(GuildMember=>{
            if(GuildMember.user.username === 'Alejandro Menna'){
                GuildMember.voice.setMute(true).then( guild =>{
                    msg.channel.send(`${guild.user.username} hizo rampage y explotó`)
                }).catch(console.error)
            }else{
                msg.channel.send('El pete no está en el canal')
            }
        })
    }

    if(msg.content.match('^°unrampage$')){
        msg.member.voice.channel.members.forEach(GuildMember=>{
            if(GuildMember.user.username === 'Alejandro Menna'){
                GuildMember.voice.setMute(false).then( guild =>{
                    msg.channel.send(`${guild.user.username} no hizo rampage`)
                }).catch(console.error)
            }else{
                msg.channel.send('El pete no está en el canal')
            }
        })
    }

    if (msg.content.match('^°hola$')) {
        msg.channel.send(`Hola ${msg.author}`)
    }

    if (msg.content.match('^°clear [0-9]+$')) {
        msg.channel.bulkDelete(parseInt(msg.content.substr(msg.content.match(" ").index+1)) + 1);
    }

    if (!msg.guild) return;

    if (msg.content.match('^°l .+$')) {
        msg.member.voice.channel.join().then(connection =>{
        connection.play(ytdl(msg.content.substr(msg.content.match(" ").index+1) , { filter: 'audioonly' }));
        return; }).catch(console.error)
    }

    if (msg.content.match('^°leave$')) {
        if (msg.member.voice.channel) {
            if((await msg.member.voice.channel.join()).status == 0){
                msg.member.voice.channel.leave();
            }
            temaikenes = []
            cont = 0
        }
    }

    if (msg.author.username === 'nn') {
        msg.delete()
        msg.channel.send('Deja de escribir bigote')
    }

    if (msg.content.match('^°peruano$')) {
        msg.channel.send("Ernesto")
    }

    if (msg.content.match('^°romi$')) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Negra Putaku')
        .setColor(0xff0000)
        .setDescription('Se baña una vez por semana')
        .setImage('https://img.utdstc.com/icon/065/b36/065b36b96e67749d3d12810f43c72353c1534bfcb590db00ec0c8cae6a8a3f66:200')
        msg.channel.send(embed)
    }

    if (msg.content.match('^°juan$')) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Socialista Empobrecedor')
        .setColor(0xff0000)
        .setDescription('Sugar daddy profesional')
        .setFooter('El primer trabajador')
        .setImage('https://d1iibezb83drel.cloudfront.net/wp-content/uploads/2020/07/Juan-Per%C3%B3n-688x387.jpg')
        msg.channel.send(embed)
    }

    if (msg.content.match('^°emoji$')) {
        msg.channel.send(':poop:')
    }

    if (msg.content.match('^°gabo$')) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Amigo de Mati')
        .setColor(0xff0000)
        .setDescription('Juega con la drow como mati jugó con él')
        .setImage('https://as01.epimg.net/futbol/imagenes/2020/04/15/internacional/1586941033_107776_1586941167_noticia_normal.jpg')
        msg.channel.send(embed)
    }

    if (msg.content.match('^°gonza$')) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Viejo Verguero')
        .setColor(0xff0000)
        .setDescription('Tiene más instagram de menores que años')
        .setImage('https://ca-times.brightspotcdn.com/dims4/default/d04bfd1/2147483647/strip/true/crop/4237x2737+0+0/resize/840x543!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb8%2F48%2F394137d3db929bb2d8755298b22b%2Fimg-460618-la-me-triple-2-1-3k5ll34h.jpg')
        msg.channel.send(embed)
    }

    if (msg.content.match('^°fer$')) {
        msg.channel.send('Carreame y decime marta');
    }

    if (msg.content.match('^°galo$')) {
        const embed = new Discord.MessageEmbed()
        .setTitle('FGalo')
        .setColor(0xff0000)
        .setDescription('Pega con glock y vende merca por San Miguel')
        .setImage('https://i1.wp.com/hipertextual.com/wp-content/uploads/2018/01/breaking_bad_vince_gilligan_amc.jpg?w=1000&ssl=1')
        msg.channel.send(embed)
        msg.member.voice.channel.join().then(connection =>{
            connection.play(ytdl(`https://www.youtube.com/watch?v=z0JPTgAtqzw`, { filter: 'audioonly' }));
            return; }).catch(console.error)
    }

    if (msg.content.match('^°lucho$')) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Hijo de Puta')
        .setColor(0xff0000)
        .setDescription('Carrea con awp pero en dota se queda afk\nEl de la imagen es mejor tipo que él')
        .setImage('https://s1.eestatic.com/2020/04/28/cultura/historia/segunda_guerra_mundial-nazismo-holocausto_485962165_171816505_1024x576.jpg')
        msg.channel.send(embed)
    }

    if (msg.content.match('^°alpacu$')) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Facu')
        .setColor(0xff0000)
        .setDescription('Flasher profesional de aliades en cs')
        .setImage('https://www.efeverde.com/storage/2018/03/animales-alpaca--768x520.jpg')
        msg.channel.send(embed)
    }

    if (msg.content.match('^°checho$')) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Navaja')
        .setColor(0xff0000)
        .setDescription('en la secundaria peleaaabaaan coooon navaja')
        .setImage('https://bahcoherramientas.pe/wp-content/uploads/2019/10/K-AP.1.png')
        msg.channel.send(embed)
    }

    if (msg.content.match('^°ale$')) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Ale')
        .setColor(0xff0000)
        .setDescription('Sigue pendejas chetas en twitch')
        .setImage('https://static-cdn.jtvnw.net/jtv_user_pictures/84b648b2-e81b-495b-aa37-a815c4999c4b-profile_image-70x70.png')
        msg.channel.send(embed)
    }

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
        msg.reply('Metete a un canal de voz mogodown')
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
        msg.reply('Metete a un canal de voz mogodown')
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
        msg.reply('Metete a un canal de voz mogodown')
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
        msg.reply('Metete a un canal de voz mogodown')
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
        msg.reply('Metete a un canal de voz mogodown')
        }
    }
    }catch(error){
        console.log(error)        
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
        .setTitle("Temas en tu cola")
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

    if (msg.content.match('^°commands$')) {
        const cmds = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle("Temas en tu cola")
        .setDescription(
            commands.map((obj) => {
                return `__ ** ${obj.com} ** __ -->  ${obj.msg} \n`
            })
        )
        msg.channel.send(cmds)
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
            msg.reply('Metete a un canal de voz mogodown')
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
                msg.reply('Escribi bien pajero')
            }
        }else{
            msg.reply('Metete a un canal de voz mogodown')
        }
    }

    // async function again(){
    //     if(temaikenes.length !== 0){
    //         const filters1 = await ytsr.getFilters(temaikenes[0])
    //         const filter1 = filters1.get('Type').get('Video');
    //         const result = await ytsr(filter1.url, {pages: 1, gl:'ar', hl:'es'})
    //         conn = await msg.member.voice.channel.join()
    //         if(conn.speaking.bitfield == 0){
    //             dispatcher = conn.play(ytdl(result.items[0].url), { filter: 'audioonly', volume: 0.5})
    //             dispatcher.on('finish', () => {
    //                 if(temaikenes.length == 0){
    //                     timeout = setTimeout(() => { conn.disconnect() }, 5000 * 60) //Después de 5 min se desconecta
    //                 }
    //                 if(!loop){
    //                     temaikenes.shift()
    //                     again()
    //                 }
    //             })
    //         }
    //     }
    // }

    // async function again2(){
    //     if(temaikenes.length != cont && temaikenes.length != 0 && temaikenes != undefined && temaikenes != null){
    //         const filters1 = await ytsr.getFilters(temaikenes[cont])
    //         const filter1 = filters1.get('Type').get('Video');
    //         const result = await ytsr(filter1.url, {pages: 1, gl:'ar', hl:'es'})
    //         conn = await msg.member.voice.channel.join()
    //         if(conn.speaking.bitfield == 0 && result.items[0].url != undefined){
    //             dispatcher = conn.play(ytdl(result.items[0].url), { filter: 'audioonly', volume: 0.5})
    //             dispatcher.on('finish', () => {
    //                 if(temaikenes.length == 0){
    //                     timeout = setTimeout(() => { conn.disconnect() }, 5000 * 60) //Después de 5 min se desconecta
    //                 }
    //                 if(loop){
    //                     cont++
    //                     again2()
    //                 }
    //             })
    //         }
    //     }else{
    //         cont -= temaikenes.length
    //         again2()
    //     }
    // }

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
                if(result.items[0].url !== undefined){
                    dispatcher = conn.play(ytdl(result.items[0].url), { filter: 'audioonly', volume: 0.5})
                    dispatcher.on('finish', () => {
                        // if(temaikenes.length == 0){
                        //     timeout = setTimeout(() => { conn.disconnect() }, 5000 * 60) //Después de 5 min se desconecta
                        // }
                        if(!loop){
                            temaikenes.shift()
                            again()
                        }else{
                            cont++
                            again()
                        }
                    })
                }else{
                    temaikenes.shift();
                }
            }
        }else{
            if(loop){
                cont -= temaikenes.length
                again()
            }
        }
    }

    // if(dispatcher != null && timeout != null){
    //     dispatcher.on('start', () => {clearTimeout(timeout)})
    // }


    /*
    async function test(){
        const playlist = await ytpl('https://www.youtube.com/playlist?list=PLgzf0q81ziTkymLQCzLtDIXR_XcLiiHih')
        bzrp = playlist.items.map((item) => {
            const conn = await msg.member.voice.channel.join()
            if(conn.speaking.bitfield == 0){
                list(item)
            }
        })
    }

    
    function queue(){
        return new Promise(resolve, reject =>{
                resolve(() => {
                    msg.member.voice.channel.join().then(connection=>{
                        setTimeout(() => {
                        const temaiken = msg.content.substr(msg.content.match(" ").index+1)
                        temaikenes.push(temaiken)
                        const searchResults = ytsr(temaiken, {pages: 1} )
                        searchResults.then(async result => {
                            connection.play(ytdl(result.items[0].url), { filter: 'audioonly', volume: 0.5})
                            const embed = new Discord.MessageEmbed()
                            .setTitle(result.items[0].title)
                            .setURL(result.items[0].url)
                            .setImage(result.items[0].thumbnails[0]['url'])
                            .setColor(0xff0000)
                            .setFooter(`Request by: ${msg.author.username}`)
                            .setDescription(`Duración: ${result.items[0].duration} \s
                            Vistas: ${result.items[0].views}`)
                            msg.channel.send(embed)
                            temaikenes.pop()
                            }, result.items[0].duration[0]*60*1000 + result.items[0].duration[2]*60*10000 +  result.items[0].duration[3]*1000)
                            })
                        .catch(console.error)})
                    .catch(console.error)
                })
                reject('Pifie')
        })
    }
    */
})