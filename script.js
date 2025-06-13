function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.querySelector("main").classList.toggle("dark-mode");
}

const quizData = {
  HTML: [
    { q: "What does HTML stand for?", options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None"], ans: 0 },
    { q: "Which tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<hyper>"], ans: 0 },
    { q: "Which tag is used for inserting an image?", options: ["<image>", "<img>", "<pic>", "<src>"], ans: 1 },
    { q: "HTML files have extension:", options: [".html", ".ht", ".xml", ".htaccess"], ans: 0 },
    { q: "Which tag is used for the largest heading?", options: ["<h6>", "<h1>", "<heading>", "<head>"], ans: 1 }
  ],
  CSS: [
    { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"], ans: 0 },
    { q: "Which property is used to change text color?", options: ["bgcolor", "color", "text-color", "fontcolor"], ans: 1 },
    { q: "Which symbol is used for ID selector?", options: ["#", ".", "*", "@"], ans: 0 },
    { q: "How do you include external CSS?", options: ["<style>", "<css>", "<link>", "<script>"], ans: 2 },
    { q: "Default position value of an element?", options: ["relative", "absolute", "static", "fixed"], ans: 2 }
  ],
  JavaScript: [
    { q: "Which keyword declares a variable?", options: ["var", "let", "const", "All of the above"], ans: 3 },
    { q: "JavaScript runs in:", options: ["Server", "Browser", "Compiler", "Console only"], ans: 1 },
    { q: "Which symbol is used for comments?", options: ["//", "#", "<!-- -->", "/* */"], ans: 0 },
    { q: "DOM stands for:", options: ["Document Object Model", "Data Object Model", "Display Object Model", "None"], ans: 0 },
    { q: "typeof null is?", options: ["object", "null", "undefined", "boolean"], ans: 0 }
  ],
  Accessibility: [
    { q: "ARIA stands for?", options: ["Accessible Rich Internet Apps", "Audio Rich Internet Apps", "Access Rules In Action", "None"], ans: 0 },
    { q: "What does 'alt' attribute do?", options: ["Provides alt text", "Aligns image", "Adds animation", "None"], ans: 0 },
    { q: "Which tag defines abbreviation?", options: ["<abbr>", "<abbrv>", "<abbrev>", "<short>"], ans: 0 },
    { q: "Best color contrast is:", options: ["White on yellow", "Black on white", "Green on red", "Gray on blue"], ans: 1 },
    { q: "Which element is best for screen readers?", options: ["<span>", "<div>", "<label>", "<b>"], ans: 2 }
  ]
};

function startQuiz(subject) {
  const box = document.getElementById("quizBox");
  const container = document.getElementById("questionsContainer");
  const title = document.getElementById("subjectTitle");
  const questions = quizData[subject];

  title.textContent ='  ${subject} Quiz';
  container.innerHTML = "";

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `
      <p>Q${index + 1}. ${q.q}</p>
      ${q.options
        .map(
          (opt, i) =>
            '<label><input type="radio" name="q${index}" value="${i}"> ${opt}</label> '
        )
        .join("")}
    `;
    container.appendChild(div);
  });

  box.style.display = "block";
}

function closeQuiz() {
  document.getElementById("quizBox").style.display = "none";
}