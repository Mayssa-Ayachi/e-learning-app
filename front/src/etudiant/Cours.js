import React from 'react'
export default function Cours({cours}) {
  return (
    <div className="courses">
            {cours.imgurl.map(ig => {
              return(
                <div className="cours" >
                <br/><br/><img src={ig} width="1000" height="600" /> <br/><br/>
                </div>
              )
            })}
            </div>
  )
}
