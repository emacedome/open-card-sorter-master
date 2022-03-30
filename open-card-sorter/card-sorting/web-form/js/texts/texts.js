var texts = {
    appTitle: [ `Open Card Sorter` ],
    introTitle: [ `Let's Start%userNameComma?` ],
    introText: [
        `In this card sorting activity, we want to better understand how you relate some information so that we can design a better user experience.`,
        `It takes around <b>10 to 15 minutes</b> to complete. It's quick and will help us a lot!`,
    ],
    introPreAuth: [
        `Before we start, how can I call you?`,
    ],
    start: [`Start`],
    nameInputPlaceholder: [`Type your Name`],
    // googleConnectPlaceholder: [`Wait...We are almost there`],
    googleAuthConnect: [ `Connect with Google` ],
    googleAuthConnectAs: [ `Connect as...` ],
    googleAuthDisconnect: [ `Disconnect` ],
    sidebarTitle: [`Cards`],
    sidebarSubtitle: [`%n of %n grouped cards.`],

    newCardGroup: [`Drag to create a new group`],
    cardTopDivider: [`<strong>Top</strong>: more relevant`],
    cardBottomDivider: [`<strong>Bottom</strong>: less relevant`],
    cardGroupTitlePlaceholder: [`Give a name to this group`],

    steps: [
        {
            title: [`Step 1`],
            text: [
                `Take a look at the cards on the left side, %userName.`,
                `Your task will be to organize these cards into groups that make sense to you.`,
                `Drag one of the cards to the left to create your first group.`
            ]
        },
        {
            title: [`Step 2`],
            text: [
                `Move the cards to the side until they are all grouped together. Group cards that you think are related. You can create as many groups as you like, including groups with just 1 card!`,
                `Remember, %userName: there's no right or wrong, you choose how to group the cards according to what makes the most sense for you!`
            ]
        },
        {
            title: [`Step 3`],
            text: [
                `Review the groups and <strong>name each one</strong> you created. Think of a title that represents the cards it contains.`,
            ]
        },
        {
            title: [`Step 4`],
            text: [
                `Make sure to order the most relevant cards on the top and the least relevant ones on the bottom in each group.`,
            ]
        },
        {
            title: [`Step 5`],
            text: [
                `It looks great, %userName! Give a final review and then just click “Finish” up there to finish.`,
            ]
        }
    ],
    stepsRemainingTitle: [`You are missing a step for you to complete your activity`],
    stepsRemainingText: [`Make sure you have completed the task below:`],

    endingTitle: [ `Thank you%userNameComma!` ],
    endingText: [
        `Your activity will help a lot in building an amazing digital experience.`,
        `Thanks a lot for participating!`,
    ],

    infoButton: [ `Instructions` ],
    finishButton: [ `Finish` ],
    resetButton: [ `Restart` ],

    anonymousLabel: [ `Anonymous` ],

    alerts: {
        generic: {
            buttons: [
                { class: [`btn-primary`], text: [`Close`], action: "close" }
            ]
        },
        steps: {
            title: [`Instruções`],
            buttons: [
                { class: [`btn-primary`], text: [`Close`], action: "close" }
            ]
        },
        noKeys: {
            title: [`App Script code not found`],
            text: [
                'Check that you generated the link correctly and restart the page.'
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Close`], action: "close" }
            ]
        },
        noSheet: {
            title: [`Failed to connect`],
            text: [
                `Unable to access data to start this card sorting. Check the link or try again by refreshing the page.`,
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Try Again`], action: "refresh" },
                { class: [`btn-secondary`], text: [`Close`], action: "close" },
            ]
        },
        saveFail: {
            title: [`Failed to save activity`],
            text: [
                `Could not access the server.`,
                `Please wait a while and try again by refreshing the page.`
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Close`], action: "close" },
                { class: [`btn-secondary`], text: [`Restart`], action: "refresh" },
            ]
        },
    },
}
