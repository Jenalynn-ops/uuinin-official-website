import './page.css'
export default function ReturnRefundPolicy() {
  return <div className='container-box'>
    <div className='main'>
      <div className="header">
        <h1>UUININ - Return & Refund Policy</h1>
        <div className="subtitle">Effective Date: 2025.7.2</div>
        <div className="subtitle">Applicable Regions: UAE</div>
      </div>

      <div className="divider"></div>

      <h2>1. Return & Refund Eligibility & Period</h2>
      <ul>
        <li>Customers may request a return or refund within <strong>15 calendar days</strong> of the receipt of shipment for most items. Some products may have different policies or requirements associated with them.</li>
        <li>For <strong>refurbished items</strong>, the return or refund period is <strong>7 calendar days</strong> post of the receipt of shipment.</li>
        <li>Refunds and returns will be processed ONLY if:
          <ul>
            <li>Incorrect item delivered;</li>
            <li>Products that differ materially from description or images;</li>
            <li>It is determined that the product was not damaged while in your possession;</li>
            <li>The product is not different from what was shipped to you;</li>
            <li>The product is returned in the same condition as when it was received (sealed/unopened if applicable, with the original brand/manufacturer box or packaging, and, if applicable, any user manual, warranty card and all accessories).</li>
          </ul>
        </li>
      </ul>

      <div className="divider"></div>

      <h2>2. Non-Returnable Items</h2>
      <p>The following products <strong>cannot</strong> be returned or refunded, unless they are defective:</p>
      <ul>
        <li>Hazardous materials (flammable liquids, gases);</li>
        <li>Personal care, hygiene, health, and beauty items once opened;</li>
        <li>Intimate apparel (underwear, swimwear, hosiery);</li>
        <li>Digital content (e.g., e-books, music, software) once accessed;</li>
        <li>Baby hygiene or feeding products;</li>
        <li>Special categories (as per regional regulations).</li>
      </ul>

      <div className="divider"></div>

      <h2>3. Categories Return Policy</h2>
      <div className='table-box'>
        <table border={1}>
          <tr>
            <th>Category</th>
            <th>Eligible Return Window¹</th>
            <th>Condition on Arrival²</th>
            <th>Non-Returnable / Exception Cases</th>
            <th>Additional Notes</th>
          </tr>
          <tr>
            <td>1. Electronics & Smart Devices(phones, tablets, headphones, power banks, wearables, small appliances)</td>
            <td>15 days(7 days for factory-refurbished items)</td>
            <td>• Factory seal intact OR device shows Dead-On-Arrival (DOA) or major functional fault within 48 h of first power-on.• All accessories, manuals, warranty cards, serial-number labels present.</td>
            <td>• Software‐only issues resolvable by update/reset.• Devices damaged during SIM-card cutting, rooting, jail-breaking, or liquid ingress.</td>
            <td>• We may require a diagnostic report or video of the fault before issuing a return label.• If the defect is confirmed, we cover two-way shipping; otherwise, one-way shipping is deducted from the refund.</td>
          </tr>
          <tr>
            <td>2. Automobile Accessories(phone mounts, seat covers, interior LED kits, tyre inflators, dash cams)</td>
            <td>15 days</td>
            <td>• Uninstalled, unused, and in resalable condition OR proven manufacturing defect.• All mounting hardware/adhesives unused and in original sachets.</td>
            <td>• Products that have been hard-wired, drilled, glued, or otherwise permanently installed.• Wear-and-tear after road use (scratches, tyre dirt, etc.).</td>
            <td>• Dash cams/GPS units must be reset to factory settings and all personal footage wiped before return.</td>
          </tr>
          <tr>
            <td>3. Beauty, Personal Care & Intimate Items(cosmetics, skincare, hair tools, lingerie, socks, underwear)</td>
            <td>15 days</td>
            <td>• Sealed & unused for all consumables (creams, masks, make-up, perfumes).• Apparel in original, unopened polybag with hygiene liner and all tags intact.</td>
            <td>• Any item unsealed, tested, swatched, worn, or showing fragrance/spillage.• Hair tools that have come into contact with hair products.</td>
            <td>• Beauty devices (e.g., facial cleansers) follow Electronics rules if unopened; once used, returns accepted only for DOA.</td>
          </tr>

          <tr>
            <td>4. Home & Lifestyle(kitchenware, storage bags, drinkware, décor, small furniture, textiles)</td>
            <td>15 days</td>
            <td>• Unused, unassembled, and in original packaging, including screws/allen keys.• Textile items (curtains, bedding) folded in original wrap.</td>
            <td>• Items showing installation holes, water stains, food residue, or washing/drying.• Custom-cut or monogrammed goods.</td>
            <td>• Drinkware / food-contact items must be returned spotless; any evidence of liquid use voids eligibility.• Flat-packed furniture must be returned with inner protective padding to avoid transit scuffs.</td>
          </tr>
        </table>
      </div>

      <div className='table-box'>
        <tr>
          <th>Category</th>
          <th>Eligible Return Window¹</th>
          <th>Condition on Arrival²</th>
          <th>Non-Returnable / Exception Cases</th>
          <th>Additional Notes</th>
        </tr>

        <tr>
          <td>5. Pets(pet toys, collars, carriers, litter boxes, grooming tools, pet clothing, feeders)</td>
          <td>15 days</td>
          <td>• Unused, unwashed, free of pet hair/odours, in original sanitary wrap.• Electronic items (auto-feeders, fountains) follow Electronics rules if unopened.</td>
          <td>• Any opened edible item (pet food, treats, supplements).• Litter, potty pads and hygiene consumables once unsealed.• Items showing bite marks, scratches, or pet odour.</td>
          <td>• We reserve the right to reject returns that pose a bio-hazard (e.g., evidence of fleas/ticks).</td>
        </tr>

        <tr>
          <td>6. Jewellery & Fashion Accessories(necklaces, bracelets, rings, earrings, hair clips, scarves, belts, watches)</td>
          <td>15 days</td>
          <td>• Tags, certificates, protective films intact; no scratches, sizing marks or perfume residue.• Earrings must be sealed in the original hygiene blister.</td>
          <td>• Pierced jewellery (earrings, nose rings) once hygiene seal broken—unless DOA or wrong item.• Custom-engraved or resized items.</td>
          <td>• High-value items (≥ AED 1,000) may require video unboxing proof for claims.</td>
        </tr>

        <tr>
          <td>7. Apparel & Footwear(tops, trousers, dresses, outerwear, shoes, socks—not underwear)</td>
          <td>15 days</td>
          <td>• Unworn, unwashed, with all swing tags, price labels and spare buttons attached.• Footwear soles must be unmarked and packed in brand box with tissue.</td>
          <td>• Garments showing deodorant stains, perfume, alteration, laundering or ironing.• Socks and hosiery once removed from sealed band (see Intimate rules).</td>
          <td>• Try-on allowed indoors only; remove make-up/fragrance before fitting to avoid refusal.</td>
        </tr>

        <tr>
          <td>8. Sports & Outdoor Gear(fitness equipment, yoga mats, balls, racquets, bicycles, camping gear)</td>
          <td>15 days</td>
          <td>• Unused, unassembled, and free of sweat marks or floor scuffs.• Factory packaging, manuals, tools present.</td>
          <td>• Items that have been inflated, cut to size (e.g., climbing rope), or exposed to water/soil.• Protective gear (helmets, guards) once worn.</td>
          <td>• Bicycles or bulky gear must be returned in original carton; re-boxing fee may apply if missing.</td>
        </tr>
      </div>

      <div className="divider"></div>

      <h2>4. Initiate Request</h2>
      <p>Submit within the return period via:</p>
      <ul>
        <li><strong>UUININ app</strong> Return Center;</li>
        <li><strong>Live chat</strong>/customer service;</li>
        <li><strong>Support email</strong>: uuinin@uuinin.com</li>
      </ul>

      <div className="divider"></div>

      <h2>5. Return & Refund Request Process</h2>
      <ul>
        <li>After the courier picks up your item, it can take up to two weeks for us to receive and process your return.</li>
        <li>Approved refund will be issued to the original payment method, then it may take 7 business days to show on your payment card statement. For Cash-on-Delivery, refunds go to UUININ Wallet or equivalent, processed per jurisdiction rules.</li>
        <li>Items marked as "non-returnable" on the product detail page cannot be returned. However, in an unlikely event a damaged, defective or wrong item is delivered to you, we will provide a full refund or replacement, if available. We may contact you to ascertain the damage/defect in the product prior to issuing the refund/replacement, as applicable. We reserve the right to request further information, or collect or inspect the product to ascertain the damage/defect in the product prior to issuing the refund/replacement.</li>
        <li>Some items may be eligible for replacement only. If the exact same product is not in stock, we will issue a refund.</li>
      </ul>

      <div className="divider"></div>

      <h2>6. Pick-Up & Drop-Off</h2>
      <ul>
        <li>For faulty or incorrect items, free pick-up will be arranged.</li>
        <li>For customer-initiated returns, a <strong>trackable return shipment</strong> to a UUININ warehouse is required.</li>
      </ul>

      <div className="divider"></div>

      <h2>7. Shipping & Refund Costs</h2>

      <div className='table-box'>
        <table>
          <tr>
            <th>Reason for Return</th>
            <th>Return Shipping Fee</th>
            <th>Original Shipping Cost</th>
          </tr>

          <tr>
            <td>UUININ or product fault</td>
            <td>UUININ covers</td>
            <td>Refunded</td>
          </tr>

          <tr>
            <td>Customer decision</td>
            <td>Customer pays</td>
            <td>Non-refundable</td>
          </tr>
        </table>
      </div>

      <ul>
        <li>If a customer refuses accepted shipment without valid reason, UUININ may deduct shipping and restocking fees in accordance with local regulations.</li>
      </ul>

      <div className="divider"></div>

      <h2>8. Refund Timeline</h2>
      <ul>
        <li><strong>Inspection</strong>: Up to <strong>2 business days</strong> after warehouse receipt.</li>
        <li><strong>Initiate Refund</strong>: Within <strong>3 business days</strong> post-inspection.</li>
        <li><strong>Customer Receipt</strong>:
          <ul>
            <li><strong>Credit/Debit</strong>: up to <strong>7 business days</strong>.</li>
            <li><strong>Wallet/Other</strong>: per platform terms.</li>
          </ul>
        </li>
      </ul>

      <div className="divider"></div>

      <h2>9. Limitations & Inspection Rejections</h2>
      <ul>
        <li>UUININ reserves the right to <strong>reject</strong> returns that do not meet the policy criteria.</li>
        <li>Products returned in used, opened, or damaged condition (beyond shipping damage) may be <strong>refused</strong> or subject to <strong>partial refund</strong>.</li>
        <li>In such cases, UUININ will offer up to <strong>two attempts</strong> to return the item to the customer. Uncollected items may be held and eventually disposed of after local storage regulations. Customers will be notified accordingly.</li>
      </ul>

      <div className="divider"></div>

      <h2>10. Legal Compliance & Customer Rights</h2>
      <ul>
        <li>This policy is compliant with GCC consumer laws such as:
          <ul>
            <li><strong>UAE Federal Law 15/2020 on Consumer Protection;</strong></li>
            <li><strong>Saudi Arabia's E-Commerce Regulations;</strong></li>
            <li><strong>Qatar's Consumer Protection Law.</strong></li>
          </ul>
        </li>
        <li>Where local law grants greater consumer rights, such rights take precedence.</li>
      </ul>

      <div className="divider"></div>

      <h2>11. Policy Amendments & Dispute Resolution</h2>
      <div className="note-box">
        <ul>
          <li>UUININ may revise this policy. Changes will be published on the app and website.</li>
          <li>In case of disputes, customers should first contact UUININ support.
            If unresolved, matters may be referred to local <strong>consumer protection agencies</strong> or <strong>Dubai International Arbitration Centre</strong>, as applicable.</li>
        </ul>
      </div>
    </div>
  </div>
}