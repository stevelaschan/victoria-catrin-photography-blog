import { css } from '@emotion/react';
import Link from 'next/link';

const logoStyle = css`
  display: flex;
`;

const headerStyle = css`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 8vh;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 5px rgba(200, 200, 200, 0.3);
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 0 8px;
  justify-content: flex-end;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 20px;
  /* box-shadow: 0 5px 12px 2px rgba(0, 0, 0, 0.15); */
  a {
    display: flex;
    cursor: pointer;
    margin: 0 24px;
    color: #505050;
    text-decoration: none;
  }
  a:hover {
    transition: all 0.3s ease-in-out;
    border-bottom: 1px solid;
  }
`;

type CartItems = {
  id: number;
  price: number;
  amount: number;
};

export default function Header() {
  return (
    <header css={headerStyle}>
      {/* <div css={logoStyle}>Victoria Catrin Photography</div> */}
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
}
