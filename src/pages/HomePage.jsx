import { addNewHobby, setActiveHobby } from "../actions/hobby";
import { useDispatch, useSelector } from "react-redux";

import HobbyList from "../components/Home/HobbyList";
import React from "react";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
}

function HomePage() {
  const hobbyList = useSelector(state => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId);
  
  const dispatch = useDispatch();
  console.log(hobbyList);

  const handleAddHobbyClick = () => {
    const newId = randomNumber();
    const newHobby = {
      // id: casual.uuid,
      // title: casual.title,
      id: newId,
      title: "Hobby " + newId,
    }

    const action = addNewHobby(newHobby);
    dispatch(action);
  }

  const handleHobbyClick = (hobby) => {
    const action  = setActiveHobby(hobby);
    dispatch(action);
  }
  
  return (
    <div className="home-page">
      <h1>Redux Hooks HomePage</h1>
      <button onClick= {handleAddHobbyClick}>RanDom Hobby</button>
      <HobbyList 
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  )
}

export default HomePage;