module.exports = {

    provides: 'video_src',

    getData: function(url, twitter, whitelistRecord) {
        
        // do not process if there is a whitelist record for this domain as processing will take longer
        if (!whitelistRecord.isDefault && whitelistRecord.isAllowed && whitelistRecord.isAllowed('twitter.player')) {return;}

        var video_src = (twitter.player && twitter.player.value) || twitter.player;
        if (video_src && typeof video_src === "string" 
            && /(youtube|youtu|youtube\-nocookie|vimeo|dailymotion|theplatform|jwplatform|cnevids|newsinc|podbean|simplecast|libsyn|wistia)\./i.test(video_src)
            && !/(youtube|youtu|youtube\-nocookie|vimeo|dailymotion|theplatform|jwplatform|cnevids|newsinc|libsyn|wistia)\./i.test(url)) {

            return {
                video_src: video_src
            };
        }
    }

};