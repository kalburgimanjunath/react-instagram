import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-findcond navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapse"
              data-toggle="collapse"
              data-target="#navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              Instagram
            </a>
          </div>
          <div className="collapsed navbar-collapse" id="navbar">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="fa fa-fw fa-bell-o"></i> Home
                  <span className="badge">0</span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="#">
                      <i className="fa fa-fw fa-tag"></i>{' '}
                      <span className="badge">Music</span> sayfası{' '}
                      <span className="badge">Video</span> sayfasında
                      etiketlendi
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-fw fa-thumbs-o-up"></i>{' '}
                      <span className="badge">Music</span> sayfasında iletiniz
                      beğenildi
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-fw fa-thumbs-o-up"></i>{' '}
                      <span className="badge">Video</span> sayfasında iletiniz
                      beğenildi
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-fw fa-thumbs-o-up"></i>{' '}
                      <span className="badge">Game</span> sayfasında iletiniz
                      beğenildi
                    </a>
                  </li>
                </ul>
              </li>
              <li className="active">
                <a href="#">
                  Chat <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Notification <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="#">Geri bildirim</a>
                  </li>
                  <li>
                    <a href="#">Yardım</a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">Ayarlar</a>
                  </li>
                  <li>
                    <a href="#exit">Çıkış yap</a>
                  </li>
                  <li className="active">
                    <a href="#">
                      Profile <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form
              className="navbar-form navbar-right search-form"
              role="search"
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/notification">Notification</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}
