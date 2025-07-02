import './page.css'
export default function ShippingPolicy() {
  return <div className='container-box'>
    <div className='main'>
      <div className="header">
        <h1>UUININ Shipping Policy</h1>
        <div className="subtitle">Effective Date: July 2025</div>
        <div className="subtitle">Applicable Regions: UAE</div>
      </div>

      <div className="divider"></div>

      <div className="policy-section">
        <h2>1. Policy Overview</h2>
        <p>To ensure a reliable and transparent shopping experience, UUININ has established the following Shipping Policy. This policy outlines our responsibilities in the transportation of goods, delivery timeframes, logistics fees, and consumer rights regarding logistics and tracking.</p>
      </div>

      <div className="divider"></div>

      <div className="policy-section">
        <h2>2. Delivery Timeframes</h2>

        <h3>2.1 Domestic Shipping</h3>
        <ul>
          <li>Orders are typically dispatched within 2 business days after confirmation.</li>
          <li>Delivery is usually completed within 7 calendar days post-shipping, depending on logistics partner and customer location.</li>
        </ul>

        <h3>2.2 International Shipping</h3>
        <ul>
          <li>International orders are dispatched within 5 business days.</li>
          <li>Delivery may take up to 15 calendar days, depending on destination country, customs clearance, and shipping carrier.</li>
        </ul>
      </div>

      <div className="divider"></div>

      <div className="policy-section">
        <h2>3. Shipping Fees</h2>

        <h3>3.1 Domestic Shipping Costs</h3>
        <ul>
          <li>Fees depend on order value, item weight, dimensions, and selected shipping service.</li>
          <li>Free domestic shipping may be available for selected products or during promotional events (see product page for details).</li>
        </ul>

        <h3>3.2 International Shipping Costs</h3>
        <ul>
          <li>Charges are based on destination, weight, order value, and logistics provider.</li>
          <li>UUININ may offer free international shipping under specific conditions, which may vary by country.</li>
        </ul>
      </div>

      <div className="divider"></div>

      <div className="policy-section">
        <h2>4. Service Interruptions & Order Tracking</h2>

        <h3>4.1 Delays and Force Majeure</h3>
        <ul>
          <li>UUININ is not liable for delays caused by circumstances beyond our control, including but not limited to:
            <ul>
              <li>Natural disasters</li>
              <li>Customs delays</li>
              <li>Extreme weather</li>
              <li>Government restrictions</li>
            </ul>
          </li>
          <li>We will coordinate with logistics partners to resolve issues and update customers promptly.</li>
        </ul>

        <h3>4.2 Order Tracking</h3>
        <ul>
          <li>All orders are trackable through the UUININ app or the logistics provider's official tracking service.</li>
          <li>For delays or unusual updates, customers are encouraged to contact UUININ customer service.</li>
        </ul>
      </div>

      <div className="divider"></div>

      <div className="policy-section">
        <h2>5. Amendments & Interpretation</h2>
        <div className="note-box">
          <p>UUININ reserves the right to update this Shipping Policy as needed to reflect business, legal, or operational changes. Updated terms will be posted on the platform and will take effect upon publication.</p>
          <p>For any disputes or inquiries, customers are advised to contact UUININ Customer Service. The platform retains the final right to interpret this policy.</p>
        </div>
      </div>
    </div>
  </div>
}