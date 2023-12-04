import React from 'react'
import './About.css'
export default function About() {
  const data = [
      {
      "source": { 
      "id": null,
      "name": "BBC News"
      },
      "author": null,
      "title": "Paris attack near Eiffel Tower leaves one dead and two injured - BBC.com",
      "description": "The French interior minister said the alleged attacker was heard shouting \"Allahu Akbar\".",
      "url": "https://www.bbc.com/news/world-europe-67604591",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12689/production/_131910457_6e60fdf47033c68d8f71e607a902b2b71d079f250_217_5500_30941000x563.jpg",
      "publishedAt": "2023-12-03T09:58:00Z",
      "content": "By Christy CooneyBBC News\r\nA police operation is ongoing near the Bir-Hakeim metro station, not far from the Eiffel Tower\r\nA man has died and two others, including a British man, have been injured in… [+3501 chars]"
      },
      {
      "source": {
      "id": "ign",
      "name": "IGN"
      },
      "author": "Adam Bankhurst",
      "title": "Grand Theft Auto 6 Leaks May Have Just Come From a Rockstar Employee’s Son - IGN",
      "description": "Just a few days before the much-anticipated arrival of the first trailer for Grand Theft Auto 6, there are unverified reports of new leaks of the game have that may have come from the son of a Rockstar employee.",
      "url": "https://www.ign.com/articles/grand-theft-auto-6-leaks-may-have-just-come-from-a-rockstar-employees-son",
      "urlToImage": "https://assets-prd.ignimgs.com/2023/12/03/wallpaperflare-com-wallpaper-1663682468424-1701590790671.jpg?width=1280",
      "publishedAt": "2023-12-03T08:41:43Z",
      "content": "Just a few days before the much-anticipated arrival of the first trailer for Grand Theft Auto 6, there are unverified reports of new leaks of the game have that may have come from the son of a Rockst… [+1546 chars]"
      },
      {
      "source": {
      "id": "al-jazeera-english",
      "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Tsunami alert lifted after powerful earthquake hits Philippines - Al Jazeera English",
      "description": "An earthquake of at least magnitude 7.5 struck Mindanao in the southern Philippines, triggering evacuation orders.",
      "url": "https://www.aljazeera.com/news/2023/12/2/powerful-7-5-magnitude-earthquake-strikes-southern-philippines",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/AP23337309434009-1701594063.jpg?resize=1920%2C1440",
      "publishedAt": "2023-12-03T08:38:46Z",
      "content": "A powerful earthquake that shook the southern Philippines has killed at least one person, as thousands were ordered to evacuate, including in Japan, after tsunami warnings that were later lifted.\r\nTh… [+3181 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Tamar Michaelis, MJ Lee, Joshua Berlinger",
      "title": "Israel recalls negotiators after reaching ‘dead end’ in Qatar talks - CNN",
      "description": "Israeli authorities recalled their team of negotiators from Qatar after reaching a “dead end” in talks to end the fighting in Gaza, according to a statement released by the Prime Minister Benjamin Netanyahu’s office.",
      "url": "https://www.cnn.com/2023/12/02/middleeast/israel-hamas-qatar-talks-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231202092813-02-rafah-crossing-hostage-release-112623.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-12-03T08:22:00Z",
      "content": "Israeli authorities recalled their team of negotiators from Qatar after reaching a dead endin talks to release hostages held by Hamas in Gaza,according to a statement released by Prime Minister Benja… [+4651 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Daily Beast"
      },
      "author": "Matt Wilstein",
      "title": "Emma Stone Joins SNL's Five-Timers Club With Tina Fey and Candice Bergen - The Daily Beast",
      "description": "The trio of five-time SNL hosts ended their bit by calling out the club’s most recent inductee for going full anti-vaxxer.",
      "url": "https://www.thedailybeast.com/emma-stone-joins-snls-five-timers-club-with-tina-fey-and-candice-bergen",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1437,w_2555,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1701579866/ES_hrml3n",
      "publishedAt": "2023-12-03T08:11:24Z",
      "content": "Emma Stone became the youngest member of the Five-Timers Club on Saturday Night Live this weekend when she hosted the show for the fifth time in 13 years. And while she didnt quite get the star-studd… [+1553 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "GameSpot"
      },
      "author": "Mark Delaney",
      "title": "Fortnite Map Changes In Chapter 5 Season 1: Trains, Bosses, And More - GameSpot",
      "description": "Fortnite's whole new world is here, which means nothing is familiar and everything is wondrous.",
      "url": "https://www.gamespot.com/articles/fortnite-map-changes-in-chapter-5-season-1-trains-bosses-and-more/1100-6519643/",
      "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1632/16320660/4229131-screenshot2023-12-02094359.png",
      "publishedAt": "2023-12-03T08:02:35Z",
      "content": "There's a whole new world to explore in Fortnite Chapter 5 Season 1 thanks to the new Fortnite map. On the Fortnite battle royale island, you'll find a ton of sites to explore, new ways to move about… [+2019 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Billie Eilish on Her New Upcoming Album and Opens Up About 'Coming Out' at Variety's Hitmakers - Variety",
      "description": "http://bit.ly/VarietySubscribehttp://www.facebook.com/varietyhttp://www.instagram.com/varietyhttp://www.twitter.com/variety",
      "url": "https://www.youtube.com/watch?v=cff-ij1Mf64",
      "urlToImage": "https://i.ytimg.com/vi/cff-ij1Mf64/maxresdefault.jpg",
      "publishedAt": "2023-12-03T07:14:52Z",
      "content": null
      },
      {
      "source": {
      "id": "fox-news",
      "name": "Fox News"
      },
      "author": "Chris Pandolfo",
      "title": "Israel targets southern Gaza with airstrikes after cease-fire with Hamas collapses - Fox News",
      "description": "Israel is bombarding the southern Gaza Strip with airstrikes and artillery shells after a weeklong truce with the terror group Hamas collapsed Friday. The Israel Defense Forces says it struck more than 200 terrorist targets and fighting has resumed with Hezbo…",
      "url": "https://www.foxnews.com/live-news/december-2-israel-hamas-war",
      "urlToImage": "https://livenews.foxnews.com/images/2023/12/3f906588c89f4af085453ad219f02c7d.jpg",
      "publishedAt": "2023-12-03T06:46:15Z",
      "content": "The chairman of the Yad Vashem World Holocaust Remembrance Center\r\n in Jerusalem, whose mandate is to use the example of the systematic genocide of millions of Jews by the Nazis in World War II as a … [+1909 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CBS Sports"
      },
      "author": "Will Backus",
      "title": "Michigan vs. Iowa score: Wolverines push for top spot in College Football Playoff with Big Ten title shutout - CBS Sports",
      "description": "Michigan's Jim Harbaugh became the first Big Ten coach to win three straight outright titles",
      "url": "https://www.cbssports.com/college-football/news/michigan-vs-iowa-score-wolverines-push-for-top-spot-in-college-football-playoff-with-big-ten-title-shutout/live/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/12/03/078e4529-6101-455d-bb20-6e05d2d68238/thumbnail/1200x675/27d41bdac852076139dd0715567886bb/michigan-iowa-getty.jpg",
      "publishedAt": "2023-12-03T06:13:00Z",
      "content": "No. 2 Michigan took care of business against No. 16 Iowa in the Big Ten Championship Game, cruising past the Hawkeyes for a 26-0 victory and securing its third straight conference title in the proces… [+1953 chars]"
      },
      {
      "source": {
      "id": "associated-press",
      "name": "Associated Press"
      },
      "author": "RALPH D. RUSSO",
      "title": "3 teams, 2 spots: Florida State, Texas, Alabama leave CFP selection committee difficult choice - The Associated Press",
      "description": "One of these three teams will not make the College Football Playoff: Alabama, Florida State and Texas. Whichever is left out will have every right to be angry, and in the case of two, their absence in the CFP would be unprecedented. No. 8 Alabama was the agen…",
      "url": "https://apnews.com/article/college-football-playoff-championship-saturday-84e1b7f383307b7d91fc122ef8893389",
      "urlToImage": "https://dims.apnews.com/dims4/default/6b0d53a/2147483647/strip/true/crop/2931x1649+0+153/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fbd%2Fa9%2F379642ac739b0c6f53967106eb1f%2F9c98402f7d544b0a85e9a28c5301b9e5",
      "publishedAt": "2023-12-03T06:11:00Z",
      "content": "One of these three teams will not make the College Football Playoff: Alabama, Florida State and Texas.\r\nWhichever is left out Sunday will have every right to be angry, and in the case of two, their a… [+5867 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Suntimes.com"
      },
      "author": "Georgia Nicols",
      "title": "Horoscope for Sunday, Dec. 3, 2023 - Chicago Sun-Times",
      "description": null,
      "url": "https://chicago.suntimes.com/2023/12/3/23983278/horoscopes-today-sunday-dec-3-2023",
      "urlToImage": "https://cst.brightspotcdn.com/dims4/default/7ac9c9b/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F2jdu3qlDQL4bAfxonU0PlRwMMbM%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F25123725%2FGeorgia_mug.jpeg",
      "publishedAt": "2023-12-03T06:01:17Z",
      "content": "Moon Alert\r\nAvoid shopping and important decisions from 8 PM to 10:15 p.m. Chicago time. After that, the moon moves from Leo into Virgo.\r\nAries (March 21-April 19)\r\nThis is a bit of a tricky day. You… [+3897 chars]"
      },
      {
      "source": {
      "id": "associated-press",
      "name": "Associated Press"
      },
      "author": "DANIEL POLITI, PATRICIA LUNA",
      "title": "Kissinger's unwavering support for brutal regimes still haunts Latin America - The Associated Press",
      "description": "Leftists in Chile were tortured, tossed from helicopters and forced to watch relatives be raped during the military dictatorship of Gen. Augusto Pinochet. In Argentina, many were “disappeared” by members of the brutal military dictatorship that held detainees…",
      "url": "https://apnews.com/article/kissinger-legacy-latin-america-chile-argentina-4780b50a4cc7f865b9771c1ab25a7187",
      "urlToImage": "https://dims.apnews.com/dims4/default/6bb7021/2147483647/strip/true/crop/3001x1688+0+308/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F72%2Fad%2Fb5b9dd7bd245463840901bff6239%2F65185b9e37cd490d8253c2db405f5984",
      "publishedAt": "2023-12-03T05:02:00Z",
      "content": "SANTIAGO, Chile (AP) In Chile, leftists were tortured, tossed from helicopters and forced to watch relatives be raped. In Argentina, many were disappeared by members of the brutal military dictatorsh… [+9254 chars]"
      },
      {
      "source": {
      "id": "espn",
      "name": "ESPN"
      },
      "author": "Andrea Adelson",
      "title": "Florida State tops Louisville for first ACC title since 2014 - ESPN",
      "description": "Florida State relied on its defense to knock off Louisville for its first ACC title since 2014 on Saturday night. The undefeated Seminoles now will play the waiting game as the CFP decides if they're one of the four best teams in the nation.",
      "url": "https://www.espn.com/college-football/story/_/id/39031188/florida-state-tops-louisville-first-acc-title-2014",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1203%2Fr1261178_1296x729_16%2D9.jpg",
      "publishedAt": "2023-12-03T04:51:00Z",
      "content": "CHARLOTTE, N.C. -- Playing behind third-string quarterback Brock Glenn, No. 4 Florida State won the ACC championship Saturday night, beating Louisville16-6 in what the Seminoles hope is enough to lan… [+7168 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "Telangana Chief Minister KCR In Trouble As Congress Cross Halfway Mark - NDTV",
      "description": "The Congress has surged ahead in Telangana where votes are being counted today for the 119 assembly seats. According to early trends of Telangana assembly elections results, the Congress is leading on 65 seats, five more than the majority mark.",
      "url": "https://www.ndtv.com/india-news/telangana-elections-results-live-updates-congress-bjp-brs-in-tight-race-in-telangana-early-leads-kcr-hattrick-4628254",
      "urlToImage": "https://c.ndtvimg.com/2023-12/q1h3nf5s_telangana-assembly_625x300_03_December_23.jpeg?ver-20231203.06",
      "publishedAt": "2023-12-03T04:44:00Z",
      "content": "Chief Minister K Chandrashekar Rao is contesting from two seats-Gajwel and Kamareddy.\r\nHyderabad: The Congress has surged ahead in Telangana where votes are being counted today for the 119 assembly s… [+1820 chars]"
      },
      {
      "source": {
      "id": "cbs-news",
      "name": "CBS News"
      },
      "author": "Olivia Rinaldi, Aaron Navarro",
      "title": "DeSantis reaches Iowa campaign milestone as Trump turns his focus to Biden - CBS News",
      "description": "Both GOP presidential candidates held dueling rallies in Iowa Saturday, as Trump tries to pivot to the general election.",
      "url": "https://www.cbsnews.com/news/desantis-trump-dueling-rallies-iowa-gop-presidential-campaign-99-counties/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/12/03/e7b1b132-380d-49f3-841b-d0e293715e61/thumbnail/1200x630/68a6eb244546251e7d505d77fc55e184/gettyimages-1827395001.jpg?v=2a3c5d91939c9bf28fa0bc6fdfacfdd4",
      "publishedAt": "2023-12-03T04:15:00Z",
      "content": "Cedar Rapids, Iowa — As Florida Gov. Ron DeSantis completed a presidential campaign milestone Saturday afternoon by visiting all 99 counties in Iowa, former President Donald Trump largely ignored his… [+5113 chars]"
      },
      {
      "source": {
      "id": "cbs-news",
      "name": "CBS News"
      },
      "author": "Jamie Yuccas",
      "title": "Heidi Firkus' fatal shooting captured on her 911 call to report an intruder - CBS News",
      "description": "Heidi Firkus called 911 to report a burglar breaking into her home. Her husband later told police his gun fired while he struggled with the intruder, but something in Nick Firkus' story struck police as odd.",
      "url": "https://www.cbsnews.com/news/heidi-firkus-fatal-shooting-nick-firkus-trial-911-call-minnesota-48-hours/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/11/30/4f5e8b0e-f06d-41e5-a08b-f3a709f098d5/thumbnail/1200x630/d69c97fb344269b71be95856c481c1e9/firkus-sneakpeek-2488219-640x360.jpg?v=2a3c5d91939c9bf28fa0bc6fdfacfdd4",
      "publishedAt": "2023-12-03T04:13:00Z",
      "content": "At 6:30 a.m. on April 25, 2010, Heidi Firkus called 911 after her husband, Nick Firkus, said an intruder was breaking into their Saint Paul, Minnesota, home. She was shot and killed. Nick Firkus told… [+38180 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "KABC-TV"
      },
      "author": null,
      "title": "Arrest made in killing of 3 homeless people, LAPD says; suspect tied to fatal shooting in San Dimas follow-home robbery - KABC-TV",
      "description": "Police Chief Michel Moore announced that a suspect has been arrested in the murders of three homeless men in Los Angeles this week.",
      "url": "https://abc7.com/los-angeles-homeless-serial-killer-shooting-update-today-homicide-search/14133694/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/14133999_homeless-murders-clean-TN-img.jpg?w=1600",
      "publishedAt": "2023-12-03T04:06:09Z",
      "content": "LOS ANGELES (KABC) -- The suspect in the three fatal shootings of homeless people in Los Angeles was identified as a man who was already in custody after being arrested earlier this week in connectio… [+4398 chars]"
      },
      {
      "source": {
      "id": "al-jazeera-english",
      "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Bombing attack on Catholic mass in Philippines kills four - Al Jazeera English",
      "description": "Philippine President Ferdinand Marcos Jr condemns ‘senseless and most heinous acts’.",
      "url": "https://www.aljazeera.com/news/2023/12/3/explosion-hits-university-in-philippines-three-reported-killed",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/mindanao2-1701571007.jpeg?resize=1920%2C1440",
      "publishedAt": "2023-12-03T03:36:25Z",
      "content": "A bombing attack on a university gymnasium in the southern Philippines has killed four people and wounded several others.\r\nThe explosion ripped through a gymnasium at Mindanao State University in Mar… [+2521 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "New York Post"
      },
      "author": "Fox News",
      "title": "Bill Maher says Elon Musk's controversial post 'did test my patience' with him, looked 'really antisemitic' - New York Post ",
      "description": "“Real Time” host Bill Maher scolded billionaire X owner Elon Musk over his post last month that spiraled into a major controversy, saying it looked “really antisemitic.”",
      "url": "https://nypost.com/2023/12/02/news/bill-maher-says-elon-musks-controversial-post-did-test-my-patience-with-him-looked-really-antisemitic/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/12/newspress-collage-ffluh81wu-1701571779714.jpg?quality=75&strip=all&1701553818&w=1024",
      "publishedAt": "2023-12-03T03:24:00Z",
      "content": "“Real Time” host Bill Maher scolded billionaire X owner Elon Musk over his post last month that spiraled into a major controversy, saying it looked “really antisemitic.”\r\nMaher, who was overwhelmingl… [+3246 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "MMA Fighting"
      },
      "author": "Shaun Al-Shatti",
      "title": "‘HUGE statement’: Pros react to Arman Tsarukyan starching Beneil Dariush in 64 seconds at UFC Austin - MMA Fighting",
      "description": "MMA pros react to Arman Tsarukyan’s thunderous 64-second knockout of Beneil Dariush at UFC Austin.",
      "url": "https://www.mmafighting.com/2023/12/2/23985944/huge-statement-pros-react-to-arman-tsarukyan-starching-beneil-dariush-in-64-seconds-at-ufc-austin",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/rnmv2Vdd0c4I-7DwFJb8lwPF6H8=/0x0:6332x3315/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25128873/1827608901.jpg",
      "publishedAt": "2023-12-03T03:08:57Z",
      "content": "Arman Tsarukyan is officially a UFC title contender.\r\nThe 27-year-old lightweight made a thunderous statement at UFC Austin, stopping Beneil Dariush in just 64 seconds with a highlight-reel knockout … [+418 chars]"
      }
      ]
      
  
  return (
    <>
    <div id='about'>
    <div className='card-container'>
      {
       
        data.map((item)=> {
          return ( 
          
          <div  className='card'>
 <h5>{item.title}</h5>
 <img src={item.urlToImage}/>
 <p>{item.description}</p>
      </div>
      
        )})
      
      }
        </div>
    

    </div>
    </>
  )
}
