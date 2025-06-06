// src/data.js

import { Images } from './images/images'; // Import the Images object

export const productData = {
  "exitDevices": [
    {
      series: "8300 Series",
      description: "Sargent 8300 Series Exit Devices.",
      functions: [
        {
          functionCode: "8304",
          handing: "handed", // or "reversible"
          explanation: "This function is handed due to the specific trim interaction requiring precise orientation.",
          visuals: {
            lh: Images.lh, // <-- Use Images.lh
            rh: Images.rh, // <-- Use Images.rh
            lhr: Images.lhr, // <-- Use Images.lhr
            rhr: Images.rhr, // <-- Use Images.rhr
          }
        },
        {
          functionCode: "8310",
          handing: "reversible",
          explanation: "This function is fully reversible and does not require specific handing.",
          visuals: {
            generic: Images.reversible // <-- Use Images.reversible
          }
        }
      ]
    },
    {
      series: "8400 Series",
      description: "Sargent 8400 Series Exit Devices.",
      functions: [
        {
          functionCode: "8404",
          handing: "reversible",
          explanation: "This function is fully reversible and does not require specific handing.",
          visuals: {
            generic: Images.reversible // <-- Use Images.reversible
          }
        },
        {
          functionCode: "8413",
          handing: "handed",
          explanation: "This function is handed because of the internal mechanism's orientation.",
          visuals: {
            lh: Images.lh,
            rh: Images.rh,
            lhr: Images.lhr,
            rhr: Images.rhr,
          }
        }
      ]
    },
    {
        series: "8500 Series",
        description: "Sargent 8500 Series Exit Devices.",
        functions: [
          {
            functionCode: "8504",
            handing: "reversible",
            explanation: "This function is fully reversible and does not require specific handing.",
            visuals: {
              generic: Images.reversible
            }
          }
        ]
      },
      {
        series: "8600 Series",
        description: "Sargent 8600 Series Exit Devices.",
        functions: [
          {
            functionCode: "8604",
            handing: "handed",
            explanation: "This function is handed because of the specific cylinder engagement.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          }
        ]
      },
      {
        series: "8700 Series",
        description: "Sargent 8700 Series Exit Devices.",
        functions: [
          {
            functionCode: "8704",
            handing: "reversible",
            explanation: "This function is fully reversible and does not require specific handing.",
            visuals: {
              generic: Images.reversible
            }
          }
        ]
      },
      {
        series: "8800 Series",
        description: "Sargent 8800 Series Exit Devices.",
        functions: [
          {
            functionCode: "8804",
            handing: "handed",
            explanation: "This function is handed due to the specific trim design.",
            visuals: {
              lh: Images.lh,
              rh: Images.rh,
              lhr: Images.lhr,
              rhr: Images.rhr,
            }
          }
        ]
      },
      {
        series: "8900 Series",
        description: "Sargent 8900 Series Exit Devices.",
        functions: [
          {
            functionCode: "8904",
            handing: "reversible",
            explanation: "This function is fully reversible and does not require specific handing.",
            visuals: {
              generic: Images.reversible
            }
          }
        ]
      }
  ],
  "mortiseLocks": [
    {
      type: "All Mortise Locks",
      handing: "handed",
      explanation: "Mortise locks are inherently handed due to the design of the latchbolt and auxiliary latch. You must specify LH, RH, LHR, or RHR.",
      visuals: {
        lh: Images.lh,
        rh: Images.rh,
        lhr: Images.lhr,
        rhr: Images.rhr,
      }
    }
  ],
  "boredLocks": [
    {
      type: "All Bored Locks",
      handing: "reversible",
      explanation: "Bored locks are typically reversible in the field and do not require specific handing unless a specific trim requires it.",
      visuals: {
        generic: Images.reversible // <-- Use Images.reversible
      }
    }
  ]
};