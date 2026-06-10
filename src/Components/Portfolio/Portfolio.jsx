

import React, { useState } from 'react'


import shakti from '../../assets/shakti-02.png'
import febi from '../../assets/febi-02.png'
import shopkalakriti from '../../assets/shopkalakriti-01.png'
import events from '../../assets/events-02.png'
import olympics from '../../assets/olympics-01.png'
import lalettre from '../../assets/lalettre-02.png'

const categories = ["All", "Websites", "Design"];
// const [zoomedImage, setZoomedImage] = useState(null);

const allProjects = [

{ id: 1, category: 'Websites', image: shakti },
  { id: 2, category: 'Websites', image: febi },
  { id: 3, category: 'Websites', image: shopkalakriti },
  { id: 4, category: 'Websites', image: events },
  { id: 7, category: 'Design',   image: olympics },
  { id: 8, category: 'Design',   image: lalettre },

  // {id: 1, category: 'Websites', image:"/src/assets/shakti-02.png"},
  //  {id: 2, category: 'Websites', image:"/src/assets/febi-02.png"},
  //    {id: 3, category: 'Websites', image:"/src/assets/shopkalakriti-01.png"},
  //    {id: 4, category: 'Websites', image:"/src/assets/events-02.png"},
  //     {id: 7, category: 'Design', image:"/src/assets/olympics-01.png"},
  //      {id: 8, category: 'Design', image:"/src/assets/lalettre-02.png"}
];

function Portfolio(){
  const [active, setActive] = useState("All");
  const [modalImg, setModalImg] = useState(null)

  const filtered =
  active === "All"
  ? allProjects
  : allProjects.filter((item) => item.category ===active);

  return (
    <section style = {{padding: "40px 20px", marginBottom: 32}}>

      {/* Title */}

      <div style={{ position: "relative", marginBottom: 62, textAlign: "center"}}>
      {/* <span style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: 80, color: "#e0e0de", fontWeight: 700,
        whiteSpace: "nowrap", userSelect: "none", 
        zIndex: 0, 
      }}>
        PORTFOLIO

      </span> */}

      <h2 style={{
        position: "relative", zIndex: 1, display: "inline-block",
        fontSize: 28, fontWeight: 500, paddingBottom: 8,
        borderBottom: "2px solid #2ecc8a"
      }}>
        My Work
      </h2>
      </div>

      {/* Filter Tabs */}
      <div style = {{display: "flex", justifyContent: "center", gap: 32, marginBottom: 62}}>
      {categories.map((cat)=>(
        <button key={cat} onClick={() => setActive(cat)}
        style={{
          background: "none", border: "none", cursor: "pointer",
          fontSize: 18, fontWeight: 500,
          color: active === cat ? '#ffff' : "#888",
          paddingBottom: 6,
          borderBottom: active ===cat ? "2px solid #2ecc8a" : "2px solid transparent",
          transition: "all 0.2s",
        }}
        >
          {cat}

        </button>
      ))}
      </div>

      {/* Grid */}

      <div style = {{
        display: "grid",
        gridTemplateColumns: active === "Design" ? "repeat(2, 1fr)" : "1fr",
        gap: active === "Design" ? 24 : 86,
        maxWidth: 800,
      
        margin: "0 auto",
      }}>
        {filtered.map((item) =>(
          <div
          key = {item.id}
          onClick={() => item.category === 'Design' && setModalImg(item.image)}
          style = {{
            borderRadius: 5,
            height: active === "Design" ? 280 : 460,
            overflow: "hidden",
            cursor: item.category === 'Design' ? 'zoom-in' : 'default',
          
          }}
          >


            <img 
            src={item.image}
            alt={item.category}
            style={{width: "100%", height: "100%", objectFit: "cover",
              transition: "transform 0.4s ease",
              display: "block",
            }}
            onMouseEnter={e =>{                           //when mouse hover it zoom in
              if (item.category === 'Design')
                e.currentTarget.style.transform = "scale(1.08"
            }}
            onMouseLeave={e =>{
              e.currentTarget.style.transform = "scale(1)"      //when mouse leaves it zoom out
            }}
            />
            //  Hover overlay for Design cards 

            {item.category === 'Design' && (
              <div style={{
                position: "absolute", inset: 0,
                background: "rgba(0,0,0,0)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.35)"}
              onMouseMove={e => e.currentTarget.style.background = "rgba(0,0,0,0)"}
              >
                <span style={{
                  color: "#fff", fontSize: 13, fontWeight: 500,
                  letterSpacing: 1, opacity: 0,
                  transition: "opacity 0.3s",
                  pointerEvents: "none",
                }}
                className='zoom-hint'
                >
                    
                </span>
                </div>
            )} 
          </div>
        ))}

      </div>

      {/* Modal */}

      {modalImg && (
        <div onClick={() => setModalImg(null)}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 9999,
          cursor: "zoom-out",
          padding: 24,
        }}
        >

        {/* Close Button */}

        <button onClick={()=> setModalImg(null)}
          style={{
            position: "absolute", top: 20, right: 28,
            background: "none", border: "none",
            color: "#fff", fontSize: 32, cursor: "pointer", lineHeight: 1,
          }}
          >
            X

        </button>

        {/* Image - stop click bubbling so image click dosent close */}
        <img
        src={modalImg}
        alt='expanded'
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: "90vw", maxHeight: "88vh",
          objectFit: "contain",
          borderRadius: 8,
          boxShadow: "0 8px 48px rgba(0,0,0,0.6)",
          animation: "zoomIn 0.25s"
        }}
        />

        </div>
      )}

      {/* Zoom-in animation */}
      <style>{`
      @keyframes zoomIn{
      from {transform: scale(0.85); opacity: 0;}
      to {transform: scale(1); opacity: 1;}
      }
      div:hover .zoom-hint{
      opacity: 1!important;
      }
      `}

      </style>

  </section>
  )
}



export default Portfolio
