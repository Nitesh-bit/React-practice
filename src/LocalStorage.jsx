import { useEffect, useState } from "react";
import "./styles.css";

const blogs = [
  {
    id: 0,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 1,
    content:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ",
  },
  {
    id: 2,
    content:
      "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function App() {
  const [isBookmark, setBookmark] = useState(false);

  //Lazy Initial State
  const [bookMarks, setBookmarks] = useState(function () {
    const storedValue = localStorage.getItem("blogs");
    return JSON.parse(storedValue);
  });

  function handleBookmark(id) {
    setBookmarks((prevBlogs) => [...prevBlogs, blogs[id]]);
  }

  function deleteBookmark(id) {
    setBookmarks((prevBlogs) => {
      return prevBlogs.filter((blog) => {
        return blog.id !== id;
      });
    });
  }

  //local storage
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(bookMarks));
  }, [bookMarks]);

  return (
    <div className="App">
      <button onClick={() => setBookmark(false)}>Dashboard</button>
      <button onClick={() => setBookmark(true)}>Bookmark</button>
      <Main
        isBookmark={isBookmark}
        bookMarks={bookMarks}
        handleBookmark={handleBookmark}
        deleteBookmark={deleteBookmark}
      />
    </div>
  );
}

function Main({ isBookmark, bookMarks, handleBookmark, deleteBookmark }) {
  return (
    <div
      style={{
        width: "600px",
        height: "300px",
        backgroundColor: "grey",
        border: "2px solid black",
        position: "relative",
        left: "20px",
        top: "10px",
      }}
    >
      {!isBookmark ? (
        blogs.map((blog) => (
          <Blog
            key={blog.id}
            id={blog.id}
            content={blog.content}
            handleBookmark={handleBookmark}
            isBookmark={isBookmark}
          />
        ))
      ) : (
        <BookMark
          bookMarks={bookMarks}
          handleBookmark={deleteBookmark}
          isBookmark={isBookmark}
        />
      )}
    </div>
  );
}

function BookMark({ bookMarks, handleBookmark, isBookmark }) {
  return (
    <>
      <div>
        {bookMarks.map((bookMark) => {
          return (
            <Blog
              key={bookMark.id}
              id={bookMark.id}
              content={bookMark.content}
              handleBookmark={handleBookmark}
              isBookmark={isBookmark}
            />
          );
        })}
      </div>
    </>
  );
}

function Blog({ id, content, handleBookmark, isBookmark }) {
  return (
    <>
      <div>{content}</div>
      <button onClick={() => handleBookmark(id)}>
        {!isBookmark ? "Bkmrk" : "rmv"}
      </button>
    </>
  );
}
