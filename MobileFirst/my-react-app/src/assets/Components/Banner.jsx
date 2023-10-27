
const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-content">
        <span>ABOUT COMPANY</span>
        <h2>ABOUT US</h2>
        <p>
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
        <button className="btn btn-mid btn-primary">Get Quote Now</button>
      </div>
      <div className="banner-img">
        <img src="/src/assets/images/banner.png" alt="" />
      </div>
    </section>
  );
}

export default Banner
