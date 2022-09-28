import React from 'react';

// const cardTitle="Card Title";
// const cardDes="card description card description card description";
const date = new Date();
const dateName = date.getDate();
const dateMonth = date.getMonth();
const currentYear =date.getFullYear();

function Card({titleText,desText}){
// const {titleText,desText}=props;
// const name =["Lima","nafija"];
// name[0];
// name[1];
// const [Lima, nafija ]= name;

  return <div>
            <div className='card'>
              <p className='cardTitle'>{titleText}</p>
              <p className='cardDes'>{desText} </p>
              <p className='cardFooter'>{dateName + "/" + dateMonth + "/" +currentYear}</p>
            </div>
        </div>
}
export default Card