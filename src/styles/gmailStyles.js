import styled from 'styled-components';

export const GmailStyles = styled.div`
  flex: 1.5;
  .login button {
    height: 50px;
    width: 200px;
    background: #fff;
    color: #000;
    border-radius: 25px;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  .gmail-title {
    font-weight: 400;
    font-size: 14px;
    padding: 5px;
  }
  .mails-container {
    width: 80%;
    border-top: 1px solid #fffa;
    .mails {
      overflow-y: scroll;
      max-height: 50vh;
      padding: 1rem;
      list-style: none;
      li {
        position: relative;
        .dot {
          display: none;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -15px;
          height: 10px;
          width: 10px;
          border-radius: 5px;
          background-color: #fff;
          &.unread {
            display: block;
          }
        }
      }
    }
    .single-mail {
      padding: 10px;
      .mail-body {
        .mail-line {
          font-size: 13px;
          font-weight: 300;
          .subject {
            font-weight: 500;
          }
        }
      }
      .mail-header {
        margin-bottom: 5px;
        .username {
          font-weight: 600;
          .user-email {
            font-weight: 400;
            font-size: 13px;
          }
          .header-time {
            float: right;
            font-weight: 500;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
