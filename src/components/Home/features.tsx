import React from "react";
import {
  FeatureSigninIcon,
  featurCartIcon,
  featureGroomingIcon,
  featurePharmacyIcon,
} from "@/assets/Svgicons";

function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-inner">
          <div className="feature-item" id="signin">
            <div className="feature-icon">{FeatureSigninIcon}</div>
            <div className="feature-text">
              <div className="feature-name">Sign In</div>
              <div className="feature-description">
                To earn rewards, savings, offers and more
              </div>
            </div>
          </div>
          <div className="feature-item" id="signin">
            <div className="feature-icon">{featurCartIcon}</div>
            <div className="feature-text">
              <div className="feature-name">Save 25%</div>
              <div className="feature-description">
                On your first Repeat Delivery order
              </div>
            </div>
          </div>
          <div className="feature-item" id="signin">
            <div className="feature-icon">{featureGroomingIcon}</div>
            <div className="feature-text">
              <div className="feature-name">Book Grooming</div>
              <div className="feature-description">
                Same-day appointments available!
              </div>
            </div>
          </div>
          <div className="feature-item" id="signin">
            <div className="feature-icon">{featurePharmacyIcon}</div>
            <div className="feature-text">
              <div className="feature-name">Emporio Pharmacy</div>
              <div className="feature-description">
                Same-day appointments available!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
