import "./commentList.scss";

const getRandomId = () => Math.floor(Math.random() * 9999);

export class commentList {
  constructor(rootElement = document.querySelector("body")) {
    this.rootElement = rootElement;
    this.comments = [];
    this.init();
  }

  init() {
    this.getComments();
    this.render();
  }
  getComments() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:4001/comments");
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.comments = JSON.parse(xhr.response);
          console.log(this.comments);
          this.renderList();
        } else {
          this.rootElement.innerHTML = "ERROR";
        }
      }
    };
  }

  render() {
    this.renderWrapper();
    this.renderInputAuthor();
    // this.renderInputText();
  }

  renderInputAuthor() {
    this.form = document.createElement("form");
    this.input = document.createElement("input");
    this.input.classList.add('name');
    this.otherInput = document.createElement("textarea");
    this.otherInput.classList.add('text');
    this.form.addEventListener("submit", e => {
      e.preventDefault();
      this.addAuthor();
    });
    this.form.appendChild(this.input);
    this.wrapper.appendChild(this.otherInput);
    this.wrapper.appendChild(this.form);
  }

//   renderInputText() {
//       this.form = document.createElement('form');
//       this.input = document.createElement('input');
//       this.input.classList.add('comment');
//       this.form.addEventListener('submit', e => {
//           e.preventDefault();
//           this.addText();
//       });
//       this.form.appendChild(this.input);
//       this.wrapper.appendChild(this.form);
//   }

//   addText() {
//     const xhr = new XMLHttpRequest();

//     xhr.open("POST", "http://localhost:4001/comments");

//     const text = {
//         text: this.input.value,
//     };

//     xhr.setRequestHeader('Content-Type', 'application/json')
//     xhr.send(JSON.stringify(text));
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           this.comments.push(JSON.parse(xhr.response));
//           this.renderItem(JSON.parse(xhr.response));
//           this.input.value = '';
//         } else {
//           this.rootElement.innerHTML = "ERROR";
//         }
//       }
//     };
//   }

  addAuthor() {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:4001/comments");

    const author = this.input.value;
    const text = this.otherInput.value;

    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify({author,text}));
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.comments.push(JSON.parse(xhr.response));
          this.renderItem(JSON.parse(xhr.response));
          this.input.value = '';
        } else {
          this.rootElement.innerHTML = "ERROR";
        }
      }
    };
  }

  renderWrapper() {
    this.wrapper = document.createElement("div");
    this.rootElement.appendChild(this.wrapper);
  }

  renderList() {
    if(this.ul) {
        this.ul.innerHTML = '';
    } else {
        this.ul = document.createElement('ul');
    }

    for (let comment of this.comments) {
      this.renderItem(comment);
    }
    this.wrapper.appendChild(this.ul);
  }

  renderItem(comment) {
    const li = document.createElement("li");
    // li.innerHTML = comment.author;
    const authorName = document.createElement('div');
    const authorText = document.createElement('div');
    li.id = comment.id;
    this.li.appendChild(authorName);
    this.li.appendChild(authorText);
    this.ul.appendChild(li);
  }
}
