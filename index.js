let user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

let user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

let urlParams = new URLSearchParams(window.location.search);

// declare variables
let userInt = 0;
const users = [user1, user2];
const outerContainer = document.getElementById('outer-container');
const headerContainer = document.getElementById('header-container');
const photoContainer = document.getElementById('photo-container');
const profileContainer = document.getElementById('profile-container');
const tabsContainer = document.getElementById('tabs-container');
const tweetsContainer = document.getElementById('tweets-container');

headerContainer.innerHTML = `
    <div class="top-user">
        <p class="name">${users[userInt].displayName}</p>
        <p id="tweet-count" class="light-gray">${users[userInt].tweets.length} Tweets</p>
    </div>
`;

photoContainer.innerHTML = `
    <div class="cover-img">
        <img src="${users[userInt].coverPhotoURL}" width="100%"/>
    </div>
    <div class="avatar-img">
        <img src="${users[userInt].avatarURL}"/>
    </div>
`;

profileContainer.innerHTML = `
    <div class="profile-info">
        <p class="name">${users[userInt].displayName}</p>
    </div>
    <div class="user-name light-gray">
        <p>${users[userInt].userName}</p>
    </div>
    <div class="join-date light-gray">
        <p>Joined ${users[userInt].joinedDate}</p>
    </div>
    <div class="follow-container">
        <div class="following">
            <span>${users[userInt].followingCount}</span>
            <span class="followers-p light-gray"> Following</span>
        </div>
        <div class="followers">
            <span>${users[userInt].followerCount}</span>
            <span class="followers-p light-gray"> Followers</span>
            
        </div>
    </div>
`;


for (let i = 0; i < users[userInt].tweets.length; i++) {
    let tweet = users[userInt].tweets[i];
    let tweetValues = Object.values(tweet);
    let tweetCreated = tweetValues[1];

    // to dislpay month + date instead of full timestamp
    let arr = tweetCreated.split('/');
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    let displayMonth =  parseInt(arr[1],10) - 1;

    const tweetDiv = document.createElement("div");
    tweetDiv.classList.add("tweet-div");
    tweetDiv.innerHTML = `
        <div class="tweet-avatar"><img src="${users[userInt].avatarURL}"/></div>
        <div class="tweet-inner-container">
            <div class="tweet-details">
                <div class="tweet-display-name">${users[userInt].displayName}</div>
                <div class="user-name tweet-detail light-gray">${users[userInt].userName}</div>
                <div class="tweet-created tweet-detail light-gray">${months[displayMonth] +" "+ arr[0]}</div>
            </div>
            <div class="tweet-body">
                <p>${tweetValues[0]}</p>
            </div>
        </div>
    `;
    tweetsContainer.appendChild(tweetDiv);
}