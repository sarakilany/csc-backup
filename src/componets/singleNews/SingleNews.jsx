import React from 'react';
import newsImg from '../../assets/images/img2.jpg';

export default function SingleNews() {
  
  return (<>
  
    <h3 className='text-center my-4'>Single News ..</h3>
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto mb-4">
          <img className='w-100' src={newsImg} alt="news image" />
        </div>
        <div className="col-md-10 m-auto my-3">
          <h4>Recycle Your Past And Present Than Make A Perfect Future.</h4>
        </div>
        <div className="col-md-10 mb-4 m-auto">
          <p style={{color:"#818181"}}>If you are creative, then you never refuse reuse.I love woody trash because I use it.
             Recycling is a saving of money. Don’t say sorry for recycling.
              Never kick recycling in life.Reuse, recycle is not bullshit.
              Recycling the environment is our biggest dream.Stop chasing waste your material.
              Far away to be trashy.Reuse aluminum because of its superb.Save energy for recycling. Society needs recycling.</p>
        </div>
      </div>
    </div>

    </>
  )
}
