/**
 * Discord Bot settings. These are mandatory and will affect what the bot
 *   posts about, and where it posts to.
 */
//
module.exports = {
  discord: {
    // The Discord token of the Bot to post through.
    token: process.env.DISCORD_TOKEN,
    // The ID of the discord channel to post battleboard infos to.
    feedChannelId: process.env.ALBION_FEED_CHANNEL_ID,
    battleChannelId: process.env.ALBION_BATTLE_CHANNEL_ID,
    // The ID of the discord channel to post albion status infos to.
    statusChannelId: process.env.ALBION_STATUS_CHANNEL_ID
  },
  guild: {
    // The name of your guild (or guilds, if the guild is large).
    guilds: process.env.ALBION_GUILDS ? process.env.ALBION_GUILDS.split(',') : [],
    // The names of the players who track
    names: process.env.ALBION_NAMES ? process.env.ALBION_NAMES.split(',') : [],
    // The alliance your guild belongs to
    alliance: process.env.ALBION_ALLIANCE
  },
  battle: {
    // Min players to report as battle
    minPlayers: 10,
    // Min guild players to report as battle
    minRelevantPlayers: 5
  },
  kill: {
    // Min killfame to report kill
    minFame: 25000
  }
};
