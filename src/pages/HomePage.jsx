function HomePage() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Bluefin Loans</h1>
        <p>Your Trusted Financial Partner</p>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <h3>Quick Application</h3>
          <p>Apply for a loan in minutes</p>
        </div>
        <div className="feature-card">
          <h3>Fast Approval</h3>
          <p>Get approved within 24 hours</p>
        </div>
        <div className="feature-card">
          <h3>Competitive Rates</h3>
          <p>Best rates in the market</p>
        </div>
        <div className="feature-card">
          <h3>Flexible Terms</h3>
          <p>Choose a repayment plan that suits you</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
