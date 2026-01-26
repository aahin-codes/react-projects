const data = [
  {
    type: "hex",
    title: "Random HEX Color (#)",
    shortDescription:
      "The standard web color format. It looks like #FF5733. We build this by picking 6 random characters.",
    description:
      "For a computer, a color is just a code made of numbers (0-9) and letters (A-F). To build this generator, we create an array of these 16 possible characters. When you click the button, we run a loop 6 times, picking a random character from that array each time, and sticking a '#' symbol at the front. It's like drawing 6 Scrabble tiles out of a bag!",
  },
  {
    type: "rgb",
    title: "Random RGB Color",
    shortDescription:
      "The 'Mixing Paint' format. It looks like rgb(255, 0, 0). We build this by picking 3 random numbers.",
    description:
      "This is even simpler math. In the digital world, every color is a mix of Red, Green, and Blue light. Each light can be set to an intensity between 0 (off) and 255 (full brightness). To make a random color, we simply generate three random numbers between 0 and 255 and paste them into a string: `rgb(R, G, B)`. It's exactly like mixing different amounts of paint in a bucket.",
  }
];
export default data;