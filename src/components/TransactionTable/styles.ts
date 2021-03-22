import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      padding: 1rem 2rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: left;
    }

    td {
      background: var(--shape);
      padding: 1rem 2rem;
      border: 0;
      border-radius: 0.25rem;
      color: var(--text-body);

      &:first-child {
        color: var(--title);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
