const data = [
  {
    title: "Image Slider (Carousel)",
    shortDescription:
      "A digital photo album. Click 'Next' to swap pictures, just like swiping through Instagram stories.",
    description:
      "Under the hood, this component is just a simple math problem. We have a list of image URLs (an array). We use a state variable called 'currentSlide' (0, 1, 2) to decide which one to show. When you click 'Next', we simply add +1. The specific challenge in this project is the 'Loop Logic': teaching the code that when it reaches the last photo, the 'Next' button should reset the count back to 0 (the start).",
  },
];
export default data;