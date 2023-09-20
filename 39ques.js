function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.track = tracks;
    }
    return album;
}
// Creating three dictionaries representing different albums
var album1 = makeAlbum("Artist1", "Album Title 1");
var album2 = makeAlbum("Artist2", "Album Title 2", 12); // Including the number of tracks
var album3 = makeAlbum("Artist3", "Album Title 3");
// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);
