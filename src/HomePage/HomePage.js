import React, { useState } from "react";
import "./HomePage.css";
import {
  FaUserFriends,
  FaAngleDown,
  FaFacebookMessenger,
  FaMedrt,
  FaFontAwesomeFlag,
  FaFacebook,
  FaSearch,
  FaHome,
  FaUsers,
  FaComments,
  FaBell,
  FaSignInAlt,
  FaAngleDoubleRight,
  FaVideo,
  FaRegSmileBeam,
  FaAngleUp,
} from "react-icons/fa";
import { MdVideoCall, MdSearch } from "react-icons/md";
import { FcGallery } from "react-icons/fc";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FcLike, FcShare, FcComments } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

const FacebookNavbar = () => {
  const [showStories, setShowStories] = useState(false);
  const stories = [
    {
      id: 1,
      name: "Rohani Sharma",
      image: "/images/s1.jpeg",
    },
    {
      id: 2,
      name: "Kriti Sehwan",
      image: "/images/s2.jpeg",
    },
    {
      id: 3,
      name: "Manpreet Kaur",
      image: "/images/s3.jpeg",
    },
    {
      id: 4,
      name: "Rohan Sharma",
      image: "/images/s4.jpeg",
    },
    {
      id: 5,
      name: "Kunal Kunj",
      image: "/images/s5.jpeg",
    },
  ];

  const handleSlider = () => {
    setShowStories(!showStories);
  };

  return (
    <>
      {/* navbar div  */}
      <nav className="facebook-navbar">
        <div className="facebook-navbar__logo">
          <a href="/home">
            <FaFacebook />
          </a>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <FaSearch />
          </button>
        </div>

        <div className="facebook-navbar__menu">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle">&#9776;</label>
          <ul>
            <li>
              <a href="/home">
                <FaHome />
              </a>
            </li>
            <li>
              <a href="/friends">
                <FaUsers />
              </a>
            </li>
            <li>
              <a href="/messages">
                <FaComments />
              </a>
            </li>
            <li>
              <a href="/notifications">
                <FaBell />
              </a>
            </li>
            <li>
              <a href="/">
                <FaSignInAlt />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* left sidebar div */}
      <div className="main">
        <div className="Lside">
          <div className="profile">
            <img src="/images/dp.jpeg" alt="dp" />
            Kashish Gupta
          </div>
          <div className="pro">
            <FaFontAwesomeFlag color="green" fontSize="2rem" />
            &nbsp;&nbsp;
            <div>Pages</div>
          </div>
          <div className="pro">
            <FaMedrt color="blue" fontSize="2rem" />
            &nbsp;&nbsp;
            <div>COVID-19 Information Centre</div>
          </div>
          <div className="pro">
            <FaFacebookMessenger color="green" fontSize="2rem" />
            &nbsp;&nbsp;
            <div>Messenger Kids</div>
          </div>
          <div className="pro">
            <FaUserFriends color="blue" fontSize="2rem" />
            &nbsp;&nbsp;
            <div>Friends</div>
          </div>
          <div className="pro" style={{display: "none"}}>
            <FaUserFriends color="blue" fontSize="2rem" />
            &nbsp;&nbsp;
            <div>Friends</div>
          </div>
          <div
              className="pro"
              style={{ cursor: "pointer" }}
              onClick={() => {
                const moreProfiles = document.querySelectorAll(
                  '.pro[style="display: none;"]'
                );
                moreProfiles.forEach((profile) => {
                  profile.style.display = "block";
                });
              }}
            >
              <FaAngleDown color="green" fontSize="2rem" />
              &nbsp;&nbsp;
              <div>See more</div>
          </div>
          <div
              className="press"
              style={{ cursor: "pointer" }}
              onClick={() => {
                const moreProfiles = document.querySelectorAll(
                  '.pro[style="display: block;"]'
                );
                moreProfiles.forEach((profile) => {
                  profile.style.display = "none";
                });
              }}
            >
              <FaAngleUp color="blue" fontSize="2rem" />
              &nbsp;&nbsp;
              <div>See less</div>
            </div>
          <br />
          <div className="education">
            <div className="edu">
              <img src="/images/react.jpeg" alt="dev" />
              <Link to="https://react.dev/reference/react">
                React Developer
              </Link>
            </div>
            <div className="edu">
              <img src="/images/MERN.jpeg" alt="dev" />
              <Link to="https://www.mongodb.com/languages/mern-stack-tutorial">
                MERN Developer
              </Link>
            </div>
            <div className="edu">
              <img src="/images/js.jpeg" alt="dev" />
              <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                JavaScript Developer
              </Link>
            </div>
            <div className="edu" style={{ display: "none" }}>
              <img src="/images/js.jpeg" alt="dev" />
              <Link to="https://docs.oracle.com/en/java/">Java Developer</Link>
            </div>

            <div
              className="press"
              style={{ cursor: "pointer" }}
              onClick={() => {
                const moreProfiles = document.querySelectorAll(
                  '.edu[style="display: none;"]'
                );
                moreProfiles.forEach((profile) => {
                  profile.style.display = "block";
                });
              }}
            >
              <FaAngleDown color="green" fontSize="2rem" />
              &nbsp;&nbsp;
              <div>See more</div>
            </div>
            <div
              className="press"
              style={{ cursor: "pointer" }}
              onClick={() => {
                const moreProfiles = document.querySelectorAll(
                  '.edu[style="display: block;"]'
                );
                moreProfiles.forEach((profile) => {
                  profile.style.display = "none";
                });
              }}
            >
              <FaAngleUp color="blue" fontSize="2rem" />
              &nbsp;&nbsp;
              <div>See less</div>
            </div>
          </div>
        </div>

        {/* main area div */}
        <div className="mainArea">
          {/* stories  */}
          <div className="addStory">
            {stories.slice(0, 4).map((story) => (
              <div className="story" key={story.id}>
                <img
                  src={story.image}
                  alt={`story${story.id}`}
                  style={{
                    height: "50px",
                    borderRadius: "50%",
                    paddingBottom: "8rem",
                  }}
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {story.name}
              </div>
            ))}
            <div className="rArrow">
              <div className="press">
                <FaAngleDoubleRight
                  onClick={handleSlider}
                  color="black"
                  fontSize="1.2rem"
                  style={{ cursor: "pointer" }}
                />

                {showStories &&
                  stories.slice(4).map((story) => (
                    <div className="story1" key={story.id}>
                      <img
                        src={story.image}
                        alt={`story${story.id}`}
                        style={{
                          height: "50px",
                          borderRadius: "50%",
                          paddingBottom: "8rem",
                        }}
                      />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      {story.name}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* message box  */}
          <div className="messageSender">
            <div className="messageSender__top">
              <img src="/images/dp.jpeg" alt="dp" />
              <form>
                <input
                  className="messageSender__input"
                  placeholder="What's on your mind, Kashish?"
                  type="Mind"
                />
              </form>
            </div>
            <div className="messageSender__bottom">
              <div className="messageSender__option">
                <FaVideo className="material-icons" />
                <h3>Live</h3>
              </div>
              <div className="messageSender__option">
                <FcGallery className="material-icons" />
                <h3>Photo</h3>
              </div>
              <div className="messageSender__option">
                <FaRegSmileBeam className="material-icons" />
                <h3>Feeling</h3>
              </div>
            </div>
          </div>

          {/* feeds  */}
          <div className="post">
            <div className="post__top">
              <img className="user__avatar post__avatar" src="dp.jpeg" alt="" />
              <div className="post__topInfo">
                <h3>Kashish Gupta</h3>
                <p>25 April at 20:30</p>
              </div>
            </div>

            <div className="post__bottom">
              <p>
                You can know or not know how a car runs and still enjoy riding
                in a car.
              </p>
            </div>

            <div className="post__image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="car"
              />
            </div>
            <div className="post__options">
              <div className="post__option">
                <FcLike className="material-icons" />
                <p>Like</p>
              </div>

              <div className="post__option">
                <FcComments className="material-icons" />
                <p>Comment</p>
              </div>

              <div className="post__option">
                <FcShare className="material-icons" />
                <p>Share</p>
              </div>
            </div>
          </div>

          <div className="post">
            <div className="post__top">
              <img className="user__avatar post__avatar" src="dp.jpeg" alt="" />
              <div className="post__topInfo">
                <h3>Kashish Gupta</h3>
                <p>28 April at 22:00</p>
              </div>
            </div>

            <div className="post__bottom">
              <p>
                I'd race to you the waves, but you'd probably beach me to it.
              </p>
            </div>

            <div className="post__image">
              <img
                src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                alt="dog"
              />
            </div>

            <div className="post__options">
              <div className="post__option">
                <FcLike className="material-icons" />
                <p>Like</p>
              </div>

              <div className="post__option">
                <FcComments className="material-icons" />
                <p>Comment</p>
              </div>

              <div className="post__option">
                <FcShare className="material-icons" />
                <p>Share</p>
              </div>
            </div>
          </div>

          <div className="post">
            <div className="post__top">
              <img className="user__avatar post__avatar" src="dp.jpeg" alt="" />
              <div className="post__topInfo">
                <h3>Kashish Gupta</h3>
                <p>12 April at 15:30</p>
              </div>
            </div>

            <div className="post__bottom">
              <p>I'm A Power Ranger 'Til The End'.</p>
            </div>

            <div className="post__image">
              <img
                src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXIlMjByYW5nZXIlMjBhbmltZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="power ranger"
              />
            </div>

            <div className="post__options">
              <div className="post__option">
                <FcLike className="material-icons" />
                <p>Like</p>
              </div>

              <div className="post__option">
                <FcComments className="material-icons" />
                <p>Comment</p>
              </div>

              <div className="post__option">
                <FcShare className="material-icons" />
                <p>Share</p>
              </div>
            </div>
          </div>

          <div className="post">
            <div className="post__top">
              <img className="user__avatar post__avatar" src="dp.jpeg" alt="" />
              <div className="post__topInfo">
                <h3>Kashish Gupta</h3>
                <p>12 Sept at 11:30</p>
              </div>
            </div>

            <div className="post__bottom">
              <p>
                Our age is merely the number of years the world has been
                enjoying us!
              </p>
            </div>

            <div className="post__image">
              <img
                src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="bday"
              />
            </div>

            <div className="post__options">
              <div className="post__option">
                <FcLike className="material-icons" />
                <p>Like</p>
              </div>

              <div className="post__option">
                <FcComments className="material-icons" />
                <p>Comment</p>
              </div>

              <div className="post__option">
                <FcShare className="material-icons" />
                <p>Share</p>
              </div>
            </div>
          </div>

          <div className="post">
            <div className="post__top">
              <img className="user__avatar post__avatar" src="dp.jpeg" alt="" />
              <div className="post__topInfo">
                <h3>Kashish Gupta</h3>
                <p>26 Jan at 00:30</p>
              </div>
            </div>

            <div className="post__bottom">
              <p>
                Freedom in mind, Faith in our heart, Memories in our souls.
                Let's salute the Nation on Republic DayFreedom in the mind,
                strength in the words, pureness in our blood, pride in our
                souls, zeal in our hearts. Let's salute our India on Republic
                Day. Happy Republic Day!
              </p>
            </div>

            <div className="post__image">
              <img
                src="https://images.unsplash.com/photo-1605478060354-fdd636ea3f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGZsYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="indian flag"
              />
            </div>

            <div className="post__options">
              <div className="post__option">
                <FcLike className="material-icons" />
                <p>Like</p>
              </div>

              <div className="post__option">
                <FcComments className="material-icons" />
                <p>Comment</p>
              </div>

              <div className="post__option">
                <FcShare className="material-icons" />
                <p>Share</p>
              </div>
            </div>
          </div>
          <h2 style={{ textAlign: "center" }}>
            More feeds... <AiOutlineLoading3Quarters />
          </h2>
        </div>

        {/* right sidebar div */}

        <div className="Rside">
          <div className="contact">
            <div className="contacts">
              Contacts
              <MdVideoCall
                style={{ fontSize: "1.8rem", paddingLeft: "3rem" }}
              />
              <MdSearch style={{ fontSize: "1.8rem", paddingLeft: "2rem" }} />
              <AiOutlineEllipsis
                style={{ fontSize: "1.8rem", paddingLeft: "2rem" }}
              />
            </div>
            <div className="cont">
              <img src="/images/1.jpeg" alt="dp" />
              Rohan Gupta
            </div>
            <div className="cont">
              <img src="/images/2.jpeg" alt="dp" />
              Deepsha Yadav
            </div>
            <div className="cont">
              <img src="/images/3.jpeg" alt="dp" />
              Nitin Kumar
            </div>
            <div className="cont">
              <img src="/images/4.jpeg" alt="dp" />
              Sonam Jain
            </div>
            <div className="cont">
              <img src="/images/5.jpeg" alt="dp" />
              Vishal Gupta
            </div>
            <div className="cont">
              <img src="/images/6.jpeg" alt="dp" />
              Kunal Thakur
            </div>
            <div className="profile">
              <img src="/images/dp.jpeg" alt="dp" />
              Kashish Gupta
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacebookNavbar;
