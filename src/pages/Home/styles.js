import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      width: 250px;
      align-self: center;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-weight: bold;
      font-size: 21px;
      margin: 5px 0 20px;
    }

    button {
      display: flex;
      align-items: center;

      background: #7159c1;
      color: #fff;
      border-radius: 4px;
      border: 0;
      margin-top: auto;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
      }
    }
  }
`;
