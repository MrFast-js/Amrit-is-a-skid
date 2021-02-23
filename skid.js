    bot.on('chat', (username, message) => {
        let msg = message
        let user = username
        if (user != bot.username) {
            return io.emit('chat', {
                message: msg,
                usr: user
            });
        }


    })

    bot.on('chat', (username, message) => {
        const args = message.split(' ')
        const cmd = message.split(' ')[0]



        if (cmd === `${prefix}accept`) {
            bot.chat(`/tpy ${isAllowed(username)}`)
        }

        if (cmd === `${prefix}a`) {
            bot.chat(`/tpy ${isAllowed(username)}`)
        }

        

        if (cmd.toLowerCase() === `${prefix}amritismydaddy`) {
            if (usedRecently.has(`${username.toString()}`)) {
                bot.chat(`/w {username} You have to wait a 1 hour cooldown ${Math.random() * Math.random()}`)
            } else {
                bot.chat(`/tpa ${username.toString()}`)
                usedRecently.add(`${username.toString()}`)
                setTimeout(() => {
                    // Removes the user from the set after 10 mins
                    usedRecently.delete(`${username.toString()}`);
                }, 3600000);
            }
        }

        if (cmd === `${prefix}help`) {
            chat(`: ${username} Here is the github page with the commands! https://amrit6969.github.io/Amrit-Bot/ ${Math.random() * Math.random()}`, `${username} used ${prefix}help.`.magenta, `${username} used ${prefix}help.`)
        }

        if (cmd === `${prefix}dupe`) {
            chat(`: ${username} Here is a video with a working 0b0t dupe! https://www.youtube.com/watch?v=ul4f9Etqq70 ${Math.random() * Math.random()}`, `${username} used ${prefix}dupe.`.magenta, `${username} used ${prefix}help.`)
        }

        if (cmd === `${prefix}namemc`) {
            chat(`: ${username} Send me a friend request on NameMC! https://namemc.com/profile/Amrit1.2 ${Math.random() * Math.random()}`, `${username} used ${prefix}namemc.`.magenta, `${username} used ${prefix}help.`)
        }

        if (cmd === `${prefix}russianroulette`) {
            chat(`${RussianRoulette()}`, `${username} used ${prefix}russianroulette.`.yellow, `${username} used ${prefix}russianroulette.`)
        }

        if (cmd === `${prefix}8ball`) {
            chat(`${Ball()}`, `${username} used ${prefix}8ball.`.yellow, `${username} used ${prefix}8ball.`)
        }

        if (cmd === `${prefix}tpa`) {
            bot.chat(`/tpa ${config.botOwner}`)
        }

        if (cmd === `${prefix}test`) {
            console.log(bot.players)
        }

        if (cmd === `${prefix}die`) {
            bot.chat(`/kill`)
        }

        if (cmd === `${prefix}uuid`) {
            chat(`, Your uuid is ${bot.players[username].uuid}!`, `${username} used ${prefix}uuid.`.yellow, `${username} used ${prefix}uuid.`)
        }

        if (cmd === `${prefix}ping`) {
            chat(`, Your ping is ${bot.players[username].ping}!`, `${username} used ${prefix}ping.`.yellow, `${username} used ${prefix}ping.`)
        }

        if (cmd === `${prefix}coinflip`) {
            function coinflip() {
                let math = Math.random()
                if (math < 0.5) {
                    return ('Heads!')
                }
                if (math > 0.5) {
                    return ('Tails!')
                }
            }
            return (chat(`, ${coinflip()}`, `${username} used ${prefix}coinflip.`.yellow, `${username} used ${prefix}coinflip.`))
        }

        const fetch = require('node-fetch')

        if (cmd === `${prefix}kd`) {
            let serverinfo = fetch(`https://api.moobot.dev/data/0b0t/kd/${bot.players[username].uuid}`)
                .then(res => res.json()).then(res => bot.chat(`: ${username}: Kills ${res['kills']} , Deaths ${res['deaths']}`))
        }

    })
