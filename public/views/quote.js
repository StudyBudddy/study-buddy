export function quoteInit() {
  const quotes = [
    {
      quote: `"Whatever you are, be a good one."`,
      author: "- Abraham Lincoln",
      imagePath: "../images/Abraham_Lincoln.jpg",
    },
    {
      quote: `"Let's go invent tomorrow rather than worrying about what happened yesterday."`,
      author: "- Steve Jobs",
      imagePath: "../images/steavejobs.jpeg",
    },
    {
      quote: `"In the middle of difficulty lies opportunity."`,
      author: "- Albert Einstein",
      imagePath: "../images/Albert_Einstein_Head_cleaned.jpg",
    },
    {
      quote: `"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."`,
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
      quote: `"The Earth does not belong to us: we belong to the Earth."`,
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
  .quote-body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .outer-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    height: 100%;
  }

  .quote-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }

  .quote-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  #quote-text {
    font-size: 22px;
    font-style: italic;
    font-weight: 500;
    line-height: 1.5;
    color: var(--heading-color);
    margin: 0;
  }

  #author-name {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-color);
    margin: 0;
  }

  #next-btn {
    padding: 10px 30px;
    border: solid 2px var(--primary-color);
    border-radius: 12px;
    background: transparent;
    color: var(--primary-color);
    font-size: 15px;
    font-weight: 600;
    font-family: var(--font-primary);
    cursor: pointer;
    transition: all 0.3s ease;
    width: fit-content;
  }

  #next-btn:hover {
    background: var(--primary-color);
    color: var(--bg-color);
    transform: translateY(-2px);
  }

  #next-btn:active {
    transform: translateY(0);
  }

 .image-wrapper {
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

#author-image {
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: 3px solid var(--secondary-bg-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

#author-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0;
  text-align: center;
  white-space: nowrap;
}

  .fade {
    animation: fadeEffect 0.5s ease-in-out;
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
        <div class="quote-content">
          <p id="quote-text"></p>
        </div>
        <button id="next-btn">Next Quote →</button>
      </div>
      <div class="image-wrapper">
        <div id="author-image"></div>
        <h4 id="author-name"></h4>
      </div>
    </div>
  </div>`;
}
