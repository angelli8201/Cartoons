import "../styles/MosaicBackground.css";

export default function MosaicBackground() {
  const cartoonData = [
    {
      title: "The Simpsons",
      year: 1999,
      creator: ["Matt Groening"],
      rating: "TV-PG",
      genre: ["Comedy"],
      runtime_in_minutes: 22,
      episodes: 684,
      image:
        "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      id: 2,
    },
    {
      title: "Gravity Falls",
      year: 2012,
      creator: ["Alex Hirsch"],
      rating: "TV-Y7",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 23,
      episodes: 40,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_SY1000_CR0,0,641,1000_AL_.jpg",
      id: 4,
    },
    {
      title: "Bojack Horseman",
      year: 2014,
      creator: ["Raphael Bob-Waksberg"],
      rating: "TV-MA",
      genre: ["Drama", "Comedy"],
      runtime_in_minutes: 25,
      episodes: 77,
      image:
        "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      id: 5,
    },
    {
      title: "Adventure Time",
      year: 2010,
      creator: ["Pendleton Ward"],
      rating: "TV-PG",
      genre: ["Short", "Action"],
      runtime_in_minutes: 11,
      episodes: 289,
      image:
        "https://m.media-amazon.com/images/M/MV5BMjE2MzE1MDI2M15BMl5BanBnXkFtZTgwNzUyODQxMDE@._V1_SY1000_CR0,0,731,1000_AL_.jpg",
      id: 7,
    },
    {
      title: "Pokemon",
      year: 1997,
      creator: ["Junichi Masada", "Ken Sugimori", "Satoshi Tajiri"],
      rating: "TV-Y",
      genre: ["Adventure", "Action"],
      runtime_in_minutes: 24,
      episodes: 1131,
      image:
        "https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_.jpg",
      id: 8,
    },
    {
      title: "Yu-Gi-Oh!",
      year: 2000,
      creator: ["Kazuki Takashi"],
      rating: "TV-Y",
      genre: ["Adventure", "Action"],
      runtime_in_minutes: 24,
      episodes: 225,
      image:
        "https://m.media-amazon.com/images/M/MV5BMDM0MDA3NzYtMDE1MS00YjZmLWJmNjQtNzgxYzlhMmMyZjQ2XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
      id: 9,
    },
    {
      title: "Rugrats",
      year: 1990,
      creator: ["Gabor Csupo", "Paul Germain"],
      rating: "TV-Y",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 179,
      image:
        "https://i.kinja-img.com/gawker-media/image/upload/t_original/lseuxpzwkntjf0coatv2.jpg",
      id: 10,
    },
    {
      title: "My Little Pony: Friendship is Magic",
      year: 2010,
      creator: ["Lauren Faust", "Bonnie Zacherle"],
      rating: "TV-Y",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 22,
      episodes: 235,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTk4NTgxMjItZTU5ZS00NGE3LWJlODQtMTMzOTJlZmU5ODk1XkEyXkFqcGdeQXVyNjUzMDIyNzE@._V1_.jpg",
      id: 11,
    },
    {
      title: "Ed, Edd n Eddy",
      year: 1999,
      creator: ["Danny Antonucci"],
      rating: "TV-Y7",
      genre: ["Family", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 80,
      image:
        "https://m.media-amazon.com/images/M/MV5BMGFiZGI4Y2ItMzkzOC00OTE5LThlZDgtNzE1YTdmNTA5ZTZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_.jpg",
      id: 12,
    },
    {
      title: "Courage the Cowardly Dog",
      year: 1999,
      creator: ["John Dilworth"],
      rating: "TV-Y7",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 11,
      episodes: 52,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTU4MGEyNTItNzg5ZS00ZGU0LTk4NmEtODM0Y2UxYTY2YTUyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,680,1000_AL_.jpg",
      id: 13,
    },
    {
      title: "Dexter's Lab",
      year: 1996,
      creator: ["Craig McCracken", "Genndy Tartakovsky"],
      rating: "TV-G",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 23,
      episodes: 79,
      image:
        "https://m.media-amazon.com/images/M/MV5BMzdlMDMxNzItNmViNS00NDRkLTg3OWMtNjliZGIxY2M5N2YyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      id: 15,
    },
    {
      title: "Cow and Chicken",
      year: 1995,
      creator: ["David Feiss"],
      rating: "TV-PG",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 53,
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYjE4ZGYtZDkyNC00ZmFiLWJiMGYtNjlmZWVmYWEwNTZhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,712,1000_AL_.jpg",
      id: 16,
    },
    {
      title: "I am Weasel",
      year: 1997,
      creator: ["David Feiss"],
      rating: "TV-G",
      genre: ["Adventure", "Short"],
      runtime_in_minutes: 30,
      episodes: 79,
      image:
        "https://m.media-amazon.com/images/M/MV5BZWY0YjA1YzQtM2ViYS00ZTRiLTlmYjUtZDJhNDlkMGI5NTU1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,750,1000_AL_.jpg",
      id: 17,
    },
    {
      title: "Johnny Bravo",
      year: 1997,
      creator: ["Van Partible"],
      rating: "TV-Y7",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 67,
      image:
        "https://m.media-amazon.com/images/M/MV5BZWE5NjBiNDktYWI4ZC00YjA0LWE1OGEtMzVlZTg1ZTk2MmMzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,733,1000_AL_.jpg",
      id: 18,
    },
    {
      title: "Kablam",
      year: 1996,
      creator: ["Will McRob"],
      rating: "TV-Y7",
      genre: ["Family", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 48,
      image:
        "https://m.media-amazon.com/images/M/MV5BNjE3ZTdmNTctZmYzZi00MDRmLTgzNjUtYTc1MjBiOTdjNjJlXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_.jpg",
      id: 19,
    },
    {
      title: "Hey Arnold",
      year: 1996,
      creator: ["Craig Bartlett"],
      rating: "TV-Y7",
      genre: ["Drama", "Comedy"],
      runtime_in_minutes: 15,
      episodes: 103,
      image:
        "https://m.media-amazon.com/images/M/MV5BMzhmMjE2YTYtMTc1Ni00Nzg0LWJhNTItZWZjZDNkNjRmOTAyXkEyXkFqcGdeQXVyODMyNjA3NzQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      id: 20,
    },
    {
      title: "Angry Beavers",
      year: 1996,
      creator: ["Mitch Schauer", "Keith Kaczorek"],
      rating: "TV-G",
      genre: ["Family", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 64,
      image:
        "https://m.media-amazon.com/images/M/MV5BODg2MGY5MDYtMGM5MS00OTg0LWE1YmEtM2IxN2Y1YzAzNjFiXkEyXkFqcGdeQXVyODg5MjMwNTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      id: 21,
    },
    {
      title: "The New Adventures of Winnie the Pooh",
      year: 1988,
      creator: ["Karl Geurs", "Terence Harrison", "Ken Kessel"],
      rating: "TV-Y",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 50,
      image:
        "https://m.media-amazon.com/images/M/MV5BZjFkZDkwYjktMmZkNi00ZTVkLWI5ZmItZWI2MmI1NjQ1Y2U0XkEyXkFqcGdeQXVyOTg4MDk3MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      id: 23,
    },
    {
      title: "The Simpsons",
      year: 1999,
      creator: ["Matt Groening"],
      rating: "TV-PG",
      genre: ["Comedy"],
      runtime_in_minutes: 22,
      episodes: 684,
      image:
        "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      id: 2,
    },
    {
      title: "Gravity Falls",
      year: 2012,
      creator: ["Alex Hirsch"],
      rating: "TV-Y7",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 23,
      episodes: 40,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_SY1000_CR0,0,641,1000_AL_.jpg",
      id: 4,
    },
    {
      title: "Bojack Horseman",
      year: 2014,
      creator: ["Raphael Bob-Waksberg"],
      rating: "TV-MA",
      genre: ["Drama", "Comedy"],
      runtime_in_minutes: 25,
      episodes: 77,
      image:
        "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      id: 5,
    },
    {
      title: "Adventure Time",
      year: 2010,
      creator: ["Pendleton Ward"],
      rating: "TV-PG",
      genre: ["Short", "Action"],
      runtime_in_minutes: 11,
      episodes: 289,
      image:
        "https://m.media-amazon.com/images/M/MV5BMjE2MzE1MDI2M15BMl5BanBnXkFtZTgwNzUyODQxMDE@._V1_SY1000_CR0,0,731,1000_AL_.jpg",
      id: 7,
    },
    {
      title: "Pokemon",
      year: 1997,
      creator: ["Junichi Masada", "Ken Sugimori", "Satoshi Tajiri"],
      rating: "TV-Y",
      genre: ["Adventure", "Action"],
      runtime_in_minutes: 24,
      episodes: 1131,
      image:
        "https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_.jpg",
      id: 8,
    },
    {
      title: "Yu-Gi-Oh!",
      year: 2000,
      creator: ["Kazuki Takashi"],
      rating: "TV-Y",
      genre: ["Adventure", "Action"],
      runtime_in_minutes: 24,
      episodes: 225,
      image:
        "https://m.media-amazon.com/images/M/MV5BMDM0MDA3NzYtMDE1MS00YjZmLWJmNjQtNzgxYzlhMmMyZjQ2XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
      id: 9,
    },
    {
      title: "Rugrats",
      year: 1990,
      creator: ["Gabor Csupo", "Paul Germain"],
      rating: "TV-Y",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 179,
      image:
        "https://i.kinja-img.com/gawker-media/image/upload/t_original/lseuxpzwkntjf0coatv2.jpg",
      id: 10,
    },
    {
      title: "My Little Pony: Friendship is Magic",
      year: 2010,
      creator: ["Lauren Faust", "Bonnie Zacherle"],
      rating: "TV-Y",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 22,
      episodes: 235,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTk4NTgxMjItZTU5ZS00NGE3LWJlODQtMTMzOTJlZmU5ODk1XkEyXkFqcGdeQXVyNjUzMDIyNzE@._V1_.jpg",
      id: 11,
    },
    {
      title: "Ed, Edd n Eddy",
      year: 1999,
      creator: ["Danny Antonucci"],
      rating: "TV-Y7",
      genre: ["Family", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 80,
      image:
        "https://m.media-amazon.com/images/M/MV5BMGFiZGI4Y2ItMzkzOC00OTE5LThlZDgtNzE1YTdmNTA5ZTZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_.jpg",
      id: 12,
    },
    {
      title: "Courage the Cowardly Dog",
      year: 1999,
      creator: ["John Dilworth"],
      rating: "TV-Y7",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 11,
      episodes: 52,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTU4MGEyNTItNzg5ZS00ZGU0LTk4NmEtODM0Y2UxYTY2YTUyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,680,1000_AL_.jpg",
      id: 13,
    },
    {
      title: "Dexter's Lab",
      year: 1996,
      creator: ["Craig McCracken", "Genndy Tartakovsky"],
      rating: "TV-G",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 23,
      episodes: 79,
      image:
        "https://m.media-amazon.com/images/M/MV5BMzdlMDMxNzItNmViNS00NDRkLTg3OWMtNjliZGIxY2M5N2YyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      id: 15,
    },
    {
      title: "Cow and Chicken",
      year: 1995,
      creator: ["David Feiss"],
      rating: "TV-PG",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 53,
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYjE4ZGYtZDkyNC00ZmFiLWJiMGYtNjlmZWVmYWEwNTZhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,712,1000_AL_.jpg",
      id: 16,
    },
    {
      title: "I am Weasel",
      year: 1997,
      creator: ["David Feiss"],
      rating: "TV-G",
      genre: ["Adventure", "Short"],
      runtime_in_minutes: 30,
      episodes: 79,
      image:
        "https://m.media-amazon.com/images/M/MV5BZWY0YjA1YzQtM2ViYS00ZTRiLTlmYjUtZDJhNDlkMGI5NTU1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,750,1000_AL_.jpg",
      id: 17,
    },
    {
      title: "Johnny Bravo",
      year: 1997,
      creator: ["Van Partible"],
      rating: "TV-Y7",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 67,
      image:
        "https://m.media-amazon.com/images/M/MV5BZWE5NjBiNDktYWI4ZC00YjA0LWE1OGEtMzVlZTg1ZTk2MmMzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,733,1000_AL_.jpg",
      id: 18,
    },
    {
      title: "Kablam",
      year: 1996,
      creator: ["Will McRob"],
      rating: "TV-Y7",
      genre: ["Family", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 48,
      image:
        "https://m.media-amazon.com/images/M/MV5BNjE3ZTdmNTctZmYzZi00MDRmLTgzNjUtYTc1MjBiOTdjNjJlXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_.jpg",
      id: 19,
    },
    {
      title: "Hey Arnold",
      year: 1996,
      creator: ["Craig Bartlett"],
      rating: "TV-Y7",
      genre: ["Drama", "Comedy"],
      runtime_in_minutes: 15,
      episodes: 103,
      image:
        "https://m.media-amazon.com/images/M/MV5BMzhmMjE2YTYtMTc1Ni00Nzg0LWJhNTItZWZjZDNkNjRmOTAyXkEyXkFqcGdeQXVyODMyNjA3NzQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      id: 20,
    },
    {
      title: "Angry Beavers",
      year: 1996,
      creator: ["Mitch Schauer", "Keith Kaczorek"],
      rating: "TV-G",
      genre: ["Family", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 64,
      image:
        "https://m.media-amazon.com/images/M/MV5BODg2MGY5MDYtMGM5MS00OTg0LWE1YmEtM2IxN2Y1YzAzNjFiXkEyXkFqcGdeQXVyODg5MjMwNTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      id: 21,
    },
    {
      title: "The New Adventures of Winnie the Pooh",
      year: 1988,
      creator: ["Karl Geurs", "Terence Harrison", "Ken Kessel"],
      rating: "TV-Y",
      genre: ["Adventure", "Comedy"],
      runtime_in_minutes: 30,
      episodes: 50,
      image:
        "https://m.media-amazon.com/images/M/MV5BZjFkZDkwYjktMmZkNi00ZTVkLWI5ZmItZWI2MmI1NjQ1Y2U0XkEyXkFqcGdeQXVyOTg4MDk3MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      id: 23,
    },
  ];

  return (
    <div className="image-mosaic-container">
      <div className="image-mosaic">
        {cartoonData.map((data, index) => (
          <div
            className="card card-tall card-wide"
            style={{ backgroundImage: `url(${data.image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
