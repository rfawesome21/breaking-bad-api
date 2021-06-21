import React from 'react'


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const CharacterItem = ({item}) => {
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{capitalizeFirstLetter(item.name)}</h1>
          <ul>
            <li>
              <strong>Nickname:</strong> {item.nickname} 
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
                <strong>Potrayed by:</strong> {item.portrayed}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}


export default CharacterItem
