var emojiList = {
    "naughty":"&#x1f608;",
    "cry":"&#x1F602;",
    "i":"&#x1F440;",
    "see":"&#x1F440;",
    "eye":"&#x1F440;",
    "gun":"&#x1F52B;",
    "together":"&#x1F46A;",
    "run":"&#x1F3C3;",
    "pig":"&#x1F437;",
    "fly":"&#x2708;",
    "sitting":"&#x1F4BA;",
    "corn":"&#x1F33D;",
    "waiting":"&#x231B;",
    "policeman":"&#x1F46E;",
    "van":"&#x1F690;",
    "corporation":"&#x1F3E2;",
    "t-shirt":"&#x1F455;",
    "stupid":"&#x1F61D;",
    "krishna":"&#x9784;",
    "poe":"&#x1F474;",
    "penguin":"&#x1F427;",
    "tower":"&#x1F5FC;",
    "up":"&#x1F446;",
    "egg":"&#x1F373;",
    "boy":"&#x1F466;",
    "girl":"&#x1F467;",
    "smoking":"&#x1F6AC;",
    "rain":"&#x2614;",
    "sun":"&#x2600;",
    "garden":"&#x1F3E1;",
    "knickers":"&#x1F456;",
    "down":"&#x1F447;",
    "man":"&#x1F468;",
    "tuesday":"&#x1F4C5;",
    "walrus":"&#x1F47D;",
    "city":"&#x1F306;",
    "pretty":"&#x1F485;",
    "sky":"&#x2601;",
    "yellow":"&#x1F49B;",
    "crab":"&#x264B;",
    "fish":"&#x1F41F;",
    "wife":"&#x1F470;",
    "priestess":"&#x1F478;",
    "goo":"&#x1F476;",
    "pornographic":"&#x1F51E;",
    "english":"&#x1F1EC; &#x1F1E7;",
    "choking":"&#x1F628;",
    "smile":"&#x1F601;",
    "joker":"&#x1F0CF;",
    "ha":"&#x1F602;",
    "cuba":"&#x1F1E8; &#x1F1FA;",
    "dog":"&#x1F436;",
    "dead":"&#x1F480;",
    "ju":"&#x1F48A;"
};

function lookForEmoji(words) {
    for(i = 0; i < words.length; i++) {
        $.each(emojiList, function(key,value){
            if (words[i].toString().toLowerCase().indexOf(key) == 0) {
                console.log(value);
                $('#emoji_results').append(value);
                $('#emoji_results').append(" ");
            }
        });
    }
}