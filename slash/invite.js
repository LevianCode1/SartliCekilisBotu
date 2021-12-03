//Bot Coded by AnthonyVTdev Pleas Give Me Credits If Used Thank You

const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'invite',
    description: '➕ Invite the bot to your server!',
    run: async (client, interaction) => {
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel(`Invite ${client.user.username}`)
        .setStyle('LINK')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=347200&scope=applications.commands%20bot`),
        new MessageButton()
        .setLabel('Support Server')
        .setStyle('LINK')
        .setURL("https://discord.gg/ZAzGRFTv59"),
    )
    let invite = new MessageEmbed()
    .setAuthor(`Invite ${client.user.username} `, client.user.avatarURL())
    .setTitle("Invite & Support Link!")
    .setDescription(`Invite ${client.user} to your server today & enjoy seamless giveaways with advvanced features!`)
    .setColor('#2F3136')
    .setTimestamp()
    .setFooter(`Requested by ${interaction.user.tag} | GiveawayBot™ v3 By AnthonyVTdev`, interaction.user.displayAvatarURL())
    interaction.reply({ embeds: [invite], components: [row]});
}
}

//Bot Coded by AnthonyVTdev Pleas Give Me Credits If Used Thank You