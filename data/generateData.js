var userData = require("./UsersMockData.json");
var createCsvWriter = require("csv-writer").createObjectCsvWriter;
var faker = require("faker");
var fs = require("fs");

//-------------------------USERS-------------------------------------
//GENERATES ONE THOUSAND USERS INTO "userData.csv"
// console.log(userData.length);

//PUT ONE THOUSAND RECORDS INTO ARRAY
// var oneThousandUsers = [];

// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < userData.length; j++) {
//     oneThousandUsers.push(userData[j]);
//   }
// }

// console.log(oneThousandUsers.length);

//SET UP CSV WRITER
// const csvWriter = createCsvWriter({
//   path: "userData.csv",
//   header: [{ id: "username", title: "username" }, { id: "pic", title: "pic" }]
// });

//PASS OUR ARRAY OF 1000 RECORDS INTO CSV WRITER
// csvWriter.writeRecords(oneThousandUsers)       // returns a promise
//     .then(() => {
//         console.log('...Done');
//     });

//RUN THIS IN COMMAND LINE TO INSERT DATA INTO POSTGRES
// psql -d starkloud --user=katiemcculloch -c "COPY users(username, pic) FROM '/Users/katiemcculloch/hrla24/soundCloud/SideBar/data/userData.csv' delimiter ',' csv;"

//-------------------------PLAYLISTS-------------------------------------
// GENERATES TEN THOUSAND USERS INTO "playlistData.csv"

// PUT TEN THOUSAND RECORDS INTO ARRAY
// var tenThousandPlaylists = [];

// for (var i = 0; i < 10000; i++) {
//   var playlist = {
//     user: faker.name.findName(),
//     title: faker.lorem.word(),
//     cover_art: faker.image.image(),
//     likes: Math.floor(Math.random() * 1000),
//     reposts: Math.floor(Math.random() * 1000),
//     userId: Math.floor(Math.random() * 1000) + 1
//   };
//   tenThousandPlaylists.push(playlist);
// }

// console.log(tenThousandPlaylists);

// // SET UP CSV WRITER
// const csvWriter = createCsvWriter({
//   path: "playlistData.csv",
//   header: [
//     { id: "title", title: "title" },
//     { id: "cover_art", title: "cover_art" },
//     { id: "likes", title: "likes" },
//     { id: "reposts", title: "reposts" },
//     { id: "userId", title: "userId" }
//   ]
// });

// // PASS OUR ARRAY OF 10000 RECORDS INTO CSV WRITER
// csvWriter
//   .writeRecords(tenThousandPlaylists) // returns a promise
//   .then(() => {
//     console.log("...Done");
//   });

//TO REMOVE CONSTRAINTS
//ALTER TABLE playlists DROP CONSTRAINT userid
//TO ADD CONSTRAINTS
//ALTER TABLE playlists ADD FOREIGN KEY userid REFERENCES users(id);

// psql -d starkloud --user=katiemcculloch -c "COPY playlists(title, cover_art, likes, reposts, userid) FROM '/Users/katiemcculloch/hrla24/soundCloud/SideBar/data/playlistData.csv' delimiter ',' csv;"

//-------------------------SONGS-------------------------------------

// GENERATES TEN MILLION SONGS INTO "songData.csv"
// const Files1 = fs.createWriteStream("./songsData.csv");
// let i = 10000000;
// write();
// function write() {
//   let ok = true;
//   do {
//     var song =
//       faker.lorem.word() +
//       "," +
//       faker.name.findName() +
//       "," +
//       faker.image.abstract() +
//       "," +
//       faker.image.image() +
//       "," +
//       "#" +
//       faker.lorem.word() +
//       "\n";
//     i--;
//     if (i === 0) {
//       // last time!
//       Files1.write(song, "utf-8", song => {
//         console.log("successfully finished writing");
//       });
//     } else {
//       // see if we should continue, or wait
//       // don't pass the callback, because we're not done yet.
//       ok = Files1.write(song, "utf-8");
//     }
//   } while (i > 0 && ok);
//   if (i > 0) {
//     // had to stop early!
//     // write some more once it drains
//     Files1.once("drain", write);
//   }
// }

