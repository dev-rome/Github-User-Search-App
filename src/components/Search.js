import styled from "styled-components";
import SearchIcon from "../assets/icon-search.svg";

const Form = styled.form`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.formBG};
  height: 60px;
  border-radius: 15px;
  padding-inline: 1rem 0.438rem;

  input {
    border: none;
    outline: none;
    background: none;
    padding-inline: 0.688rem 0.438rem;
    width: 100%;
    caret-color: #0079ff;
    color: ${(props) => props.theme.formInput};

    &::placeholder {
      font-size: 0.813rem;
      color: ${(props) => props.theme.text};
    }
  }

  button {
    background: #0079ff;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 700;
    border: none;
    text-transform: capitalize;
    padding: 0.781rem 1.125rem;
    border-radius: 10px;
    margin-left: auto;
    cursor: pointer;

    &:hover {
      background: #60abff;
    }
  }
`;

const Search = () => {
  return (
    <Form>
      <img src={SearchIcon} alt="search" />
      <input type="text" placeholder="Search Github username..." />
      <button type="submit">search</button>
    </Form>
  );
};

export default Search;
