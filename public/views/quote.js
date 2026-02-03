export function quoteInit() {
  const quotes = [
    {
      quote: `"Whatever you are, be a good one."`,
      author: "- Abraham Lincoln",
      imagePath: "../images/Abraham_Lincoln.jpg",
    },
    {
      quote: `
                "Let's go invent
                tomorrow rather than
                worrying about what happened yesterday."`,
      author: "- Steve Jobs",
      imagePath: "../images/steavejobs.jpeg",
    },
    {
      quote: `"In the middle of difficulty lies opportunity."`,
      author: "- Albert Einstein",
      imagePath: "../images/Albert_Einstein_Head_cleaned.jpg",
    },
    {
      quote: `
                "The greatest enemy of knowledge is not ignorance,
                it is the illusion of knowledge."`,
      author: "- Stephen Hawking",
      imagePath: "../images/Stephen_Hawking.jpg",
    },
    {
      quote: `"A winner is a dreamer who never gives up."`,
      author: "- Nelson Mandela",
      imagePath: "../images/Nelson-Mandela.jpg",
    },
    {
      quote: `"I had rather be on my farm than be emperor of the world."`,
      author: "- George Washington",
      imagePath: "../images/george.jpeg",
    },
    {
      quote: `
                "The Earth does not belong to us: we
                belong to the Earth."`,
      author: "- Chief Seattle",
      imagePath: "../images/siyatal.jpeg",
    },
    {
      quote: `"Family pride was a mask that had covered her egoism."`,
      author: "- Martin Wickramasinghe",
      imagePath: "../images/martin.jpeg",
    },
  ];

  const quoteText = document.getElementById("quote-text");
  const authorName = document.getElementById("author-name");
  const authorImage = document.getElementById("author-image");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = 0;

  function updateQuote() {
    quoteText.classList.remove("fade");
    authorName.classList.remove("fade");
    authorImage.classList.remove("fade");

    void quoteText.offsetWidth;

    const currentQuote = quotes[currentIndex];

    quoteText.textContent = currentQuote.quote;
    authorName.textContent = currentQuote.author;
    authorImage.style.backgroundImage = `url('${currentQuote.imagePath}')`;

    quoteText.classList.add("fade");
    authorName.classList.add("fade");
    authorImage.classList.add("fade");
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % quotes.length;
    updateQuote();
  });

  currentIndex = Math.floor(Math.random() * quotes.length);
  updateQuote();
}

export default function quote() {
  return `
  <style>

  .outer-wrapper{
      display: flex;
      justify-content: space-between;
  }

  .quote-wrapper{
      color: #fbfbfb;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }

  .quote-wrapper p{
    font-size: 36px;
    font-weight: 500;
  }

  .quote-wrapper h4 {
    font-size: 22px;
    font-family: Inter, sans-serif;
    font-weight: 700;
  }

  #next-btn{
      margin-top:20px;
      width: 200px;
      padding:10px 18px;
      border:none;
      border-radius:8px;
      background:#2b2d33;
      color:white;
      cursor:pointer;
  }

  .image-wrapper{
      width: 40%;
      height: 100%;
  }

  .image{
      height: auto;
      width: 50px;
      background-position: center;
      background-size: cover;
      border-radius: 20px;
  }


  .fade {
      animation: fadeEffect 0.4s ease-in-out;
  }

  @keyframes fadeEffect {
      from {
          opacity: 0;
          transform: translateY(10px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }

  </style>

  <div class="quote-body">
    <div class="outer-wrapper">

        <div class="quote-wrapper">
            <div>
                <p id="quote-text"></p>
                <h4 id="author-name"></h4>
            </div>
            <button id="next-btn">Next Quote</button>
        </div>

        <div class="image-wrapper">
            <div class="image" id="author-image"></div>
        </div>

    </div>
</div>`;
}
