import React, { useState } from "react";
import aliensImage from "../images/aliens.jpg";
import batmanImage from "../images/batman.jpg";
import beetleJuiceImage from "../images/beetlejuice.jpg";
import bloodsportImage from "../images/bloodsport.jpg";
import bttfImage from "../images/bttf.jpg";
import etImage from "../images/et.jpg";
import ghostbustersImage from "../images/ghostbusters.jpg";
import gooniesImage from "../images/goonies.jpg";
import gremlinsImage from "../images/gremlins.jpg";
import indyImage from "../images/indiana-jones.jpg";
import karateImage from "../images/karate-kid.jpg";
import kickBoxerImage from "../images/kickboxer.jpg";
import labyrinthImage from "../images/labyrinth.jpg";
import neverendingImage from "../images/neverending-story.jpg";
import predatorImage from "../images/predator.jpg";
import ramboImage from "../images/rambo.jpg";
import sandlotImage from "../images/sandlot.jpg";
import starwarsImage from "../images/star-wars.jpg";
import terminatorImage from "../images/terminator.jpg";
import tmntImage from "../images/tmnt.jpg";
import Movies from "./Movies";
import ReviewList from "./ReviewList";

function MovieList() {

  // convert movies to state
  const [movies, setMovies] = useState([
    /* the same movies array you had */
    {
      name: "Aliens",
      actor: "Sigourney Weaver",
      image: aliensImage,
      synopsis:
        "The sequel to Alien sees Ripley, the sole survivor of the Nostromo incident, returning to face the creatures with a team of space marines.",
      reviews: [
        {
          name: "Haskell", stars: 4, reviewText: "This was Awsome!"
        },
        {
          name: "Tracey", stars: 1, reviewText: "This sucked!"
        },
        // Add reviews as an array
      ],
    },
    {
      name: "Batman",
      actor: "Michael Keaton",
      image: batmanImage,
      synopsis:
        "A billionaire vigilante fights against the dark underbelly of Gotham City.",
      reviews: [
        {name: "Johnny", stars: 2, reviewText: "Love me some Batman!"}
      ],
    },
    {
      name: "Beetlejuice",
      actor: "Michael Keaton",
      image: beetleJuiceImage,
      synopsis:
        'A recently deceased couple call upon a bizarre "bio-exorcist" to scare away the new living occupants of their house.',
      reviews: [
        {
          name: "James", stars: 5, reviewText: "Beetlejuice! Beetlejuice! Beetlejuice!"
        },
      ],
    },
    {
      name: "Bloodsport",
      actor: "Jean-Claude Van Damme",
      image: bloodsportImage,
      synopsis:
        "An American martial artist competes in a deadly underground fighting tournament.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "Back to the Future",
      actor: "Michael J. Fox",
      image: bttfImage,
      synopsis:
        "A teen accidentally travels back in time to his parents' high school years, threatening his own existence.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "E.T.",
      actor: "Henry Thomas",
      image: etImage,
      synopsis:
        "A young boy befriends an extraterrestrial and attempts to help it return home.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "Ghostbusters",
      actor: "Bill Murray",
      image: ghostbustersImage,
      synopsis:
        "A group of scientists set up a unique ghost removal service in New York City.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "The Goonies",
      actor: "Sean Astin",
      image: gooniesImage,
      synopsis:
        "A group of misfit kids embark on a quest to find a pirate's ancient treasure.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "Gremlins",
      actor: "Zach Galligan",
      image: gremlinsImage,
      synopsis:
        "A boy inadvertently breaks three important rules concerning his new pet, unleashing a horde of malevolently mischievous monsters on his small town.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "Indiana Jones: Temple of Doom",
      actor: "Harrison Ford",
      image: indyImage,
      synopsis:
        "Archaeologist Indiana Jones is tasked with rescuing enslaved children and recovering a sacred stone in an adventure set in India.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "The Karate Kid",
      actor: "Ralph Macchio",
      image: karateImage,
      synopsis:
        "A bullied teen learns karate from a wise mentor to defend himself.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "Kickboxer",
      actor: "Jean-Claude Van Damme",
      image: kickBoxerImage,
      synopsis:
        "A man trains in kickboxing to avenge his brother who was crippled in a fight.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "Labyrinth",
      actor: "David Bowie",
      image: labyrinthImage,
      synopsis:
        "A teenager must navigate a fantastical maze to save her brother from a goblin king.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "Neverending Story",
      actor: "Noah Hathaway",
      image: neverendingImage,
      synopsis: `'A young boy's reading takes him into a fantasy world where he has the power to alter the course of events.'`,
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "The Predator",
      actor: "Arnold Schwarzenegger",
      image: predatorImage,
      synopsis:
        "An elite special forces team encounters a deadly extraterrestrial creature in the Central American jungle.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "Rambo",
      actor: "Sylvester Stallone",
      image: ramboImage,
      synopsis:
        "A troubled Vietnam War veteran uses his combat skills against the law enforcement of a small town.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "The Sandlot",
      actor: "Tom Guiry",
      image: sandlotImage,
      synopsis:
        "In the summer of 1962, a new kid in town is taken under the wing of a young baseball prodigy and his rowdy team.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "Star Wars",
      actor: "Mark Hamill",
      image: starwarsImage,
      synopsis:
        "A young farm boy joins a rebellion to save a princess and the galaxy from a tyrannical empire.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "The Terminator",
      actor: "Arnold Schwarzenegger",
      image: terminatorImage,
      synopsis:
        "A relentless cyborg is sent from the future to terminate a woman whose unborn son is the key to humanity's future salvation.",
      reviews: [
        // Add reviews as an array
      ],
    },
    {
      name: "Teenage Mutant Ninja Turtles",
      actor: "Judith Hoag",
      image: tmntImage,
      synopsis:
        "Four mutated turtles trained in ninjutsu protect New York City from criminals and a powerful enemy.",
      reviews: [
        // Add reviews as an array
      ],
    },
  ]);

  // function to add a review
  const addReview = (movieIndex, review) => {
    setMovies(prevMovies => {
      const newMovies = [...prevMovies];
      newMovies[movieIndex].reviews.push(review);
      return newMovies;
    });
  }


  // let movies = [
    
  // ];

  return (
    <div className="movie-container">
      {movies.map((movie, index) => (
        <div key={index}>
          <Movies movie={movie} reviews={movie.reviews} addReview={(review) => addReview(index, review)} />
          <ReviewList reviews={movie.reviews} />
        </div>
      ))}
      
    </div>
  );
}

export default MovieList;
