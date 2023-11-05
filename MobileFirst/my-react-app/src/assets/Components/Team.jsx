
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 

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
      <div className="team-content lg:max-w-[37.9375rem] lg:items-center lg:gap-[0.625rem]">
        <h2> Meet Our Team</h2>

        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
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
                  <FaFacebook className="text-[#335BF5] w-10 h-8 md:text-[#23A6F0]" />
                  <FaInstagram className="text-[#E61F5A] w-10 h-8 md:text-[#23A6F0]" />
                  <FaTwitter className="text-[#335BF5] w-10 h-8 md:text-[#23A6F0]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
