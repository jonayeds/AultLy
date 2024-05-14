import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const Recommenders = () => {

    const [recommenders , setRecommenders] = useState([])
    // const newReco = []
    useEffect(()=>{
        fetch('https://aultly-server.vercel.app/recommendations')
        .then(res=> res.json())
        .then(data =>{
            setRecommenders(data.filter((recommender, index) => data.findIndex((item) => item.recommenderEmail === recommender.recommenderEmail) === index ))
        })
    },[])
    console.log(recommenders)
    return (
        <div className="my-20 ">
          <h1 className="heading text-4xl text-center my-12">All <span className="font-logo text-[#3e939b]">Recommenders</span></h1>
          
        <Marquee>
          {recommenders.map((recommender) => (
            <div
              key={recommender._id}
              className="mx-10"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <img src={recommender.recommenderImage} className="w-32 rounded-full" alt="" />
                <h1 className="text-2xl font-semibold ">{recommender.recommenderName}</h1>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    );
};

export default Recommenders;