// PUT TEN MILLION RECORDS INTO ARRAY
// var songs = [];

// for (var i = 0; i < 10000000; i++) {
//   if (i % 1000000 === 0) {
//     console.log(i);
//   }
//   var song =
//     faker.lorem.word() +
//     "," +
//     faker.name.findName() +
//     "," +
//     faker.image.abstract() +
//     "," +
//     faker.image.image() +
//     "," +
//     "#" +
//     faker.random.word() +
//     "\n";
//   Files1.write(song);
//   // songs.push(song);
// }

// // SET UP CSV WRITER
// const csvWriter = createCsvWriter({
//   path: "songsData.csv",
//   header: [
//     { id: "title", title: "title" },
//     { id: "artist", title: "artist" },
//     { id: "media", title: "media" },
//     { id: "album_art", title: "album_art" },
//     { id: "tags", title: "tags" }
//   ]
// });

// // // PASS OUR ARRAY OF 10000000 RECORDS INTO CSV WRITER
// csvWriter
//   .writeRecords(songs) // returns a promise
//   .then(() => {
//     console.log("...Done");
//   });

//TO REMOVE CONSTRAINTS
//ALTER TABLE songs_playlists DROP CONSTRAINT songs_playlists_playlistId_fkey

//TO ADD CONSTRAINTS
//ALTER TABLE songs_playlists ADD FOREIGN KEY userid REFERENCES playlists(id);

// RUN THIS IN COMMAND LINE TO INSERT DATA INTO POSTGRES
// psql -d starkloud --user=katiemcculloch -c "COPY songs(title, artist, media, album_art, tags) FROM '/Users/katiemcculloch/hrla24/soundCloud/SideBar/data/songsData.csv' delimiter ',' csv;"

//-------------------------songs_playlists-------------------------------------

// GENERATES TEN THOUSAND USERS INTO "playlistData.csv"

// PUT TEN THOUSAND RECORDS INTO ARRAY
// var songsAndPlaylistIds = [];

// for (var i = 0; i < 10000000; i++) {
//   var relationship = {
//     songId: Math.floor(Math.random() * 10000000) + 1,
//     playlistId: Math.floor(Math.random() * 10000) + 1
//   };
//   songsAndPlaylistIds.push(relationship);
// }

// console.log(songsAndPlaylistIds[0]);

// // SET UP CSV WRITER
// const csvWriter = createCsvWriter({
//   path: "songAndPlaylistRelationshipData.csv",
//   header: [
//     { id: "songId", title: "songId" },
//     { id: "playlistId", title: "playlistId" }
//   ]
// });

// // // PASS OUR ARRAY OF 10000000 RECORDS INTO CSV WRITER
// csvWriter
//   .writeRecords(songsAndPlaylistIds) // returns a promise
//   .then(() => {
//     console.log("...Done");
//   });

//TO REMOVE CONSTRAINTS
//ALTER TABLE songs_playlists DROP CONSTRAINT "songs_playlists_songId_playlistId_key"
//ALTER TABLE songs_playlists DROP CONSTRAINT "songs_playlists_playlistId_fkey"
//ALTER TABLE songs_playlists DROP CONSTRAINT "songs_playlists_songId_fkey"
//TO ADD CONSTRAINTS
//ALTER TABLE songs_playlists ADD CONSTRAINT "songs_playlists_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES playlists(id);
//ALTER TABLE songs_playlists ADD CONSTRAINT "songs_playlists_songId_fkey" FOREIGN KEY ("songId") REFERENCES songs(id);

// RUN THIS IN COMMAND LINE TO INSERT DATA INTO POSTGRES
// psql -d starkloud --user=katiemcculloch -c "COPY songs_playlists("songId", "playlistId") FROM '/Users/katiemcculloch/hrla24/soundCloud/SideBar/data/songAndPlaylistRelationshipData.csv' delimiter ',' csv;"
