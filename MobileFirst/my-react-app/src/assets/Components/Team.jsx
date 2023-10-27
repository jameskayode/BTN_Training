
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 
import { IconContext } from "react-icons"; 

const Team = () => {
  const teamMembers = [
    {
      name: "Username",
      profession: "Profession",
      image: "/src/assets/images/user1.png",
      socialMedia: [
        <FaFacebook key="facebook" />,
        <FaInstagram key="instagram" />,
        <FaTwitter key="twitter" />,
      ],
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/src/assets/images/user2.jpg",
      socialMedia: [
        <FaFacebook key="facebook" />,
        <FaInstagram key="instagram" />,
        <FaTwitter key="twitter" />,
      ],
    },

    {
      name: "Username",
      profession: "Profession",
      image: "/src/assets/images/user3.png",
      socialMedia: [
        <FaFacebook key="facebook" />,
        <FaInstagram key="instagram" />,
        <FaTwitter key="twitter" />,
      ],
    },
  ];

  return (
    <div className="team-section">
            <div className="team-content">
                <h2> Meet Our Team</h2>
              
                <p>
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics
                </p>
            
        <div className="container5">
         
            {teamMembers.map((member, index) => (
              <div className="col-md-4" key={index}>
                <div className="card-item">
                  <div className="media">
                    <img className="user1-icon" alt="" src={member.image} />
                  </div>
                  <div className="card-content">
                    <b className="h5-team">{member.name}</b>
                    <b className="h6-team">{member.profession}</b>
                    <div className="social-media">
                      <IconContext.Provider
                        value={{
                          color: "blue", 
                          size: "1.5rem", 
                        }}
                      >
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
       
      </div>
    </div>
  );
};

export default Team;
